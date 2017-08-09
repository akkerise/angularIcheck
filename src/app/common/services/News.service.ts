/**
 * Created by idea on 20/03/2017.
 */
import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {ApiService} from './Api.service'
@Injectable()
export class NewsService {
    constructor(private http:ApiService) {
    }

    get(id:string,options?:any) {
        let url = `/news/${id}`;
        return this.http.get(url,options);
    }
    all(options?:any){
        let url = `/news`;
        return this.http.get(url,options);
    }
    count(options?:any){
        let url = `/news/count`;
        return this.http.get(url,options);
    }

    getNewsCategories(options?:any){
        let url = `/post-categories`;
        return this.http.get(url,options);
    }

    getNewsByCategory(cat_id:number,options?:any){
        let url = `/post-categories/${cat_id}/posts`;
        return this.http.get(url,options);
    }
}