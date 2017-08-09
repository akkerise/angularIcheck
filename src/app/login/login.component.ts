import { Component, OnInit, ViewContainerRef  } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as fromRoot  from '../common/reducers';
import * as auth from '../common/actions/authentication';
import { Store } from '@ngrx/store';
/**
 * This class represents the lazy loaded HomeComponent.
 */

@Component({
    selector: 'sd-login',
    templateUrl: 'login.component.html',
})

export class LoginComponent {

    datas:any = [];
    loginForm:FormGroup;
    model = {};

    constructor(
        private store: Store<fromRoot.State>

    ) {

    }
    authenticate(provider:string) {
        console.log(provider);
        this.store.dispatch(new auth.LoginAction({provider:provider}))
    }


    ngOnInit() {
    }
    onSubmit() {
        this.store.dispatch(new auth.LoginAction(this.model));
    }
}
