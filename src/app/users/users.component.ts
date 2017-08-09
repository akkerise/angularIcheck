import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute,Params} from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as fromRoot from '../common/reducers';
import * as fromBreadcrumb from '../common/reducers/breadcrumb';
import { User } from '../common/models/User';
import { TopService } from '../common/services/Top.service';
import * as fromUtility from '../common/services/Utility.service';
/**
 * This class represents the lazy loaded HomeComponent.
 */
declare var $:any;

@Component({
    selector: 'sd-users',
    templateUrl: 'users.component.html'
})

export class UsersComponent implements OnInit,OnDestroy {

    users : User[] = [];
    page = 0;
    limit = 30;
    private more:boolean = true;

    constructor(
                private router:Router,
                private store:Store<fromRoot.State>,
                private topService:TopService
    ) {
        this.store.dispatch({type: fromBreadcrumb.ADDITEM,payload:[{name:'Người dùng',link:this.OpenLink('TOP_USER')}]});
    }

    ngOnInit() {
        this.loadUsers(this.limit,0);
    }

    onScroll(groupId) {
        if (this.more) {
            this.page = this.page + 1;
            var skip = this.page * this.limit;
            this.loadUsers(this.limit,skip);
        }
    }

    loadUsers(limit:number = 20,skip:number = 0){
        this.topService.top({limit:limit,skip:skip,fields:'activities.limit(2)',type:'user_review'}).toPromise().then(data=>{
            this.users = data;
        })
    }


    OpenLink(route?:string,id?:string){
        var Link = fromUtility.UtilityService.route(route,id);
        return Link;
    }

    ngOnDestroy() {
        this.store.dispatch({
            type: fromBreadcrumb.RESET
        });
    }



}
