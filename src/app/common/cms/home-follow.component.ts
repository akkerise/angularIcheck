/**
 * Created by idea on 17/04/2017.
 */
import { Component, Injector } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { GroupService } from '../services/Group.service';
import { Group } from '../models/Group';
import * as fromUtility from '../services/Utility.service';

@Component({
    selector: 'home-follow',
    template: `
    <div class="ic-home-follow">
        <div class="container">
            <div class="ic-home-title">
                <h3>{{data?.title}}</h3>
            </div>

            <div class="ic-home-follow-items">

                <div class="ic-home-follow-item" *ngFor="let grp of groups">
                    <ick-group [group]="grp"></ick-group>
                </div>

                <div class="ic-clear"></div>
            </div>

            <div class="ic-home-more">
                <a href="javascript:" [routerLink]="[OpenLink('TOP_GROUP')]">Xem tất cả</a>
            </div>
        </div>
    </div>`
})

export class HomeFollowComponent {
    data : any = null;
    groups : Group[];
    constructor(private injector: Injector,public router:Router,private groupService : GroupService) {
        this.data = this.injector.get('data');
        this.groupService.getGroupSuggest(this.injector.get('data').query).toPromise().then(data=>{
            this.groups = data;
        });
    }

    OpenLink(route?:string,id?:string){
        var Link = fromUtility.UtilityService.route(route,id);
        return Link;
    }
}