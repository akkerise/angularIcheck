import { Component, OnInit } from '@angular/core';
import * as fromRoot from '../common/reducers';
import * as actionAuth from '../common/actions/authentication';
import { Store } from '@ngrx/store';
/**
 * This class represents the lazy loaded HomeComponent.
 */

@Component({
    selector: 'sd-authenticate',
    templateUrl: 'authenticate.component.html',
})

export class AuthenticateComponent implements OnInit {


    constructor(
        private store : Store<fromRoot.State>
    ) {
    }

    ngOnInit() {
        this.store.dispatch(new actionAuth.LogoutAction());
    }

}
