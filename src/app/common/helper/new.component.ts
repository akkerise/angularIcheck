/**
 * Created by idea on 27/03/2017.
 */
import { Component, Input  } from '@angular/core';
import { News } from '../models/News';
import { Http, Response, Headers, RequestOptions,URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import * as fromUtility from '../services/Utility.service';

@Component({
    selector: 'ick-new',
    template: `<div class="media">
                    <div class="media-left">
                        <a href="javascript:" [routerLink]="[OpenLink('NEW_DETAIL',new.body.id)]">

                            <ick-img class="media-object" [src]="new.body.news.thumb" [title]="new.body.news.title" [alt]="new.body.news.title" size="medium" width="119" height="119"></ick-img>
                        </a>
                    </div>

                    <div class="media-body">
                        <h2><a href="javascript:" [routerLink]="[OpenLink('NEW_DETAIL',new.body.id)]">{{new.body.news.title}} </a></h2>
                        <div class="ic-home-cate-tag">
                            <a href="javascript:" [routerLink]="[OpenLink('NEW_DETAIL',new.body.id)]" class="ic-home-cate-success">Tin iCheck</a> <time>{{new.body.news.createdAt | amCalendar}}</time>
                        </div>
                        <p>{{new.body.news.description}}</p>
                    </div>
                </div>`
})

export class NewComponent {

    @Input()
        new : News;

    @Input()
        class : string;

    constructor(private http:Http) {
    }

    OpenLink(route?:string,id?:string){
        var Link = fromUtility.UtilityService.route(route,id);
        return Link;
    }
}