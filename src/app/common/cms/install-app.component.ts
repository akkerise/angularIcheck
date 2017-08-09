/**
 * Created by idea on 17/04/2017.
 */
import { Component, Injector } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import * as fromUtility from '../services/Utility.service';

@Component({
    selector: 'install-app',
    template: `
    <div class="ic-install-app">
        <div class="container">
            <div class="col col-1">
                <div class="ic-install-info">
                    <h4>Tham gia cùng chúng tôi</h4>
                    <div class="ic-quote">
                        <p>Việc tìm hiểu sản phẩm kỹ hơn có thể mang lại những sự lựa chọn tốt hơn trong quyết định mua sắm và tiêu dùng</p>
                    </div>
                    <p class="style-2">Hãy tham gia cùng hơn 6 triệu người dùng iCheck để tham khảo và chia sẻ trải nghiệm trải nghiệm sản phẩm của bạn. </p>
                    <a *ngIf="!checkLogin()" href="javascript:" [routerLink]="[OpenLink('LOGIN')]">Đăng Nhập &amp; Chia Sẻ Kinh Nghiệm</a>
                </div>
            </div>

            <div class="col col-2">
                <p>
                    Tải app iCheck để tận <br /> hưởng nhiều tính<br /> năng hữu ích
                </p>
                <p class="style-2">
                    Quét QRcode để tải
                </p>

                <div class="ic-home-qr-code">
                    <img src="./assets/images/home/qr-code.png" alt="QR Code" title="" />
                </div>

            </div>

            <div class="ic-clear"></div>
        </div>
    </div>`
})

export class InstallBoxComponent {
    data : any = null;

    constructor(private injector: Injector,public router:Router) {
        this.data = this.injector.get('data');
    }

    checkLogin(){
        if(localStorage.getItem('Access-Token')){
            return true;
        }
        return false;
    }

    OpenLink(route?:string, id?:string) {
        var Link = fromUtility.UtilityService.route(route, id);
        return Link;
    }
}