/**
 * Created by idea on 07/04/2017.
 */
import { Action } from '@ngrx/store';
import { Comment } from '../models/Comment';

/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 *
 * The 'type' utility function coerces strings into string
 * literal types and runs a simple check to guarantee all
 * action types in the application are unique.
 */
export const ActionTypes = {
    LOAD: '[COMMENT] Load Comment',
    LOAD_SUCCESS: '[COMMENT] Load Comment Success',
    LOAD_FAIL: '[COMMENT] Load Comment Fail'
};

export class LoadAction implements Action{
    type = ActionTypes.LOAD;
    constructor(public payload:any){}
}
export class LoadSuccessAction implements Action{
    type = ActionTypes.LOAD_SUCCESS;
    constructor(public payload:Comment[]){}
}
export class LoadFailAction implements Action{
    type = ActionTypes.LOAD_FAIL;
    constructor(public payload : any){}
}



export type Actions =
        LoadAction|
        LoadSuccessAction|
        LoadFailAction;
