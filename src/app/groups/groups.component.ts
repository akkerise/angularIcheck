import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute,Params} from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromRoot from '../common/reducers';
import * as fromBreadcrumb from '../common/reducers/breadcrumb';
import * as fromUtility from '../common/services/Utility.service';
import { Group } from '../common/models/Group';
import { GroupService } from '../common/services/Group.service';
/**
 * This class represents the lazy loaded HomeComponent.
 */
declare var $:any;

@Component({
    selector: 'sd-users',
    templateUrl: 'groups.component.html'
})

export class GroupsComponent implements OnInit,OnDestroy {

    groups : Group[] = [];
    page = 0;
    limit = 30;
    private more:boolean = true;

    constructor(
                private router:Router,
                private store:Store<fromRoot.State>,
                private groupService:GroupService
    ) {
        this.store.dispatch({type: fromBreadcrumb.ADDITEM,payload:[{name:'Cộng đồng',link:this.OpenLink('TOP_GROUP')}]});
    }

    ngOnInit() {
        this.loadGroups(this.limit,0);
    }

    onScroll() {
        if (this.more) {
            this.page = this.page + 1;
            var skip = this.page * this.limit;
            this.loadGroups(this.limit,skip);
        }
    }

    loadGroups(limit:number = 20,skip:number = 0){
        this.groupService.getGroupSuggest({
            limit:limit,
            skip:skip,
            fields: 'members.limit(5)',
        }).toPromise().then(data=>{
            this.groups = data;
        });
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
