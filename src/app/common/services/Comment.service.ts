/**
 * Created by idea on 20/03/2017.
 */
import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {ApiService} from './Api.service';
import { Comment } from '../models/Comment';
@Injectable()
export class CommentService{
    constructor(private http:ApiService){}
    getCommentById(id,options?:any){
        let url = `/comments/${id}/likes`;
        return this.http.get(url,options);
    }
    getComments(options?:any){
        let url = `/comments`;
        return this.http.get(url,options);
    }

    likeComment(id,body:any){
        let url = `/comments/${id}/likes`;
        return this.http.post(url,body);
    }

    postComment(body:any) : Observable<Comment> {
        let url = `/comments`;
        return this.http.post(url,body);
    }

    deleteComment(id){
        let url = `/comments/${id}/delete`;
        return this.http.delete(url);
    }
}