/**
 * Created by idea on 19/04/2017.
 */
import { Component, Input  } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { Product } from '../models/Product';
import * as fromUtility from '../services/Utility.service';

@Component({
    selector: 'ick-product',
    template: `
    <div class="ic-home-product">
            <div class="ic-home-product-box">
              <div class="ic-thumb">
                <a href="javascript:" [routerLink]="[OpenLink('DETAIL',product.id)]">
                  <ick-img [src]="product.image_default" size="medium" [alt]="product.product_name" [title]="product.product_name" class="img-responsive"></ick-img>
                </a>
              </div>

              <h2>
                <a href="javascript:" [routerLink]="[OpenLink('DETAIL',product.id)]">{{product.product_name}}</a>
              </h2>

              <div class="ic-home-product-rating">
                <div class="row">
                  <div class="col-xs-6">
                    <p class="style-1">{{product.vote_bad_count + product.vote_good_count + product.vote_normal_count}} đánh giá</p>
                    <p class="style-2">
                      <ick-price [price]="product.price_default" [currency]="product.currency_default"></ick-price>
                    </p>
                  </div>
                  <div class="col-xs-6">
                    <div class="ic-home-recomend" *ngIf="product.vote_bad_count < product.vote_good_count">Nên dùng</div>
                    <div class="ic-home-recomend" *ngIf="product.vote_bad_count > product.vote_good_count">Tránh xa</div>
                    <div class="ic-home-recomend" *ngIf="product.vote_bad_count == product.vote_good_count">Cũng được</div>
                  </div>
                </div>
              </div>

              <div class="ic-home-product-comments" *ngIf="product.comments">
                <div class="ic-home-product-comment" *ngFor="let comment of product.comments">
                  <div class="media">
                    <div class="media-left">
                      <a href="javascript:" [routerLink]="[OpenLink('PROFILE',comment.owner.icheck_id)]">
                        <ick-avatar [owner]="comment.owner" width="31" height="31" class="media-object img-circle"
                                alt="{{comment.owner.social_name}}"
                                title="{{comment.owner.social_name}}" size="thumb_medium"></ick-avatar>
                      </a>
                    </div>

                    <div class="media-body">
                      <a href="javascript:" [routerLink]="[OpenLink('PROFILE',comment.owner.icheck_id)]">{{comment.owner.social_name}}</a>: {{comment.content}}
                    </div>
                  </div>
                </div>

              </div>

              <div class="ic-home-product-footer">
                <div class="ic-home-number-cs">
                  <span>1</span>
                  <span>2</span>
                  <span>3</span>
                  <span>4</span>
                </div>
                <ul>
                  <li class="ic-home-success">Nên dùng <span>{{ (product.vote_good_count > 0 ? product.vote_good_count / (product.vote_bad_count + product.vote_good_count + product.vote_normal_count) *100 : 0 ) | number : '1.2-2'}}%</span></li>
                  <li class="ic-home-warning">Cũng được <span>{{ (product.vote_normal_count > 0 ? product.vote_normal_count / (product.vote_bad_count + product.vote_good_count + product.vote_normal_count) *100 : 0) | number : '1.2-2' }}%</span></li>
                  <li class="ic-home-danger">Tránh xa <span>{{ (product.vote_bad_count > 0 ? product.vote_bad_count / (product.vote_bad_count + product.vote_good_count + product.vote_normal_count) *100 : 0) | number : '1.2-2' }}%</span></li>
                </ul>
              </div>
            </div>
          </div>`
})
export class ProductComponent{
    @Input()
        product : Product;

    constructor(){
    }

    OpenLink(route?:string,id?:string){
        var Link = fromUtility.UtilityService.route(route,id);
        return Link;
    }
}