import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute,Params} from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromBreadcrumb from '../common/reducers/breadcrumb';
import { NewsService } from '../common/services/News.service';
import { PostService } from '../common/services/Post.service';
import { News } from '../common/models/News';
import { Feed } from '../common/models/Feed';
import { CommentParam } from '../common/models/CommentParam';
import * as fromUtility from '../common/services/Utility.service';
/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
    selector: 'sd-news-list',
    templateUrl: 'news-list.component.html',
})

export class NewsListComponent implements OnInit,OnDestroy {

    news:Feed[] = [];
    public commentQuery:CommentParam;
    categoriesNew:any[] = [];
    currentCate:any;
    more:boolean = true;
    limit:number = 10;
    page:number = 0;
    newsArray:any[] = [];
    routerChange:any;

    constructor(private store:Store<fromBreadcrumb.State>, private activatedRoute:ActivatedRoute, private newService:NewsService,private postService : PostService) {
    }


    setCurrent(category:any) {
        this.currentCate = category;
        this.newsArray = [];
        this.loadNews(category.id);
    }

    loadNews(id:number, skip:number = 0, addNew:boolean = true) {

        this.newService.getNewsByCategory(id, {limit: this.limit, skip: skip}).toPromise().then(
                data=> {
                if (data.length > 0) {
                    if (addNew) {
                        this.news = data;
                    } else {
                        this.news.push(data);
                    }
                } else {
                    this.more = false;
                }
            }
        );
    }

    onScroll(categoryId) {
        if (this.more) {
            this.page = this.page + 1;
            var skip = this.page * this.limit;
            if (categoryId) {
                this.loadNews(categoryId, skip, false);
            }
        }
    }

    OpenLink(route?:string, id?:string) {
        var Link = fromUtility.UtilityService.route(route, id);
        return Link;
    }

    like(feed:Feed) {
        var act = true;
        if (feed.footer.is_like) {
            act = false;
        }
            this.postService.likePost(feed.body.id, {is_like: act}).toPromise().then(data=> {
                //feed.footer.is_like = !this.is_like;
                //if(this.is_like){
                //    this.like_count++;
                //}else{
                //    this.like_count--;
                //}
            });
    }

    comment(feed:Feed) {
        if (!this.commentQuery) {
            this.commentQuery = new CommentParam();
            this.commentQuery.limit = 10;
            this.commentQuery.object_id = feed.body.id;
            this.commentQuery.service = feed.body.type;
        }
    }

    ngOnInit() {
        this.store.dispatch({
            type: fromBreadcrumb.ADDITEM,
            payload: [
                {name: 'Tin tức', link: this.OpenLink('NEWS')},
            ]
        });
        this.routerChange = this.activatedRoute.queryParams.subscribe((params:Params) => {
            this.page = 0;
            this.more = true;
            this.news = [];
            var cateId = params['type'];
            var cateCurrent:any = null;
            this.newService.getNewsCategories({limit: 6, skip: 0}).toPromise().then(data=> {
                this.categoriesNew = data;
                this.categoriesNew.forEach(cate=> {
                    if (cateId && cate.id == cateId) {
                        cateCurrent = cate;
                    }
                });
                this.setCurrent(cateCurrent ? cateCurrent : data[0]);
            });
        });
    }


    ngOnDestroy() {
        this.store.dispatch({type: fromBreadcrumb.RESET});
        this.routerChange.unsubscribe();
    }

}
