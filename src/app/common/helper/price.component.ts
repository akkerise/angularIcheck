/**
 * Created by idea on 27/03/2017.
 */
import { Component, Input  } from '@angular/core';

@Component({
    selector: 'ick-price',
    template: `{{price > 0 ? (price | number : '1.0-2') + currency : 'Đang cập nhật giá'}}`
})
export class PriceComponent{
    @Input()
        price : number;
    //size : small,medium,thumb_medium,thumb_medium,thumb_small,original
    @Input()
        currency: string;
    constructor(){
    }
}