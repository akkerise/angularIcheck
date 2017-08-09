import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute,Params} from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as fromRoot from '../common/reducers';
import * as actionAuth from '../common/actions/authentication';
import * as fromBreadcrumb from '../common/reducers/breadcrumb';
import {User} from '../common/models/User';
import { ProductService } from '../common/services/Product.service';
import { TopService } from '../common/services/Top.service';
import {Product} from '../common/models/Product';
import * as fromUtility from '../common/services/Utility.service';
/**
 * This class represents the lazy loaded HomeComponent.
 */
declare var $:any;

@Component({
    selector: 'sd-top-product',
    templateUrl: 'top-product.component.html'
})

export class TopProductComponent implements OnInit,OnDestroy {

    products:Product[] = [];
    groupId:number;
    cateId:number;
    type : string ;
    currentGroup:any = null;
    page = 0;
    limit = 30;
    private more:boolean = true;

    constructor(private router:Router,
                private store:Store<fromRoot.State>,
                private activatedRoute:ActivatedRoute,
                private productService:ProductService,
                private topService:TopService) {
        this.store.dispatch({
            type: fromBreadcrumb.ADDITEM,
            payload: [{name: 'TOP sản phẩm', link: this.OpenLink('TOP_PRODUCT')}]
        });
    }

    ngOnInit() {

        this.activatedRoute.queryParams.subscribe((params:Params) => {
            this.groupId = null;
            this.currentGroup = null;
            this.page=0;
            this.products = [];
            this.more = true;
            let groupId = params['q'];
            let type = params['type'];
            let cateId = params['categoryId'];
            this.type = type;
            if (groupId) {
                this.groupId = groupId;
                this.productService.getProductGroup({limit: 8, skip: 0}).toPromise().then(data=> {
                    data.forEach(grp=> {
                        if (grp.id == groupId) {
                            this.setCurrent(grp);
                        }
                    })
                });
            }
            this.loadProducts(groupId, this.limit, 0, true,type,cateId);
        });
    }

    onScroll(groupId:number) {
        if (this.more) {
            this.page = this.page + 1;
            var skip = this.page * this.limit;
            this.loadProducts(groupId, this.limit, skip, true,this.type,this.cateId);
        }
    }

    setCurrent(group:any) {
        this.currentGroup = group;
    }



    loadProducts(id:number, limit:number = 20, skip:number = 0, addNew:boolean = false, type:string = 'product_review_good',cateId?:number) {
        if (id) {
            this.productService.getProductByGroup(id, {limit: limit, skip: skip,fields: 'comments.limit(2)'}).toPromise().then(
                    data=> {
                    if (data.length > 0) {
                        if (addNew) {
                            this.products = data;
                        } else {
                            data.forEach(product => {
                                this.products.push(product);
                            });
                        }
                    } else {
                        this.more = false;
                    }
                }
            );
        } else {
            this.topService.top({limit: limit, skip: skip, type: type, category_id: cateId,fields: 'comments.limit(2)'}).toPromise().then(
                    data=> {
                        data.forEach(product => {
                            this.products.push(product);
                        });
                }
            );
        }
    }

    chck(i:number){
        if(i%4==0){
            return true;
        }
        return false;
    }

    OpenLink(route?:string, id?:string) {
        var Link = fromUtility.UtilityService.route(route, id);
        return Link;
    }

    ngOnDestroy() {
        this.store.dispatch({
            type: fromBreadcrumb.RESET
        });
    }

}
