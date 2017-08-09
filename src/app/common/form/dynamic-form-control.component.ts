/**
 * Created by idea on 27/04/2017.
 */
import { Component, Input } from '@angular/core';
import { FormGroup }        from '@angular/forms';
import { FormBase }     from './form-base';
@Component({
    selector: 'df-question',
    templateUrl: './dynamic-form-control.component.html'
})
export class DynamicFormControlComponent{
    @Input() question: FormBase<any>;
    @Input() form: FormGroup;
    get isValid() { return this.form.controls[this.question.key].valid; }

    constructor(){
    }

}