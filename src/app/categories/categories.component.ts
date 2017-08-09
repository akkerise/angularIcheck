import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router, ActivatedRoute} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import * as fromRoot  from '../common/reducers';
import * as category from '../common/actions/category';
import * as fromUtility from '../common/services/Utility.service';
import * as fromBreadcrumb from '../common/reducers/breadcrumb';
import { Category } from '../common/models/Category';
/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
    selector: 'sd-categories',
    templateUrl: 'categories.component.html'
})

export class CategoriesComponent implements OnInit,OnDestroy {
    private _redirectRoute :string = fromUtility.ROUTE_BROWSER;
    datas:Observable<Category[]>;
    blocks:any = [
        {
            id:5,
            template_data: {
                alias : 'block-products-box'
            },
            title:'TOP SẢN PHẨM CỘNG ĐỒNG KHUYÊN DÙNG',
            query: {
                //type :  user_point   product_review_good   product_review_bad   scan  product_view
                type: 'product_review_good',
                limit:4,
                skip:0
            },
        },
        {
            id:6,
            template_data: {
                alias : 'block-products-box'
            },
            title:'TOP sản phẩm bị cộng đồng cảnh báo',
            query: {
                //type :  user_point   product_review_good   product_review_bad   scan  product_view
                type: 'product_review_bad',
                limit:4,
                skip:0
            },
            class: 'ic-red'
        },
    ];
    constructor(private store: Store<fromRoot.State>,
                public router:Router
    ) {
        this.store.dispatch({
            type: fromBreadcrumb.ADDITEM,
            payload: [
                {name: 'Danh mục', link: this.OpenLink('CATEGORIES')}
            ]
        });
    }
    OpenLink(route?:string,id?:string){
        if(route){
            var Link = fromUtility.UtilityService.route(route,id);
        }else{
            var Link = fromUtility.UtilityService.route(this._redirectRoute,id);
        }
        return Link;
    }
    ngOnInit() {
        this.datas = this.store.select(fromRoot.getAllCategories);
    }
    ngOnDestroy(){
        this.store.dispatch({
            type: fromBreadcrumb.RESET
        });
    }

}
