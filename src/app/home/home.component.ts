import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromBreadcrumb from '../common/reducers/breadcrumb';
import { NewsService } from '../common/services/News.service';
import { ProductService } from '../common/services/Product.service';
import { News } from '../common/models/News';
/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
    selector: 'sd-home',
    templateUrl: 'home.component.html',
})

export class HomeComponent implements OnInit {

    datas:any = [
        {
            id:5,
            template_data: {
                alias : 'search-bar'
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
                alias : 'tip-box'
            },
            position: 'LEFT',
            title:'TOP sản phẩm bị cộng đồng cảnh báo',
            query: {
                //type :  user_point   product_review_good   product_review_bad   scan  product_view
                type: 'product_review_bad',
                limit:4,
                skip:0
            }
        },
        {
            id:3,
            template_data: {
                alias : 'install-box'
            },
            title:'Tin mới',
            query: {limit:6,skip:0},

        },
        {
            id:4,
            template_data: {
                alias : 'news-box'
            },
            title:'Tin tức',
        },
        {
            id:7,
            template_data: {
                alias : 'top-products'
            },
            position: 'LEFT',
            title:'Top sản phẩm',
            query: {
                limit:4,
                skip:0,
                fields: 'comments.limit(2)'
            }
        },
        {
            id:8,
            template_data: {
                alias : 'home-follow'
            },
            title: 'Các cộng đồng có thể bạn muốn tham gia',
            query: {
                limit:4,
                skip:0,
                fields: 'members.limit(5)',

            }
        },
        {
            id:2,
            template_data: {
                alias : 'home-feedback'
            },
            title: 'Những người dùng có đóng góp đáng tin cậy',
            query: {
                limit: 4,
                skip: 0,
                fields: 'activities.limit(2)',
                type: 'user_review'
            }
        },
        {
            id:1,
            template_data: {
                alias : 'home-cate'
            },
            position: '',
            title: 'Tra cứu thêm theo danh mục'
        },


    ];

    constructor(private store: Store<fromBreadcrumb.State>
    ) {
        this.store.dispatch({type: fromBreadcrumb.RESET});
    }

    ngOnInit() {
    }

}
