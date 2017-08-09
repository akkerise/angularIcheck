import { Component, Input } from '@angular/core';
import { User } from '../models/User';
import { Feed } from '../models/Feed';
import * as fromUtility from '../services/Utility.service';

@Component({
    selector: 'feed-title',
    template: `
    <div class="ic-widget-plug" *ngIf="feed.title">
    <ng-template ngFor let-actor="$implicit" [ngForOf]="feed.title.actors" let-i="index">
        <strong><a href="javascript:" [routerLink]="[OpenLink('PROFILE',actor.icheck_id)]">{{currentUser && currentUser.icheck_id === actor.icheck_id ? 'Bạn' : actor.social_name}}</a></strong>
    </ng-template>
    đã {{actionName}} {{convertedObject.type}}
    <strong>{{convertedObject.name}}</strong>
    </div>
`
})
export class TitleComponent{
    @Input()
    set feed(value:Feed) {
        this._feed = value;
        if (value.title) {
            this.convertedObject = fromUtility.UtilityService.targetActionName(value.body.type, value.body, value.header ? value.header.owner.social_name : null);
            this.actionName = fromUtility.UtilityService.actionName(value.title.action);
        }
        if(value.body.post){
            this.convertedObject = fromUtility.UtilityService.targetActionName('post', value.body.post.body, value.body.post.header ? value.body.post.header.owner.social_name : null);
            this.actionName = fromUtility.UtilityService.actionName('share');
        }
    }

    get feed() {
        return this._feed;
    }

    @Input()
        currentUser : User = null;

    private _feed;
    public actionName:string;
    public objectType:string;
    public convertedObject:any;

    constructor() {

    }

    OpenLink(route?:string, id?:string) {
        var Link = fromUtility.UtilityService.route(route, id);
        return Link
    }

}