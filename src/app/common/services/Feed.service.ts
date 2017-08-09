/**
 * Created by idea on 20/03/2017.
 */
import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {ApiService} from './Api.service';

@Injectable()
export class FeedService{
    constructor(private http:ApiService){}
    getFeed(options?:any){
        let url = `/feed`;
        return this.http.get(url,options);
    }

    hidden(id:string | number,body?:any){
        let url = `/feed/${id}/hidden`;
        return this.http.post(url,body);
    }
}