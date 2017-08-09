import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute,Params} from '@angular/router';
import { DomSanitizer} from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import * as fromBreadcrumb from '../common/reducers/breadcrumb';
import { PostService } from '../common/services/Post.service';
import { News } from '../common/models/News';
import { Feed } from '../common/models/Feed';
import * as fromUtility from '../common/services/Utility.service';
import { CommentParam } from '../common/models/CommentParam';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
    selector: 'sd-news-detail',
    templateUrl: 'news-detail.component.html',
})

export class NewsDetailComponent implements OnInit,OnDestroy {


    public commentQuery:CommentParam;
    public feed : Feed;
    public news : News;
    public is_like : boolean;
    public like_count : number;
    private routerChange : any;

    constructor(private store:Store<fromBreadcrumb.State>,
                private activatedRoute:ActivatedRoute,
                private postService:PostService,
                private sanitizer: DomSanitizer,
                private router : Router) {
    }


    OpenLink(route?:string, id?:string) {
        var Link = fromUtility.UtilityService.route(route, id);
        return Link;
    }

    ngOnInit() {

        this.routerChange = this.activatedRoute.params.subscribe((params:Params) => {
            let id = params['id'];
            this.postService.getPostById(id).toPromise().then(data=>{
                this.feed = data;
                this.news = data.body.news;
                this.is_like = data.footer.is_like;
                this.like_count = data.footer.like_count;
                this.commentQuery = new CommentParam();
                this.commentQuery.limit = 10;
                this.commentQuery.object_id = data.id;
                this.commentQuery.service = data.body.type;
                this.store.dispatch({
                    type: fromBreadcrumb.ADDITEM,
                    payload: [
                        {name: 'Tin tức', link: this.OpenLink('NEWS')},
                        {name: data.body.news.title,link: this.OpenLink('NEW_DETAIL',data.body.id)}
                    ]
                });
            }).catch(err =>{
                this.router.navigate([this.OpenLink('404')]);
            })
        });
    }


    like(is_like:boolean) {
        var act = true;
        if (is_like) {
            act = false;
        }
        this.postService.likePost(this.feed.body.id, {is_like: act}).toPromise().then(data=> {
            this.is_like = !this.is_like;
            if(this.is_like){
                this.like_count++;
            }else{
                this.like_count--;
            }
        });
    }

    shareFacebook(){
        var link = "https://www.facebook.com/plugins/share_button.php?href="+window.location.href+"&layout=button_count&mobile_iframe=true&width=112&height=20&appId";
        return this.sanitizer.bypassSecurityTrustResourceUrl(link);
    }


    ngOnDestroy() {
        this.store.dispatch({type: fromBreadcrumb.RESET});
        this.routerChange.unsubscribe();
    }

}
