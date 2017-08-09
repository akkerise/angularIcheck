/**
 * Created by idea on 20/03/2017.
 */
import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {ApiService} from './Api.service'
@Injectable()
export class CategoryService {
    constructor(private http:ApiService) {
    }

    list(options?:any) {
        let url = `/categories`;
        return this.http.get(url,options);
    }

    find(id:number){
        let url = `/categories/${id}`;
        return this.http.get(url);
    }

}