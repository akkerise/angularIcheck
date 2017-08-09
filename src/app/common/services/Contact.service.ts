/**
 * Created by idea on 20/03/2017.
 */
import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {ApiService} from './Api.service'
@Injectable()
export class ContactService{
    constructor(private http:ApiService){}

    postContact(contact_content: any)
    {
        // console.log(url);
        let url = `/contact`;
        return this.http.post(url, contact_content);
    }

    postFeedback(feedback_content: any)
    {
        let url = `/feedback`;
        return this.http.post(url, feedback_content);
    }
}