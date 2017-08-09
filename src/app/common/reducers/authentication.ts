/**
 * Created by idea on 05/04/2017.
 */
import { ActionReducer, Action } from '@ngrx/store';
import { User } from '../models/User';
import { AccessToken } from '../models/AccessToken';
import { createSelector } from 'reselect';
import * as authen from '../actions/authentication';

export interface State {
    user: User;
    loading: boolean;
    message: string
}
;

export const initialState:State = {
    user: null,
    loading: false,
    message: ''
};


export function reducer(state = initialState, action:Action):State {
    switch (action.type) {
        case authen.ActionTypes.LOGIN_SUCCESS:
        {
            return Object.assign({}, state, {
                loading: false,
                user: action.payload,
                message: 'login success'
            });

        }
        case authen.ActionTypes.LOAD:
        case authen.ActionTypes.LOGIN:
        {
            return Object.assign({}, state, {
                loading: true,
            });
        }

        case authen.ActionTypes.LOGOUT:
        case authen.ActionTypes.LOGIN_FAIL:
        {
            return Object.assign({}, state, {
                loading: false,
                user: null
            });
        }
        case authen.ActionTypes.UPDATE:
        {

            return Object.assign({}, state, {
                loading: true
            });
        }
        case authen.ActionTypes.UPDATE_SUCCESS:
        {
            return Object.assign({}, state, {
                loading: false,
                user: action.payload
            });
        }
        case authen.ActionTypes.UPDATE_FAIL:
        {
            return state;
        }


        default:
        {
            return state;
        }
    }
}

export const getUser = (state:State) => {
        return state.user
};





