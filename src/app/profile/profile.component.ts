import { Component, OnInit, OnDestroy } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ModalInfoService } from '../common/services/ModalInfo.service';
import * as fromBreadcrumb from '../common/reducers/breadcrumb';
import * as fromUtility from '../common/services/Utility.service';
import * as fromRoot from '../common/reducers';
import { UserService } from '../common/services/User.service';
import { CollectionService } from '../common/services/Collection.service';
import { User } from '../common/models/User';

@Component({
    selector: 'sd-profile',
    templateUrl: 'profile.component.html'
})
export class ProfileComponent implements OnInit,OnDestroy {


    public size = 'original';
    private routerChange : any;
    private storeUser;
    public currentUser : User = null;
    public following : User[] = [];
    public user:User = null;
    public publicInfo :boolean = true;
    public is_me :boolean = false;

    constructor(
        private store : Store<fromRoot.State>,
        private _modalInfoService:ModalInfoService,
        private activatedRoute: ActivatedRoute,
        private userService : UserService,
        private collectionService : CollectionService
        ){

    }

    ngOnInit() {
        this.store.dispatch({type: fromBreadcrumb.RESET});
        this.storeUser =  this.store.select(fromRoot.getUser).subscribe(data => {
            this.currentUser = data;
        });
        this.routerChange = this.activatedRoute.params.subscribe((params: Params) => {
            let id = params['id'];
            this.userService.getUsersById(id).toPromise().then(data=>{
                if(this.currentUser && this.currentUser.icheck_id){
                    if(this.currentUser.icheck_id == data.icheck_id){
                        this.is_me = true;
                    }else{
                        this.is_me = false;
                    }
                }
                this.user = data;
            });
            this.userService.getFollowingById(id).toPromise().then(data=>{
                this.following = data;
            });
            this.collectionService.list().toPromise().then(data=>{
                console.log(data);
            });

        });

    }

    ngOnDestroy():void {
        this.routerChange.unsubscribe();
    }

    convertImage(img:string){
        return fromUtility.UtilityService.getImg(img);
    }

    OpenLink(route?:string, id?:string) {
        var Link = fromUtility.UtilityService.route(route, id);
        return Link;
    }




}