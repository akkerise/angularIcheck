import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommentService } from '../services/Comment.service';
import { HelperModule } from '../helper/helper.module';
import { Comment } from '../models/Comment';
import { CommentParam } from '../models/CommentParam';
import { Store } from '@ngrx/store';
import {Observable} from 'rxjs/Rx';
import * as fromUtility from '../services/Utility.service';
import {User} from '../models/User';
import * as fromRoot from '../reducers';
import * as post from '../actions/post';

@Component({
    selector: 'sd-comments',
    templateUrl: 'comments.component.html'
})

export class CommentsComponent implements OnInit {
    @Input()
    set query(value:CommentParam) {
        this._param = value;
    }
    get query(){
        return this._param;
    }

    @Input()
        total :number;

    @Input()
        is_reply : boolean = false;

    public comments:Comment[] = [];
    private _param : CommentParam;
    public subParam : {[id:string]:CommentParam} = {};
    private storeUser;
    private storeComment;
    public currentUser:User = null;
    public model = {};

    constructor(private commentService:CommentService,
                private store:Store<fromRoot.State>) {

    }

    ngOnInit() {
        this.storeUser = this.store.select(fromRoot.getUser).subscribe(data => {
            this.currentUser = data;
        });
        this.onLoadMore();

    }

    onLoadMore() {
        this.query.skip = this.comments.length;
        this.commentService.getComments(this.query).toPromise().then(comments => {
            comments.forEach(comment => {
                this.comments.push(comment);
            });
        });
    }

    onReply(comment:Comment) {
        if(!this.subParam[comment.id]){
            let param = new CommentParam();
            param.limit = 10;
            param.parent = comment.id;
            param.object_id = this.query.object_id;
            param.service = this.query.service;
            this.subParam = Object.assign(this.subParam, {
                [comment.id]: param
            });
        }
    }

    like(comment:Comment){
        this.commentService.likeComment(comment.id,{is_like:!comment.is_like,service:comment.service}).toPromise().then(data=>{
            console.log(data);
        });
    }

    OpenLink(route?:string, id?:string) {
        var Link = fromUtility.UtilityService.route(route, id);
        return Link;
    }

    onSubmit() {
        this.model['object_id'] = this.query.object_id;
        if(this.query.parent)
        this.model['parent'] = this.query.parent;
        this.model['service'] = this.query.service;

        this.commentService.postComment(this.model).toPromise().then((comment : Comment)=>{
            this.comments.unshift(comment);
        });
        this.model = {};
    }

    ngOnDestroy() {
        this.storeUser.unsubscribe();
    }
}