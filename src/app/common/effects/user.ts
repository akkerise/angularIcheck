/**
 * Created by idea on 04/04/2017.
 */
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/skip';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/startWith';
import { Injectable } from '@angular/core';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { empty } from 'rxjs/observable/empty';
import { of } from 'rxjs/observable/of';
import { Router, ActivatedRoute} from '@angular/router';

import { AuthenticateService } from '../services/Authenticate.service';
import { AccountService } from '../services/Account.service';
import { AccessToken } from '../models/AccessToken';
import { User } from '../models/User';
import * as authen from '../actions/authentication';


/**
 * Effects offer a way to isolate and easily test side-effects within your
 * application.
 * The `toPayload` helper function returns just
 * the payload of the currently dispatched action, useful in
 * instances where the current state is not necessary.
 *
 * Documentation on `toPayload` can be found here:
 * https://github.com/ngrx/effects/blob/master/docs/api.md#topayload
 *
 * If you are unfamiliar with the operators being used in these examples, please
 * check out the sources below:
 *
 * Official Docs: http://reactivex.io/rxjs/manual/overview.html#categories-of-operators
 * RxJS 5 Operators By Example: https://gist.github.com/btroncone/d6cf141d6f2c00dc6b35
 */

@Injectable()
export class AuthEffects {

    @Effect() login$ = this.actions$
        // Listen for the 'LOGIN' action
        .ofType(authen.ActionTypes.LOGIN)
        // Map the payload into JSON to use as the request body
        .map(action => action.payload)
        .switchMap(payload => this.authenService.login(payload)
            // If successful, dispatch success action with result
            .map(res => {
                let returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
                if(returnUrl){
                    this.router.navigate([returnUrl]);
                }else{
                    this.router.navigate(['/home']);
                }
                return new authen.LoginSuccessAction(res);
            })
            // If request fails, dispatch failed action
            .catch(() => Observable.of(new authen.LoginFailAction([])))
    );

    @Effect() logout$ = this.actions$
        // Listen for the 'LOGIN' action
        .ofType(authen.ActionTypes.LOGOUT)
        // Map the payload into JSON to use as the request body
        .map(action => action.payload)
        .switchMap(() => Observable.of(this.authenService.logout())
            // If successful, dispatch success action with result
            .map(res => {
                return new authen.LoginFailAction([]);
            })
            // If request fails, dispatch failed action
            .catch(() => Observable.of(new authen.LoginFailAction([])))
    );


    @Effect() load$ = this.actions$
        // Listen for the 'LOGIN' action
        .ofType(authen.ActionTypes.LOAD)
        .startWith(new authen.LoadAction())
        // Map the payload into JSON to use as the request body
        .switchMap(() => this.authenService.load()
            // If successful, dispatch success action with result
            .map(res => {
                return new authen.LoginSuccessAction(res);
            })
            // If request fails, dispatch failed action
            .catch(() => Observable.of(new authen.LoginFailAction([])))
    );

    @Effect()
        update$: Observable<Action> = this.actions$
            .ofType(authen.ActionTypes.UPDATE)
            .map((action: authen.UpdateAction) => action.payload)
            .mergeMap(
            (user : User) =>
                    this.accountService.update(user)
                    .map(() => new authen.UpdateSuccessAction(user))
                    .catch(() => of(new authen.UpdateFailAction([])))
            );


    constructor(private actions$: Actions, private authenService: AuthenticateService,private accountService:AccountService,private router : Router,private route: ActivatedRoute,) { }
}