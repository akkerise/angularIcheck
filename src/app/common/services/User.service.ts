/**
 * Created by idea on 21/03/2017.
 */
import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {ApiService} from './Api.service'
@Injectable()
export class UserService {
    constructor(private http:ApiService) {
    }
    getCollectionByParentId(parent_id,options?:any){
        let url = `/users/${parent_id}/collections`;
        return this.http.get(url,options);
    }
    getPostsById(user_id,options?:any){
        let url = `/users/${user_id}/posts`;
        return this.http.get(url,options);
    }
    getFollowingById(id:string,options?:any){
        let url = `/users/${id}/following`;
        return this.http.get(url,options);
    }
    getGroupsById(user_id,options?:any){
        let url = `/users/${user_id}/groups`;
        return this.http.get(url,options);
    }
    getFollowerById(id:string,options?:any){
        let url = `/users/${id}/follower`;
        return this.http.get(url,options);
    }
    getUsersById(id:string,options?:any){
        let url = `/users/${id}`;
        return this.http.get(url,options);
    }
    followUser(user_id:string,body:any){
        let url = `/users/${user_id}/follow`;
        return this.http.post(url,body);
    }

    getNotifications(options?:{since:number,new:boolean}){
        let url = `/notifications`;
        return this.http.get(url,options);
    }

    getCountNotification(options?:any){
        let url = `/notifications/unread-count`;
        return this.http.get(url,options);
    }

    readNotification(id:string,options?:any){
        let url = `/notifications/${id}/read`;
        return this.http.post(url,options);
    }
}