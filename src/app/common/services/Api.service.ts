/**
 * Created by idea on 20/03/2017.
 */
import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions,URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { environment } from '../../../environments/environment';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {
    private header:Headers;
    private endPoint:string;

    constructor(private http:Http,private router: Router) {
        let contentHeaders = new Headers();
        this.header = contentHeaders;
        if (localStorage.getItem('Access-Token')) {
            this.header.set('Access-Token', localStorage.getItem('Access-Token'));
        }
    }

    public setHeader(key:string, value:string):ApiService {
        this.header.set(key, value);
        return this;
    }

    public setEndPoint(s:string){
        this.endPoint = s;
    }

    get(url:string, options?:any):Observable<any> {
        let params = new URLSearchParams();
        if (typeof options === 'object') {
            for (var i in options) {
                params.set(i, options[i]);
            }
        }
        return this.http.get(environment.api + url, {headers: this.header, search: params})
            .map((res:any) => {
                return this.check(res);
            })
            .catch((error:any) => Observable.throw(error.error || 'Server error'));
    }

    post(url:string, body?:any):Observable<any> {
        return this.http.post(environment.api + url, body, {headers: this.header})
            .map((res:Response) => {return this.check(res);})
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

    delete(url:string):Observable<any>{
        return this.http.delete(environment.api + url, {headers: this.header})
            .map((res:Response) => {return this.check(res);})
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

    findOne(data:{}){
        return this.get(this.endPoint,data);
    }

    check(res){
        var response = res.json();
        if (response.status == 200) {
            return response.data;
        }else if(response.status == 402){
            localStorage.removeItem('Access-Token');
            this.router.navigate(['/login']);
            throw response;
        }else if(response.status == 404){
            response.error = 'empty data';
            throw response;
        }
        else {
            throw response;
        }
    }


}