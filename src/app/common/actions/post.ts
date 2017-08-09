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
    ADD: '[POST] ADD 1 POST',
    LOAD: '[POST] Load POST',
    LOAD_SUCCESS: '[POST] Load POST Success',
    LOAD_FAIL: '[POST] Load POST Fail',
    VIEW_COMMENT: '[POST] View Post',
    VIEW_COMMENT_SUCESS: '[POST] View Post Success',
    VIEW_COMMENT_FAIL: '[POST] View Post Fail',
    ADD_COMMENT: '[POST] Add Comment',
    ADD_COMMENT_SUCCESS: '[POST] Add Comment Success',
    ADD_COMMENT_FAIL: '[POST] Add Comment Fail',
    REMOVE_COMMENT: '[POST] Remove Comment',
    REMOVE_COMMENT_SUCCESS: '[POST] Remove Comment Success',
    REMOVE_COMMENT_FAIL: '[POST] Remove Comment Fail'
};

export class LoadAction implements Action {
    type = ActionTypes.LOAD;

    constructor(public payload:any) {
    }
}
export class AddOneAction implements Action {
    type = ActionTypes.ADD;

    constructor(public payload:Feed) {
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

export class ViewAction implements Action {
    type = ActionTypes.VIEW_COMMENT;

    constructor(public payload?:any) {
    }
}

export class ViewActionSuccess implements Action {
    type = ActionTypes.VIEW_COMMENT_SUCESS;

    constructor(public payload:Comment[]) {
    }
}

export class ViewActionFail implements Action {
    type = ActionTypes.VIEW_COMMENT_FAIL;

    constructor(public payload:any) {
    }
}

export class AddAction implements Action {
    type = ActionTypes.ADD_COMMENT;

    constructor(public payload:any) {
    }
}
export class AddSuccessAction implements Action {
    type = ActionTypes.ADD_COMMENT_SUCCESS;

    constructor(public payload:any) {
    }
}
export class AddFailAction implements Action {
    type = ActionTypes.ADD_COMMENT_FAIL;

    constructor(public payload:Comment) {
    }
}

export class RemoveAction implements Action {
    type = ActionTypes.REMOVE_COMMENT;

    constructor(public payload:Comment) {
    }
}

export class RemoveSuccessAction implements Action {
    type = ActionTypes.REMOVE_COMMENT_SUCCESS;

    constructor(public payload:Comment) {
    }
}

export class RemoveFailAction implements Action {
    type = ActionTypes.REMOVE_COMMENT_FAIL;

    constructor(public payload:Comment) {
    }
}

export type Actions = AddAction|
    LoadAction|
    LoadSuccessAction|
    LoadFailAction|
    AddAction|
    AddSuccessAction|
    AddFailAction|
    RemoveAction|
    RemoveSuccessAction|
    RemoveFailAction|
    ViewAction|
    ViewActionSuccess|
    ViewActionFail;
