/**
 * Created by idea on 17/04/2017.
 */
import { Component, Injector } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromRoot from 'app/common/reducers';
import { Category } from 'app/common/models/Category';

declare const $ :any;

@Component({
    selector: 'search-bar',
    template: `
        <header id="ic-header">
        <div class="ic-home-search-layout">
            <div class="ic-home-search">
                <div class="container">
                    <div class="ic-home-search-slogan">
                        <strong>Tìm Hiểu Kỹ Hơn - Lựa Chọn Tốt Hơn</strong>
                        <p>Hơn 10 triệu sản phẩm được đánh giá bởi 6 triệu người dùng iCheck</p>
                    </div>

                    <div class="ic-home-search-form">
                        <form method="post" action="" name="my_form">
                            <div class="ic-home-drop-select">
                                <span>{{currentCategory ? currentCategory.name : 'Tất cả'}}</span>
                                <ul>
                                    <li *ngFor="let cate of categories" ><a href="javascript:" (click)="setCurrent(cate)">{{cate.name}}</a></li>
                                </ul>
                            </div>
                            <input type="text" value="" placeholder="" class="input-1" name="keyword" />
                            <input type="submit" value="Tìm kiếm" placeholder="" class="input-2" name="submit" />
                        </form>
                    </div>

                    <div class="ic-clear"></div>

                    <div class="ic-home-search-bottom">
					<div class="col col-1">
						<p>Đã có <strong class="counter">39,750</strong> người <br /> tham gia cộng đồng iCheck</p>
					</div>

					<div class="col col-2">
						<p>Đã có <strong class="counter">456,354</strong> hàng giả <br /> bị phát hiện</p>
					</div>

					<div class="col col-3">
						<p>iCheck có <strong class="counter">3,543,513</strong> sản phẩm <br /><strong class="counter">8,255,454</strong> đánh giá của người tiêu dùng</p>
					</div>

					<div class="ic-clear"></div>
				</div>

                </div>
            </div>
        </div>
    </header>
    `
})

export class SearchBarComponent {
    data : any = null;
    categories : Category[] = [];
    currentCategory : Category;

    constructor(private injector: Injector,public router:Router,private store: Store<fromRoot.State>) {
        this.data = this.injector.get('data');
        this.store.select(fromRoot.getAllCategories).subscribe(data=>{
            this.categories = data.slice(0, 8);

        });
    }

    setCurrent(cate:Category){
        this.currentCategory = cate;
    }
}