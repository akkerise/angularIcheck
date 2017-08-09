/**
 * Created by idea on 27/04/2017.
 */
import { Component, Input, Output, OnInit,EventEmitter }  from '@angular/core';
import { FormGroup }                 from '@angular/forms';
import { FormBase }              from './form-base';
import { ControlService }    from './control.service';
@Component({
    selector: 'dynamic-form',
    templateUrl: 'dynamic-form.component.html',
    providers: [ ControlService ]
})
export class DynamicFormComponent implements OnInit {
    @Input() questions: FormBase<any>[] = [];
    @Output() onSuccess = new EventEmitter<string>();
    @Output() onFail = new EventEmitter<string>();
    form: FormGroup;
    payLoad = '';
    constructor(private qcs: ControlService) {  }
    ngOnInit() {
        this.form = this.qcs.toFormGroup(this.questions);
    }
    onSubmit() {
        this.payLoad = JSON.stringify(this.form.value);
        this.onSuccess.emit(JSON.stringify(this.form.value));
    }
    close(){
        this.onFail.emit('close');
    }
}