/**
 * Created by idea on 17/04/2017.
 */
import { Component, Injector } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';

@Component({
    selector: 'tip-box',
    template: `
    <div class="ic-tip">
        <div class="container">
            <ul>
                <li>
                    <a href="#" class="ic-icon-1">
                        <span>Các sản phẩm bị cảnh cáo nhiều nhất</span>
                    </a>
                </li>
                <li>
                    <a href="#" class="ic-icon-2">
                        <span>Các sản phẩm được bình luận nhiều nhất</span>
                    </a>
                </li>
                <li>
                    <a href="#" class="ic-icon-3">
                        <span>Cách kiếm iCheck Point</span>
                    </a>
                </li>
                <li>
                    <a href="#" class="ic-icon-4">
                        <span>Làm CTV iCheck</span>
                    </a>
                </li>
                <li>
                    <a href="#" class="ic-icon-5">
                        <span>Các mẹo phân biệt thật giả của sản phẩm</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
    `
})

export class TipBoxComponent {
    data : any = null;

    constructor(private injector: Injector,public router:Router) {
        this.data = this.injector.get('data');
    }
}