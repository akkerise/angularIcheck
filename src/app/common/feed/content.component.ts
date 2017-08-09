import { Component, Input, OnInit } from '@angular/core';
import { User } from '../models/User';
import { Feed } from '../models/Feed';
import { Store } from '@ngrx/store';
import * as fromRoot from '../reducers';
import * as fromUtility from '../services/Utility.service';
import * as feed from '../actions/feed';
import { PostService } from '../services/Post.service';
import { FeedService } from '../services/Feed.service';

@Component({
    selector: 'feed-content',
    templateUrl: 'content.component.html'
})
export class ContentComponent implements OnInit{
    @Input()
    set feed(value:Feed) {
        this._feed = value;
    }

    get feed() {
        return this._feed;
    }

    @Input()
        currentUser : User = null;

    private _feed;
    private storeUser;

    constructor(
        private feedService:FeedService,
        private postService:PostService,
        private store:Store<fromRoot.State>
    ) {
    }
    ngOnInit(){

    }

    actionFeed(s:string) {
        console.log(s);
        switch (s) {
            case 'hid':
                this.feedService.hidden(this.feed.id).toPromise().then(data=> {
                    this.store.dispatch(new feed.RemoveAction(this.feed.body));
                });
                break;
            case 'del':
                this.store.dispatch(new feed.RemoveAction(this.feed.body));
                break;
            case 'sub':
                this.postService.subscribePost(this.feed.body.id, {is_subscribe: !this.feed.footer.is_subscribe}).toPromise().then(data=> {
                    console.log(data);
                });
                break;
            default :
                break;
        }
    }

    actionName(s:string) {
        let text:string = s;
        switch (s) {
            case 'hid':
                text = 'Ẩn bài viết này';
                break;
            case 'del':
                text = 'Xóa bài viết này';
                break;
            case 'sub':
                text = 'Đăng ký theo dõi';
                break;
            case 'rep':
                text = 'Báo cáo sản phẩm/ bài viết này';
                break;
            default :
                text = s;
                break;
        }
        return text;
    }

    OpenLink(route?:string, id?:string) {
        var Link = fromUtility.UtilityService.route(route, id);
        return Link
    }

}