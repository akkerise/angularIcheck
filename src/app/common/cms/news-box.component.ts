/**
 * Created by idea on 17/04/2017.
 */
import { Component, Injector } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { NewsService } from '../services/News.service';
import { News } from '../models/News';
import * as fromUtility from '../services/Utility.service';

@Component({
    selector: 'news-box',
    template: `
    <div class="ic-home-news">
        <div class="container">
            <div class="ic-home-title">
                <h3>{{data.title}}</h3>
            </div>

            <div class="ic-home-news-cate">
            <ng-template ngFor let-cate="$implicit" [ngForOf]="categoriesNew" let-i="index">
                <a href="javascript:" (click)="setCurrent(cate)" class="{{i%4==0 || !stylesClass[i] ? stylesClass[0] : stylesClass[i]}}">{{currentCate.id == cate.id ? cate.name : cate.name}}</a> |
            </ng-template>
            </div>

            <div id="news-carousel" class="carousel slide" data-ride="carousel" *ngIf="newsArray">

                <div class="ic-home-news-items carousel-inner" role="listbox">
                    <ng-template ngFor let-list="$implicit" [ngForOf]="newsArray" let-i="index">
                    <div class="item {{i == 0 ? 'active' : ''}}">
                        <div class="row">
                            <div class="col-xs-4" *ngFor="let new of list">
                                <ick-new [new]="new"></ick-new>
                            </div>

                        </div>
                    </div>
                    </ng-template>
                </div>

                <ol class="carousel-indicators ic-home-carousel-click">
                    <li *ngFor="let news of newsArray" data-target="#news-carousel" [attr.data-slide-to]="$index" class="{{i==0 ? 'active' : ''}}"></li>
                </ol>
            </div>
        </div>
    </div>`
})

export class NewsBoxComponent {
    data:any = null;
    categoriesNew:any;
    currentCate:any;
    newsArray:any[] = [];
    stylesClass:string[] = ['ic-home-cate-success','ic-home-cate-info','ic-home-cate-danger','ic-home-cate-warning'];

    constructor(private injector:Injector, public router:Router, private newService:NewsService) {
        this.data = this.injector.get('data');
        this.newService.getNewsCategories({limit: 6, skip: 0}).toPromise().then(data=> {
            this.categoriesNew = data;
            this.setCurrent(data[0]);
        })
    }


    setCurrent(category:any) {
        this.currentCate = category;
        this.newsArray = [];
        this.loadNews(category.id);
    }

    loadNews(id:number, addNew:boolean = false) {
        this.newService.getNewsByCategory(id, this.data.query).toPromise().then(
                data=> {
                this.newsArray.push(fromUtility.UtilityService.convertData(data));
            }
        );
    }

    OpenLink(route?:string,id?:string){
        var Link = fromUtility.UtilityService.route(route,id);
        return Link;
    }
}