import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromBreadcrumb from '../common/reducers/breadcrumb';
import {AuthenticateService} from '../common/services/Authenticate.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
/**
 * This class represents the lazy loaded HomeComponent.
 */

@Component({
    selector: 'sd-register',
    templateUrl: 'register.component.html',
})

export class RegisterComponent {

    datas:any = [];
    model = {};

    constructor(private authenService:AuthenticateService
    ) {

    }


    onRegisterSubmit() {
        this.authenService.register(this.model);
    }
}