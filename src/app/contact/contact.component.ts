import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ContactService } from '../common/services/Contact.service';
import * as fromBreadcrumb from '../common/reducers/breadcrumb';
// Model
/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
    selector: 'sd-contact',
    templateUrl: 'contact.component.html'
})

export class ContactComponent implements OnInit {

    datas:any = [];

    constructor(private store: Store<fromBreadcrumb.State>,
                private contactService: ContactService
    ){
    }



    ngOnInit() {

    }

    public page_title = "Thông tin liên hệ";
    public user = { };



    onSubmit() {

        this.contactService.postContact(this.user).toPromise().then(data=>{
            console.log(data);
        });
    }


}
