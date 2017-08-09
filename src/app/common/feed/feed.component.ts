import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Feed } from '../models/Feed';
import { User } from '../models/User';
import { Owner } from '../models/Owner';
import { CommentParam } from '../models/CommentParam';
import { Store } from '@ngrx/store';
import * as fromUtility from '../services/Utility.service';
import { PostService } from '../services/Post.service';
import * as fromRoot from '../reducers';
import * as feed from '../actions/feed';
import { Observable } from 'rxjs/Rx';

declare const $:any;
@Component({
    selector: 'sd-feed',
    templateUrl: 'feed.component.html'
})

export class FeedComponent implements OnInit,OnDestroy {
    private storeUser;
    public commentQuery:CommentParam;
    public listUserLikes:User[] = [];
    public currentUser:User = null;
    public names:string[] = [];
    public is_like:boolean = false;
    public like_count:number = 0;
    public _feed:Feed;

    @Input()
    set feed(feed:Feed) {
        this._feed = feed;
        this.is_like = feed.footer.is_like;
        this.like_count = feed.footer.like_count;
    }

    get feed() {
        return this._feed;
    }


    constructor(private postService:PostService,
                private store:Store<fromRoot.State>) {

    }

    like(is_like:boolean) {
        var act = true;
        if (is_like) {
            act = false;
        }
        if (this.feed.body.type == 'post') {

            this.postService.likePost(this.feed.body.id, {is_like: act}).toPromise().then(data=> {
                this.is_like = !this.is_like;
                if (this.is_like) {
                    this.like_count++;
                } else {
                    this.like_count--;
                }
            });
        } else if (this.feed.body.type == 'product') {
            this.postService.likePost(this.feed.body.id, {is_like: act}).toPromise().then(data=> {
                this.is_like = !this.is_like;
                if (this.is_like) {
                    this.like_count++;
                } else {
                    this.like_count--;
                }
            });
        }
    }

    comment() {
        if (!this.commentQuery) {
            this.commentQuery = new CommentParam();
            this.commentQuery.limit = 10;
            this.commentQuery.object_id = this.feed.body.type == 'product' ? this.feed.body.product.id : this.feed.body.id;
            this.commentQuery.service = this.feed.body.type;
        }
    }

    listLikes(event) {
        if (this.names.length) {
            $("[rel=" + this.feed.body.id + "]").attr('data-original-title', this.names.join('<br>'))
        } else {
            if (this.feed.footer.like_count > 0) {
                let id = this.feed.body.id;
                if (this.feed.body.type == 'product') {
                    id = this.feed.body.product.id;
                }
                this.postService.getLikesById(this.feed.body.id, {
                    limit: 10,
                    skip: this.listUserLikes ? this.listUserLikes.length : 0
                }, this.feed.body.type).toPromise().then(data=> {
                    data.forEach((owner:User) => {
                        this.names.push(owner.social_name);
                    });
                    $("[rel=" + this.feed.body.id + "]").attr('data-original-title', this.names.join('<br>'));
                });
            }
        }
    }

    like_users(like_users:Owner[] = []) {
        let listNames:string[] = [];
        let real_count_text:string = '';
        if (like_users && like_users.length > 0) {
            like_users.forEach((owner:Owner)=> {
                if (owner.icheck_id == this.currentUser.icheck_id) {
                    listNames.unshift('Bạn');
                } else {
                    listNames.push(owner.social_name);
                }
            });
            var number_others = this.feed.footer.like_count - this.feed.footer.like_users.length;
            real_count_text = listNames.join(', ') + ' đã thích';
            if (number_others > 0) {
                real_count_text = listNames.join(', ') + ' và ' + number_others + ' người khác đã thích';
            }
        } else {
            real_count_text = this.feed.footer.like_count + ' người đã thích';
        }
        return real_count_text;
    }


    OpenLink(route?:string, id?:string) {
        var Link = fromUtility.UtilityService.route(route, id);
        return Link
    }


    ngOnInit() {
        this.storeUser = this.store.select(fromRoot.getUser).subscribe(data => {
            this.currentUser = data;
        });
        $("[data-toggle=tooltip]").tooltip();

    }

    ngOnDestroy() {
        this.storeUser.unsubscribe();
    }

}