/**
 * Created by idea on 17/04/2017.
 */
import { Component, Injector } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromRoot from 'app/common/reducers';
import { Category } from 'app/common/models/Category';
import * as fromUtility from 'app/common/services/Utility.service';

@Component({
    selector: 'home-cate',
    template: `
    <div class="ic-home-cate">
        <div class="container">
            <div class="ic-home-title">
                <h3>{{data.title}}</h3>
            </div>
            <div class="row">
                <div class="col-md-3" *ngFor="let cate of categories">
                    <div class="ic-home-cate-item">
                        <h3><a href="javascript:" [routerLink]="[OpenLink('BROWSER',cate.id)]">{{cate.name}}</a> </h3>
                        <div class="ic-thumb">
                            <a href="javascript:" [routerLink]="[OpenLink('BROWSER',cate.id)]">
                                <img [src]="cate.image" [alt]="cate.name" [title]="cate.name" [class]="'img-responsive'" />
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>`
})

export class HomeCateComponent {
    data : any = null;
    categories:Category[];

    constructor(private injector: Injector,public router:Router,private store: Store<fromRoot.State>) {
        this.data = this.injector.get('data');
        this.store.select(fromRoot.getAllCategories).subscribe(data=>{
            this.categories = data.slice(0, 8);

    });
    }

    OpenLink(route?:string,id?:string){
        var Link = fromUtility.UtilityService.route(route,id);
        return Link;
    }
}
