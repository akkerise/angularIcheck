/**
 * Created by idea on 23/03/2017.
 */
import { ActionReducer, Action } from '@ngrx/store';

export const ADDITEM = 'ADDITEM';
export const LOADITEM = 'LOADITEM';
export const RESET = 'RESET';
export const CURRENT = 'CURRENT';


export interface State {
    items: any;
}

const initialState: State = {
    items: [],
};


export function reducer(state: State = initialState, action: Action): State {
    switch (action.type) {
        case ADDITEM:
            var state = {
                items : action.payload
            };
            return state;
        case LOADITEM:
            return state;

        case RESET:
            return {items:[]};

        default:
            return state;
    }
}

export const getRouter = (state: State) => state.items;