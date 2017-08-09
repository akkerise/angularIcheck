import { Component, OnInit, OnDestroy } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ProductService } from '../common/services/Product.service';
import { CommentService } from '../common/services/Comment.service';
import { ModalInfoService } from '../common/services/ModalInfo.service';
import * as fromBreadcrumb from '../common/reducers/breadcrumb';
import { CommentParam } from '../common/models/CommentParam';
import { Product } from '../common/models/Product';
import { Comment } from '../common/models/Comment';
import * as fromUtility from '../common/services/Utility.service';

@Component({
    selector: 'sd-product',
    templateUrl: 'product.component.html'
})
export class ProductComponent implements OnInit,OnDestroy {


    public product:Product = null;
    public size = 'original';
    public commentQuery:CommentParam;
    private routerChange : any;
    public comments : Comment[] = [];

    constructor(private store: Store<fromBreadcrumb.State>,
        private productService: ProductService,
        private commentService: CommentService,
                private _modalInfoService:ModalInfoService,
        private activatedRoute: ActivatedRoute
        ){

    }

    ngOnInit() {
        this.routerChange = this.activatedRoute.params.subscribe((params: Params) => {
            this.productService.get( params['id'] ).subscribe(product =>  {
                this.store.dispatch({type: fromBreadcrumb.ADDITEM,payload:[{name:'Ô tô, xe máy & Phụ kiện',link:''}]});
                this.product = product;
                console.log(this.product);
                this.commentQuery = new CommentParam();
                this.commentQuery.limit = 10;
                this.commentQuery.object_id = product.id;
                this.commentQuery.service = 'product';
                this.commentService.getComments(this.commentQuery).toPromise().then(comments => {
                    comments.forEach(comment => {
                        this.comments.push(comment);
                    });
                });
            });
        });

    }

    ngOnDestroy():void {
        this.routerChange.unsubscribe();
    }

    OpenLink(route?:string, id?:string) {
        var Link = fromUtility.UtilityService.route(route, id);
        return Link;
    }

    vote(t:number){
        this.commentService.postComment({object_id:this.product.id,vote_type:t}).toPromise().then((comment : Comment)=>{
            console.log(comment);
            this._modalInfoService.show('Cảm ơn bạn đã góp ý!', {cssClass: 'alert-success', timeout: 3000});
        });
    }



}