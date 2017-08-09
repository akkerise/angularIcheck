import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as fromRoot from '../common/reducers';
import * as actionAuth from '../common/actions/authentication';
import * as feed from '../common/actions/feed';
import {User} from '../common/models/User';
import {Feed} from '../common/models/Feed';
import { Group } from '../common/models/Group';
import {GroupService} from '../common/services/Group.service';
import {TopService} from '../common/services/Top.service';
import {UploadService} from '../common/services/Upload.service';
/**
 * This class represents the lazy loaded HomeComponent.
 */
declare var $:any;

@Component({
    selector: 'sd-follow',
    templateUrl: 'follow.component.html'
})

export class FollowComponent implements OnInit,OnDestroy {

    public currentUser : User = null;
    public feeds : Feed[] = null;
    public showArray = [];
    private storeUser;
    private storeFeed;
    private storeCheck;
    private feedLoad;
    private files : File[] = [];
    public url;
    public groups : Group[] = [];
    public users : User[] = [];

    private isMore : boolean = true;
    private isLoading : boolean = true;
    postForm:FormGroup;
    private model : any = {};
    constructor(private router : Router,
                private store : Store<fromRoot.State>,
                private uploadService : UploadService,
                private groupService : GroupService,
                private topService : TopService
    ) {
    }

    onSubmit() {
        let self = this;
        if(self.files[0]){
            let urlUpload = this.uploadService.upload(this.files);
            console.log(urlUpload);
        }
        this.store.dispatch(new feed.AddAction(this.model));
        this.model = {};
    }

    ngOnInit() {
        this.store.dispatch(new feed.LoadAction());
        this.storeUser =  this.store.select(fromRoot.getUser).subscribe(data => {
            this.currentUser = data;
        });
        this.storeFeed = this.store.select(fromRoot.getPosts).subscribe(data=>{
            this.feeds = data;
            this.loadDataToView(data);
        });
        this.storeCheck = this.store.select(fromRoot.havingDataPosts).subscribe(data=>{
            this.isMore = data;
        });
        this.feedLoad = this.store.select(fromRoot.getLoadindFeed).subscribe(data=>{
            this.isLoading = data;
        });
        this.groupService.getGroupSuggest({
            limit:4,
            skip:0,
            fields: 'members.limit(5)'
        }).toPromise().then(data=>{
            this.groups = data;
        });
        this.topService.top({
            limit: 4,
            skip: 0,
            fields: 'activities.limit(2)',
            type: 'user_review'
        }).toPromise().then(data=>{
            this.users = data;
        })

    }

    loadDataToView(data:Feed[] = []){
        this.showArray = [];
        let jump = 2;
        let start = 0;
        let feedArray : any[] = [];
        while(start <= data.length){
            feedArray.push(data.slice(start,start+jump));
            start = start + jump;
        }
        for(var int = 0; int < feedArray.length;int++){
            for(var sub=0;sub<feedArray[int].length;sub++){
                if(this.showArray[sub]){
                    this.showArray[sub].push(feedArray[int][sub]);
                }else{
                    this.showArray[sub] = [];
                    this.showArray[sub].push(feedArray[int][sub]);
                }
            }
        }
    }
    onScrollFeed(){
        if ($(window).scrollTop() > $(document).height() - ($(window).height() + 600)) {
            if(this.isMore && this.feeds[this.feeds.length-1] && !this.isLoading){
                this.store.dispatch(new feed.LoadAction({since:this.feeds[this.feeds.length-1].created_at}));
            }
        }
    }
    ngOnDestroy(){
        this.storeUser.unsubscribe();
        this.storeFeed.unsubscribe();
        this.storeCheck.unsubscribe();
    }
    readUrl(event) {
        if (event.target.files && event.target.files[0]) {
            this.files = event.srcElement.files;
            var reader = new FileReader();

            reader.onload = (event:any) => {
                this.url = event.target.result;
            };

            reader.readAsDataURL(event.target.files[0]);
        }
    }


}
