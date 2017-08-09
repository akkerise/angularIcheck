/**
 * Created by idea on 04/04/2017.
 */
import { Action } from '@ngrx/store';
import { Category } from '../models/Category';

/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 *
 * The 'type' utility function coerces strings into string
 * literal types and runs a simple check to guarantee all
 * action types in the application are unique.
 */
export const ActionTypes = {
    LOAD:             '[Category] Load',
    SELECT:           '[Category] Select',
    LOAD_COMPLETE:    '[Category] Load Complete'
};

export class LoadAction implements Action {
    type = ActionTypes.LOAD;

    constructor(public payload: any) { }
}

export class LoadCompleteAction implements Action {
    type = ActionTypes.LOAD_COMPLETE;

    constructor(public payload: Category[]) { }
}

export class SelectAction implements Action{
    type = ActionTypes.SELECT;

    constructor(public payload: Category){}
}

export type Actions
    = LoadCompleteAction
    | LoadAction
    | SelectAction;