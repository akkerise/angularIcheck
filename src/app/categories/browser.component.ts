import { Component, OnInit, OnDestroy }            from '@angular/core';
import { Store }                        from '@ngrx/store';
import { Router, ActivatedRoute}        from '@angular/router';
import * as fromRoot                    from '../common/reducers';
import * as fromBreadcrumb              from '../common/reducers/breadcrumb';
import * as fromCategory                from '../common/reducers/categories';
import { ProductService }               from '../common/services/Product.service';
import { CategoryService }              from '../common/services/Category.service';
import { Category }                     from '../common/models/Category';
import { Product }                      from '../common/models/Product';
import * as fromUtility                 from '../common/services/Utility.service';
/**
 * This class represents the lazy loaded HomeComponent.
 */
declare var $:any;
@Component({
    selector: 'sd-browser',
    templateUrl: 'browser.component.html'
})

export class BrowserComponent implements OnInit,OnDestroy {
    private _redirectRoute:string = fromUtility.ROUTE_DETAIL;
    products:Product[] = [];
    categoryId:string;
    category:Category;
    more:boolean = true;
    public page = 0;
    public limit = 30;
    private storeCategory;
    private paramBrowser;
    blocks:any;

    constructor(
                private proService:ProductService,
                private cateService:CategoryService,
                private activatedRoute:ActivatedRoute,
                private store:Store<fromRoot.State>,
                public router:Router) {


    }

    getCategoryById(id:number){
        this.cateService.find(id).toPromise().then(data=>{
            this.category = data;
            this.store.dispatch({
                type: fromBreadcrumb.ADDITEM,
                payload: [
                    {name: 'Danh mục', link: this.OpenLink('CATEGORIES')},
                    {name: this.category.name, link: this.OpenLink('BROWSER',id+'')}
                ]
            });
        });
    }

    getItemByCate(id:string, limit?:number, skip?:number) {
        let self = this;
        this.proService.browser2(id, {limit: limit, skip: skip}).toPromise().then(data=> {
            if (data.length > 0) {
                self.products = [...self.products, ...data];
            } else {
                self.more = false;
            }
        });
    }

    OpenLink(route?:string,id?:string) {
        var Link = fromUtility.UtilityService.route(route, id);
        return Link;
    }

    onScrollBrowser(categoryId) {
        //if ($(window).scrollTop() > $(document).height() - ($(window).height())+500) {
        //    console.log('vao');
            if (this.more) {
                this.page = this.page + 1;
                var skip = this.page * this.limit;
                if (categoryId) {
                    this.getItemByCate(categoryId, this.limit, skip);
                }
            }
        //}
        //return false;
    }


    ngOnInit() {
        this.paramBrowser = this.activatedRoute.params.subscribe((params:any) => {
            this.categoryId = params['id'];
            this.products = [];
            this.getItemByCate(params['id'], this.limit);
            this.getCategoryById(params['id']);
            this.blocks = [
                {
                    id: 5,
                    template_data: {
                        alias: 'block-products-box'
                    },
                    title: 'TOP SẢN PHẨM CỘNG ĐỒNG KHUYÊN DÙNG',
                    query: {
                        //type :  user_point   product_review_good   product_review_bad   scan  product_view
                        type: 'product_review_good',
                        limit: 4,
                        skip: 0,
                        category_id: this.categoryId
                    },
                },
                {
                    id: 6,
                    template_data: {
                        alias: 'block-products-box'
                    },
                    title: 'TOP sản phẩm bị cộng đồng cảnh báo',
                    query: {
                        //type :  user_point   product_review_good   product_review_bad   scan  product_view
                        type: 'product_review_bad',
                        limit: 4,
                        skip: 0,
                        category_id: this.categoryId
                    },
                    class: 'ic-red'
                },
            ];
        });

    }

    chck(i:number){
        if(i%4==0){
            return true;
        }
        return false;
    }

    ngOnDestroy(){
        this.paramBrowser.unsubscribe();
        this.store.dispatch({
            type: fromBreadcrumb.RESET
        });
    }

}
