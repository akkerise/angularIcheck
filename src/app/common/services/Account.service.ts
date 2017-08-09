/**
 * Created by idea on 20/03/2017.
 */
import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {ApiService} from './Api.service'
@Injectable()
export class AccountService {
    constructor(private http:ApiService) {
    }

    get() {
        let url = `/users/me`;
        return this.http.get(url);
    }
    nextStep(body:any){
        let url = `/account/step`;
        return this.http.post(url,body);
    }

    update(body:any){
        let url = `/account/update`;
        return this.http.post(url,body);
    }


}