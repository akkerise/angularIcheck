/**
 * Created by idea on 27/03/2017.
 */
import { Component, Input  } from '@angular/core';
import { Http, Response, Headers, RequestOptions,URLSearchParams } from '@angular/http';
import * as fromUtility from '../services/Utility.service';
import { GroupService } from '../services/Group.service';
import { Group } from '../models/Group';
@Component({
    selector: 'ick-group',
    template: `
                    <div class="ic-home-follow-box">
                        <header [ngStyle]="{'background-image': 'url(' + convertImage(group.cover) + ')'}">
                            <div class="ic-home-follow-user">
                                <a href="javascript:" *ngFor="let member of group.members" [routerLink]="[OpenLink('PROFILE',member.icheck_id)]">
                                <ick-avatar [owner]="member" width="40" height="40" class="img-circle"
                                [alt]="member.social_name"
                                [title]="member.social_name" size="thumb_medium"></ick-avatar>
                                <!--<ick-img class="img-circle" src="{{member.avatar}}" alt="{{member.social_name}}" title="{{member.social_name}}" size="thumb"></ick-img>-->
                                </a>
                                <span *ngIf="group.user_count - group.members.length > 0">+{{group.user_count - group.members.length}}</span>
                            </div>
                        </header>

                        <footer>
                            <h2>
                                <a href="javascript:" [routerLink]="[OpenLink('GROUP_DETAIL',group.id)]">{{group.name}}</a>
                            </h2>

                            <div class="row">
                                <div class="col-xs-6">
                                    <p class="style-1">{{group.post_count}} bài viết</p>
                                    <p class="style-2"><strong>{{user_count}}</strong> người tham gia</p>
                                </div>
                                <div class="col-xs-6" *ngIf="!is_member">
                                    <a href="javascript:" (click)="join(group)" class="ic-home-join-group">Tham gia nhóm</a>
                                </div>
                                <div class="col-xs-6" *ngIf="is_member">
                                    <a href="javascript:" (click)="leave(group)" class="ic-home-join-group">Rời nhóm</a>
                                </div>
                            </div>
                        </footer>
                    </div>
    `
})

export class GroupComponent {

    is_member:boolean;
    user_count: number;
    private _group:Group;

    @Input()
    set group(value:Group) {
        this.is_member = value.is_member;
        this.user_count = value.user_count;
        this._group = value;
    }

    get group() {
        return this._group;
    }

    constructor(private http:Http, private groupService:GroupService) {
    }

    convertImage(src:string) {
        return fromUtility.UtilityService.getImg(src, 'normal');
    }

    join(grp:Group) {
        this.groupService.joinGroup(grp.id).toPromise().then(data=> {
            if(this.is_member){
                this.user_count--;
            }else{
                this.user_count++;
            }
            this.is_member = !this.is_member;
        });
    }

    leave(grp:Group) {
        this.groupService.leaveGroup(grp.id).toPromise().then(data=> {
            if(this.is_member){
                this.user_count--;
            }else{
                this.user_count++;
            }
            this.is_member = !this.is_member;
        });
    }


    OpenLink(route?:string, id?:string) {
        var Link = fromUtility.UtilityService.route(route, id);
        return Link;
    }
}