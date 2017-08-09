/**
 * Created by idea on 23/03/2017.
 */
import { ActionReducer, Action } from '@ngrx/store';

export const ADDCOMMENT = 'ADDCOMMENT';
export const LOADCOMMENT = 'LOADCOMMENT';
export const RESETCOMMENT = 'RESETCOMMENT';


export interface State {
    items: any;
}

const initialState: State = {
    items: [],
};


export function reducer(state: State = initialState, action: Action): State {

    switch (action.type) {
        case ADDCOMMENT:
            return {
                items : [...state.items,...action.payload]
            };

        case LOADCOMMENT:
            return state;

        case RESETCOMMENT:
            return {items:[]};

        default:
            return state;
    }
}

export const getRouter = (state: State) => state.items;