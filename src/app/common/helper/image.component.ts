/**
 * Created by idea on 27/03/2017.
 */
import { Component, Input, OnInit  } from '@angular/core';
import * as fromUtility from '../services/Utility.service';

@Component({
    selector: 'ick-img',
    template: `<img [src]="image" [alt]="alt" [title]="title" [class]="class" [attr.width]="width" [attr.height]="height"/>`
})
export class ImageComponent implements OnInit {
    public image:string = '';
    public outside = false;

    @Input()
        src:string;

    //size : small,medium,thumb_medium,thumb_medium,thumb_small,original
    @Input()
        size:string;

    @Input()
        alt:string;

    @Input()
        title:string;

    @Input()
        class:string;

    @Input()
        width:any;

    @Input()
        height:any;

    @Input()
        type:string;

    constructor() {

    }

    ngOnInit() {
        this.image = fromUtility.UtilityService.getImg(this.src,this.size,this.type);
    }
}