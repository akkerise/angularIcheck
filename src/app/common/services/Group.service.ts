/**
 * Created by idea on 20/03/2017.
 */
import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {ApiService} from './Api.service'
@Injectable()
export class GroupService {
    constructor(private http:ApiService) {
    }

    getPostsByGroup(group_id, options?:any) {
        let url = `/groups/${group_id}/posts`;
        return this.http.get(url,options);
    }

    getMembersByGroup(group_id, options?:any) {
        let url = `/groups/${group_id}/members`;
        return this.http.get(url,options);
    }

    getGroupById(group_id,options?:any){
        let url = `/groups/${group_id}`;
        return this.http.get(url,options);
    }

    getGroupSuggest(options?:any){
        let url = `/suggest-group`;
        return this.http.get(url,options);
    }

    joinGroup(id:number,body?:any){
        let url = `/groups/${id}/join`;
        return this.http.post(url,body);
    }

    leaveGroup(id:number,body?:any){
        let url = `/groups/${id}/leave`;
        return this.http.post(url,body);
    }

    inviteToGroup(id:number,body?:any){
        let url = `/groups/${id}/invite`;
        return this.http.post(url,body);
    }

}