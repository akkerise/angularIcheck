/**
 * Created by idea on 04/04/2017.
 */
import { Action } from '@ngrx/store';
import { AccessToken } from '../models/AccessToken';
import { User } from '../models/User';

/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 *
 * The 'type' utility function coerces strings into string
 * literal types and runs a simple check to guarantee all
 * action types in the application are unique.
 */
export const ActionTypes = {
    LOGIN_SUCCESS:        '[User] Login Success',
    LOGIN_FAIL:           '[User] Login Fail',
    LOGOUT:               '[User] Logout',
    LOGIN:                '[User] Login',
    LOAD:                 '[User] Load',
    LOAD_SUCCESS:         '[User] Load Success',
    UPDATE:               '[User] Update',
    UPDATE_SUCCESS:       '[User] Update Success',
    UPDATE_FAIL:          '[User] Update Fail'
};

export class LoginSuccessAction implements Action{
    type = ActionTypes.LOGIN_SUCCESS;

    constructor(public payload:User){}
}

export class LoginFailAction implements Action{
    type = ActionTypes.LOGIN_FAIL;

    constructor(public payload:any){}
}
export class LogoutAction implements Action{
    type = ActionTypes.LOGOUT;

    constructor(){}
}
export class LoginAction implements Action{
    type = ActionTypes.LOGIN;

    constructor(public payload:any){}
}
export class UpdateAction implements Action{
    type = ActionTypes.UPDATE;

    constructor(public payload:User){}
}

export class UpdateSuccessAction implements Action{
    type = ActionTypes.UPDATE_SUCCESS;
    constructor(public payload:User){}
}

export class UpdateFailAction implements Action{
    type = ActionTypes.UPDATE_FAIL;
    constructor(public payload:any){}
}
export class LoadAction implements Action{
    type = ActionTypes.LOAD;
    constructor(){}
}
export class LoadSuccessAction implements Action{
    type = ActionTypes.LOAD_SUCCESS;
    constructor(public payload:User){}
}
export type Actions
    = LoginSuccessAction
    | LoginFailAction
    | LogoutAction
    | LoginAction
    | UpdateAction
    | UpdateSuccessAction
    | UpdateFailAction
    | LoadAction;

