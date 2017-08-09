/**
 * Created by idea on 17/04/2017.
 */
import { Component, Injector } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import * as fromUtility from '../services/Utility.service';
import { User } from '../models/User';
import { TopService } from '../services/Top.service';
import { UserService } from '../services/User.service';

@Component({
    selector: 'home-feedback',
    template: `
            <div class="ic-home-feedback">
        <div class="container">
            <div class="ic-home-title">
                <h3>{{data?.title}}</h3>
            </div>

            <div class="ic-home-feedback-items">

                <div class="ic-home-feedback-item" *ngFor="let user of users">
                    <ick-user [user]="user"></ick-user>
                </div>

                <div class="ic-clear"></div>
            </div>

            <div class="ic-home-more">
                <a href="javascript:" [routerLink]="[OpenLink('TOP_USER')]" class="no-arr">Xem thêm người dùng đáng tin cậy</a>
            </div>
        </div>
    </div>
    `
})

export class HomeFeedbackComponent {
    data : any = null;
    users : User[] = [];

    constructor(private injector: Injector,public router:Router,private topService:TopService,private userService:UserService) {
        this.data = this.injector.get('data');
        this.topService.top(this.injector.get('data').query).toPromise().then(data=>{
            this.users = data;
        })
    }

    OpenLink(route?:string,id?:string){
        var Link = fromUtility.UtilityService.route(route,id);
        return Link;
    }

}