/**
 * Created by idea on 21/03/2017.
 */
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
@Component({
    selector: 'footer-component',
    templateUrl: './footer.component.html'
})

export class FooterComponent implements OnInit {
    data:any = [
        {
            id: 1,
            parent_id : 0,
            title : 'Danh mục',
            link_to: '#',
            html: '',
            links:[
                {
                    id: 2,
                    parent_id : 1,
                    title : 'Ô tô, xe máy & phụ kiện',
                    link_to: '#',
                    html: '',
                },
                {
                    id: 3,
                    parent_id : 1,
                    title : 'Lò vi sóng',
                    link_to: '#',
                    html: '',
                },
                {
                    id: 4,
                    parent_id : 1,
                    title : 'Điện thoại & Máy tính bảng',
                    link_to: '',
                    html: '',
                },
                {
                    id: 5,
                    parent_id : 1,
                    title : 'Máy vi tính & Laptop',
                    link_to: '#',
                    html: '',
                },
                {
                    id: 6,
                    parent_id : 0,
                    title : 'Chăm sóc sức khỏe & Làm đẹp',
                    link_to: '#',
                    html: '',
                }
            ]
        },
        {
            id: 1,
            parent_id : 0,
            title : 'Giới thiệu',
            link_to: '#',
            html: '',
            links:[
                {
                    id: 2,
                    parent_id : 1,
                    title : 'Giới thiệu',
                    link_to: '#',
                    html: '',
                },
                {
                    id: 3,
                    parent_id : 1,
                    title : 'Tuyển Dụng',
                    link_to: '#',
                    html: '',
                },
                {
                    id: 4,
                    parent_id : 1,
                    title : 'Chính sách bảo mật',
                    link_to: '',
                    html: '',
                },
                {
                    id: 5,
                    parent_id : 1,
                    title : 'Điều khoản sử dụng',
                    link_to: '#',
                    html: '',
                },
                {
                    id: 6,
                    parent_id : 0,
                    title : 'Ưu đãi doanh nghiệp',
                    link_to: '#',
                    html: '',
                }
            ]
        },
        {
            id: 1,
            parent_id : 0,
            title : 'Đối tác của iCheck',
            link_to: '#',
            html: '',
            links:[
                {
                    id: 2,
                    parent_id : 1,
                    title : 'Đối tác 1',
                    link_to: '#',
                    html: '',
                },
                {
                    id: 3,
                    parent_id : 1,
                    title : 'Đối tác 2',
                    link_to: '#',
                    html: '',
                },
                {
                    id: 4,
                    parent_id : 1,
                    title : 'Đối tác 3',
                    link_to: '',
                    html: '',
                },
                {
                    id: 5,
                    parent_id : 1,
                    title : 'Đối tác 4',
                    link_to: '#',
                    html: '',
                },
                {
                    id: 6,
                    parent_id : 0,
                    title : 'Đối tác 5',
                    link_to: '#',
                    html: '',
                }
            ]
        },
        {
            id: 1,
            parent_id : 0,
            title : 'Download App',
            link_to: '#',
            html: `
                    <div class="ic-footer-download">
                        <a href="#" target="_blank" rel="nofollow" title="Download on the Appstore">Download on the Appstore</a>
                        <a class="ic-google-play" href="#" target="_blank" rel="nofollow" title="Download on the Google Play">Download on the Google Play</a>
                        <a class="ic-windows-phone" href="#" target="_blank" rel="nofollow" title="Download on the Windows Phone Store">Download on the Windows Phone Store</a>
                        <a class="ic-blackBerry-world" href="#" target="_blank" rel="nofollow" title="Download on the BlackBerry World">Download on the BlackBerry World</a>
                    </div>

                    <h4>Liên hệ</h4>

                    <div class="ic-footer-contact">
                        <address>Số 50, ngõ 125, Nguyễn Ngọc Vũ, Phường Trung Hoà, Q. Cầu Giấy, TP. Hà Nội</address>

                        <div class="ic-social">
                            <a class="ic-fb" href="#" target="_blank" rel="nofollow">Facebook</a>
                            <a class="ic-mail" href="#" target="_blank" rel="nofollow">Gửi Email</a>
                    </div>
                    `,
        },
    ];

    constructor() {
    }

    ngOnInit() {
    }
}