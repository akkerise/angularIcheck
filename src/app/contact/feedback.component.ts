import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ContactService } from '../common/services/Contact.service';
import * as fromBreadcrumb from '../common/reducers/breadcrumb';
/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
    selector: 'sd-feedback',
    templateUrl: 'feedback.component.html'
})

export class FeedbackComponent implements OnInit {

    datas:any = [];



    constructor(private contactService: ContactService) {
    }



    ngOnInit() {
    }


    public feedback_title = 'Samsung vừa chính thức ra mắt loạt sản phẩm TV cao cấp gồm QLED TV và The Frame trong sự kiện ra mắt TV toàn cầu được tổ chức tại Paris ngày 14/3.';
    public user = { };


    onFeedbackSubmit()
    {
        this.contactService.postFeedback(this.user).subscribe();
    }



}
