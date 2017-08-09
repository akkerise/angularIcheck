/**
 * Created by idea on 20/04/2017.
 */
import { Component, Injector } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { UserService } from '../services/User.service';
import { Notification } from '../models/Notification';
import * as fromUtility from '../services/Utility.service';

@Component({
    selector: 'sd-notifications',
    templateUrl: './notifications.component.html'
})

export class NotificationsComponent {
    data : any = null;
    notifications : Notification[] = [];
    is_read : any = [];


    constructor(public router:Router,private userService : UserService) {
        this.userService.getNotifications().toPromise().then(data=>{
            this.notifications = data;
            data.forEach(notif=>{
                this.is_read[notif.id] = notif.is_read;
            });
        });
    }

    actionName(action:string){
       return fromUtility.UtilityService.actionName(action);
    }

    read(notification:any){
        this.userService.readNotification(notification.id).toPromise().then(data=>{
            this.is_read[notification.id] = true;
        })
    }

    objectAction(type:string,body:any,ownerName:string){
        return fromUtility.UtilityService.targetActionName(type, body, ownerName);
    }

    OpenLinkType(type?:string,id?:string){
        var route : string = '';
        switch (type){
            case 'product':
                route = 'DETAIL';
                break;
            case 'post':
                route = 'POST_DETAIL';
                break;
            case 'news':
                route = 'NEW_DETAIL';
                break;
            case 'new':
                route = 'NEW_DETAIL';
                break;
            case 'user':
                route = 'PROFILE';
                break;
            default :
                route = 'HOME';
                break;
        }
        var Link = fromUtility.UtilityService.route(route,id);
        return Link;
    }
    checkRead(is_read:boolean){
        if(is_read){
            return {'background-color':'whitesmoke'}
        }
    }


}