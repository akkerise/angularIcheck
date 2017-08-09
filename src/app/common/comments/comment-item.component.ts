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
    selector: 'sd-comment-item',
    template: `
                                <div class="media">
                                    <div class="media-left">
                                        <a href="javascript:" [routerLink]="[OpenLink('PROFILE',comment.owner.icheck_id)]">
                                        <ick-avatar [owner]="comment.owner" width="40" height="40" class="ic-avatar"
                                            alt="{{comment.owner.social_name}}"
                                            title="{{comment.owner.social_name}}" size="thumb_medium"></ick-avatar>
                                        </a>
                                    </div>

                                    <div class="media-body">
                                        <a href="javascript:" [routerLink]="[OpenLink('PROFILE',comment.owner.icheck_id)]">
                                            <strong>{{comment.owner.social_name}}</strong>
                                        </a>
                                        <time>{{comment.createdAt | amTimeAgo}}</time>
                                    </div>
                                </div>

                                <div class="ic-best-entry" style="min-height: 100px">
                                    <div class="ic-best-tools">
                                        <a href="javascript:" (click)="like(comment)" class="{{comment.is_like ? 'ic-icon-liked' : 'ic-icon-like'}}">{{comment.like_count}}</a>
                                        <a href="javascript:" (click)="onReply(comment)" class="ic-icon-comment">{{comment.child_count}}</a>
                                    </div>

                                    <div class="ic-best-p">
                                        <p>{{comment.content}}</p>
                                    </div>
                                </div>
                                <sd-comments *ngIf="subParam" [query]="subParam" [total]="comment.child_count" [is_reply]="true"></sd-comments>
    `
})

export class CommentItemComponent implements OnInit {
    @Input()
        comment : Comment;

    @Input()
        total :number;

    @Input()
        is_reply : boolean = false;

    public subParam :  {};
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
    }


    onReply(comment:Comment) {
            let param = new CommentParam();
            param.limit = 10;
            param.parent = comment.id;
            param.object_id = this.comment.object_id;
            param.service = this.comment.service;
            this.subParam = param;
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

    ngOnDestroy() {
        this.storeUser.unsubscribe();
    }
}