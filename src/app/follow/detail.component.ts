import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as fromRoot from '../common/reducers';
import * as actionAuth from '../common/actions/authentication';
import {User} from '../common/models/User';
import {Feed} from '../common/models/Feed';
import {PostService} from '../common/services/Post.service';
/**
 * This class represents the lazy loaded HomeComponent.
 */
declare var $:any;

@Component({
    selector: 'sd-follow-detail',
    templateUrl: 'detail.component.html'
})

export class DetailFeedComponent implements OnInit,OnDestroy {

    public currentUser : User = null;
    private storeUser;
    private paramFeed;
    public feed : Feed;

    constructor(private router : Router,
                private activatedRoute:ActivatedRoute,
                private store : Store<fromRoot.State>,
                private postService : PostService
    ) {

    }

    ngOnInit() {
        this.storeUser =  this.store.select(fromRoot.getUser).subscribe(data => {
            this.currentUser = data;
        });
        this.paramFeed = this.activatedRoute.params.subscribe((params:any) => {
            let id = params['id'];
            this.postService.getPostById(id).toPromise().then(data=>{
                this.feed = data;
            });
        });

    }


    ngOnDestroy(){
        this.storeUser.unsubscribe();
        this.paramFeed.unsubscribe();
    }



}
