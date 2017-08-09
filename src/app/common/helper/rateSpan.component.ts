/**
 * Created by idea on 27/03/2017.
 */
import { Component, Input  } from '@angular/core';
import * as fromUtility from '../services/Utility.service';
@Component({
    selector: 'ick-rate',
    template: `<div *ngIf="eval">
        <span class="{{eval}}"></span>
    </div>`
})
export class RateSpanComponent{
    private _class: string = null;
    @Input()
    set eval(value: string) {
         var num_str = parseInt(value, 10);
        this._class = fromUtility.UtilityService.rating(num_str)
    }
    get eval() { return this._class; }

}