/**
 * Created by idea on 07/04/2017.
 */
import { Action } from '@ngrx/store';
import { Comment } from '../models/Comment';
import { Post } from '../models/Post';
import { Feed } from '../models/Feed';

/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 *
 * The 'type' utility function coerces strings into string
 * literal types and runs a simple check to guarantee all
 * action types in the application are unique.
 */
export const ActionTypes = {
    LOAD: '[FEED] Load Feed',
    LOAD_SUCCESS: '[FEED] Load Feed Success',
    LOAD_FAIL: '[FEED] Load Feed Fail',
    ADD_POST: '[FEED] Add Post',
    ADD_POST_SUCCESS: '[FEED] Add Post Success',
    ADD_POST_FAIL: '[FEED] Add Post Fail',
    REMOVE_POST: '[FEED] Remove Post',
    REMOVE_POST_SUCCESS: '[FEED] Remove Post Success',
    REMOVE_POST_FAIL: '[FEED] Remove Post Fail'
};

export class LoadAction implements Action {
    type = ActionTypes.LOAD;

    constructor(public payload?:any) {
    }
}

export class LoadSuccessAction implements Action {
    type = ActionTypes.LOAD_SUCCESS;

    constructor(public payload:Feed[]) {
    }
}
export class LoadFailAction implements Action {
    type = ActionTypes.LOAD_FAIL;

    constructor(public payload:any) {
    }
}

export class AddAction implements Action {
    type = ActionTypes.ADD_POST;

    constructor(public payload:Post) {
    }
}
export class AddSuccessAction implements Action {
    type = ActionTypes.ADD_POST_SUCCESS;

    constructor(public payload:any) {
    }
}
export class AddFailAction implements Action {
    type = ActionTypes.ADD_POST_FAIL;

    constructor(public payload:Post) {
    }
}

export class RemoveAction implements Action{
    type = ActionTypes.REMOVE_POST;

    constructor(public payload:any){}
}

export class RemoveSuccessAction implements Action{
    type = ActionTypes.REMOVE_POST_SUCCESS;
    constructor(public payload: Post){}
}

export class RemoveFailAction implements Action{
    type = ActionTypes.REMOVE_POST_FAIL;
    constructor(public payload :Post){}
}

export type Actions =
        LoadAction|
        LoadSuccessAction|
        LoadFailAction|
        AddAction|
        AddSuccessAction|
        AddFailAction|
    RemoveAction|
    RemoveFailAction|
    RemoveSuccessAction;
