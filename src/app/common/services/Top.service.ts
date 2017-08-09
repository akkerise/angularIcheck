/**
 * Created by idea on 20/03/2017.
 */
import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {ApiService} from './Api.service'
@Injectable()
export class TopService {
    constructor(private http:ApiService){}

    top(options?:any){
        let url = `/top`;
        return this.http.get(url,options);
    }


}