/**
 * Created by idea on 20/03/2017.
 */
import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions,URLSearchParams } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import { environment } from '../../../environments/environment';
@Injectable()
export class MiningApiService {
    private header:Headers;

    constructor(private http:Http) {
        let contentHeaders = new Headers();
        this.header = contentHeaders;
        this.header.set("Authorization", "Basic aWNoZWNrOmlZQUYmO2NCZSNHM2F+RDojaGVjaw==");
        if (localStorage.getItem('Access-Token')) {
            this.header.append('Access-Token', localStorage.getItem('Access-Token'));
        }
    }

    public setHeader(key:string, value:string):MiningApiService {
        this.header.append(key, value);
        return this;
    }

    get(url:string, options?:any):Observable<any> {
        let params = new URLSearchParams();
        if (typeof options === 'object') {
            for (var i in options) {
                params.set(i, options[i]);
            }
        }
        return this.http.get(environment.miningapi + url, {headers: this.header, search: params})
            .map((res:any) => {
                return this.check(res);
            })
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

    post(url:string, body:any):Observable<Response> {
        return this.http.post(environment.miningapi + url, body, {headers: this.header})
            .map((res:Response) => {return this.check(res);})
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }
    check(res){
        var response = res.json();
        if (response.status == 200) {
            return response.data;
        } else {
            throw res;
        }
    }


}