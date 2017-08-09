/**
 * Created by idea on 27/03/2017.
 */
import { Component, Input  } from '@angular/core';
import { Owner } from '../models/Owner';
import { Http, Response, Headers, RequestOptions,URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Component({
    selector: 'ick-avatar',
    template: `<img [src]="src ? (outside ? src :src+size) : temp_img" [alt]="alt" [title]="title" [class]="class" [width]="width" [height]="height" />`
})

export class AvatarComponent {
    public temp_img = '/assets/images/no-image.png';
    public outside = false;
    private _src : string;
    private _size : string;

    @Input()
    set owner(value:Owner) {
        if (value.avatar) {
            if (value.avatar.match(/^http/) || value.avatar.endsWith('.jpg')) {
                this._src = value.avatar;
                this.outside = true;
            } else {
                this._src = "http://ucontent.icheck.vn/" + value.avatar ;
            }
        }else{
            if(value.social_type === 'facebook'){
                this._src = 'http://graph.facebook.com/'+value.social_id+'/picture';
            }
            this.outside = true;
        }
    }
    get src(){
        return this._src;
    }

    //size : small,medium,thumb_medium,thumb_medium,thumb_small,original
    @Input()
    set size(value:string) {
        if (value) {
            this._size = '_' + value + '.jpg';
        }
    }

    get size() {
        return this._size;
    }

    @Input()
        alt:string;

    @Input()
        title:string;

    @Input()
        class:string;

    @Input()
        width:number;

    @Input()
        height:number;

    constructor(private http:Http) {
    }
}