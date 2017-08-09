/**
 * Created by idea on 27/04/2017.
 */
import { BrowserModule }                from '@angular/platform-browser';
import { ReactiveFormsModule }          from '@angular/forms';
import { NgModule }                     from '@angular/core';
import { DynamicFormComponent }         from './dynamic-form.component';
import { DynamicFormControlComponent } from './dynamic-form-control.component';
@NgModule({
    imports: [ BrowserModule, ReactiveFormsModule ],
    declarations: [ DynamicFormComponent, DynamicFormControlComponent ],
    exports     : [DynamicFormComponent],
})
export class DynamicFormModule {
    constructor() {
    }
}