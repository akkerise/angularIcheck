/**
 * Created by idea on 20/03/2017.
 */
import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {ApiService} from './Api.service';
import { Collection } from '../models/Collection';

@Injectable()
export class CollectionService {
    constructor(private http:ApiService) {
    }

    list(options?:any) {
        let url = `/collections`;
        return this.http.get(url,options);
    }

    find(id:number){
        let url = `/collections/${id}`;
        return this.http.get(url);
    }

    create(body?:Collection){
        let url = `/collections`;
        return this.http.post(url,body);
    }

    listItem(collection_id:string,options?:{limit:number,skip:number}){
        let url = `/collections/${collection_id}/items`;
        return this.http.get(url,options);
    }

}