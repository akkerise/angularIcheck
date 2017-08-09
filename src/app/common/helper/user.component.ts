/**
 * Created by idea on 27/03/2017.
 */
import { Component, Input  } from '@angular/core';
import { User } from '../models/User';
import { Http, Response, Headers, RequestOptions,URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import * as fromUtility from '../services/Utility.service';
import { UserService } from '../services/User.service';

@Component({
    selector: 'ick-user',
    template: `
                    <div class="ic-home-feedback-box">
                        <header>
                            <div class="ic-home-cover" [ngStyle]="{'background-image': 'url(' + convertImage(user.cover) + ')'}">
                                <div class="ic-home-avatar">
                                    <a href="javascript:" [routerLink]="[OpenLink('PROFILE',user.icheck_id)]">
                                    <ick-avatar [owner]="user" width="40" height="40" class="img-circle"
                                        [alt]="user.social_name"
                                        [title]="user.social_name" size="thumb_medium"></ick-avatar>
                                    </a>
                                </div>
                            </div>

                            <div class="ic-home-feedback-info">
                                <div class="row">
                                    <div class="col-xs-4" *ngIf="!is_follow">
                                        <a href="javascript:" (click)="follow(user)" class="ic-home-follow-user">Follow</a>
                                    </div>
                                    <div class="col-xs-4" *ngIf="is_follow">
                                        <a href="javascript:" (click)="follow(user)" class="ic-home-followed">Unfollow</a>
                                    </div>

                                    <div class="col-xs-8">
                                        <p><strong>{{user.social_name}}</strong></p>
                                        <p class="style-2">{{user.post_count}} bài viết</p>
                                        <p class="style-2">{{follower_count}} người theo dõi</p>
                                    </div>
                                </div>
                            </div>
                        </header>
                        <footer *ngIf="user.activities">
                            <ul>
                                <li *ngFor="let act of user.activities">
                                    Đã <strong class="ic-home-note-success">{{actionName(act.action)}}</strong> cho {{objectTarget(act.target.type,act.target.title).type}} <a href="#">{{objectTarget(act.target.type,act.target.title).name}}</a>
                                </li>
                            </ul>
                        </footer>
                    </div>
    `
})

export class UserComponent {

    private _user : User;
    public  is_follow : boolean;
    public follower_count : number;

    @Input()
        set user(value : User){
        this.is_follow = value.is_follow;
        this.follower_count = value.follower_count;
        this._user = value;
    }
    get user(){
        return this._user;
    }

    constructor(private http:Http,private userService:UserService) {
    }

    convertImage(src:string){
        return fromUtility.UtilityService.getImg(src,'normal');
    }

    actionName(action:string=''){
        return fromUtility.UtilityService.actionName(action);
    }

    objectTarget(type:string,name:string,owner?:string){
        return fromUtility.UtilityService.targetActionName(type,name,owner);
    }

    follow(user:User){
        this.userService.followUser(user.icheck_id,{is_follow:!this.is_follow}).toPromise().then(
                data => {
                    if(data){
                        if(this.is_follow){
                            this.follower_count--;
                        }else{
                            this.follower_count++;
                        }
                        this.is_follow = !this.is_follow;
                    }
            }
        );
    }

    OpenLink(route?:string,id?:string){
        var Link = fromUtility.UtilityService.route(route,id);
        return Link;
    }
}