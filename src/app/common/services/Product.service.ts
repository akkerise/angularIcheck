/**
 * Created by idea on 20/03/2017.
 */
import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {ApiService} from './Api.service'
import {MiningApiService} from './MiningApi.service'
@Injectable()
export class ProductService {
    constructor(private http:ApiService,private http2:MiningApiService){}
    getSubscribeById(id,body:any){
        let url = `/products/${id}/subscribe`;
        return this.http.post(url,body);
    }
    getContributeById(id,body:any){
        let url = `/products/${id}/contributes`;
        return this.http.post(url,body);
    }
    get(id){
        let url = `/products/${id}`;
        return this.http.get(url);
    }
    browser(options?:any){
        let url = `/popular/category`;
        return this.http2.get(url,options);
    }

    likeProduct(id,body:any){
        let url = `/products/${id}/likes`;
        return this.http.post(url,body);
    }

    browser2(id,options?:any){
        let url = `/category/${id}`;
        return this.http.get(url,options);
    }

    getProductGroup(options?:any){
        let url = `/product-groups`;
        return this.http.get(url,options);
    }
    getProductByGroup(group_id:number,options?:any){
        let url = `/product-groups/${group_id}/products`;
        return this.http.get(url,options);
    }


}