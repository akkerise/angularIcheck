/**
 * Created by idea on 20/03/2017.
 */
import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {ApiService} from './Api.service'
import { Post } from '../models/Post';
@Injectable()
export class PostService{
    constructor(private http:ApiService){}
    getLikesById(id,options?:any,type?:string){
        let url = `/posts/${id}/likes`;
        if(type == 'product'){
            url = `/products/${id}/likes`;
        }
        return this.http.get(url,options);
    }
    likePost(id,body:any){
        let url = `/posts/${id}/likes`;
        return this.http.post(url,body);
    }
    getPostById(id,options?:any){
        let url = `/posts/${id}`;
        return this.http.get(url,options);
    }
    listPost(options?:any){
        let url = `/posts`;
        return this.http.get(url,options);
    }
    createPost(body?:Post){
        let url = `/posts`;
        return this.http.post(url,body);
    }
    deletePost(id:string|number){
        let url = `/posts/${id}`;
        return this.http.delete(url);
    }
    subscribePost(id:string|number,body:any){
        let url = `/posts/${id}/subscribe`;
        return this.http.post(url,body);
    }
    reportPost(id:string,body:{object_id:string|number,type_id:number,note?:string},type?:string){
        let url = `/posts/${id}/reports`;
        if(type == 'product'){
            url = `/products/${id}/reports`;
        }
        return this.http.post(url,body);
    }

    sharePost(body:Post){
        let url = `/posts`;
        return this.http.post(url,body);
    }

    getReportType(type?:string,options?:any){
        let url = `/posts/report-types`;
        if(type=='product'){
            url = `/reports/types`;
        }
        return this.http.get(url,options);
    }

    countPost(options?:any){
        let url = `/count`;
        return this.http.get(url,options);
    }
}