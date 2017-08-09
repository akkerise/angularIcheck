/**
 * Created by idea on 23/03/2017.
 */
import { ActionReducer, Action } from '@ngrx/store';
import { Post } from '../models/Post';
import { Comment } from '../models/Comment';
import { User } from '../models/User';
import { createSelector } from 'reselect';
import * as feed from '../actions/feed';
import * as authen from '../actions/authentication';

export interface State {
    having_data : boolean;
    loaded: boolean;
    loading: boolean;
    ids: string[];
};
const initialState: State = {
    having_data : true,
    loaded: false,
    loading: false,
    ids: []
};


export function reducer(state = initialState, action: feed.Actions): State {
    switch (action.type) {
        case feed.ActionTypes.LOAD: {
            return Object.assign({}, state, {
                loading: true
            });
        }

        case feed.ActionTypes.LOAD_SUCCESS: {
            const posts = action.payload;
            var c = state.ids.concat(posts.map(post => post.body.id));
            return {
                having_data: posts.length > 0,
                loaded: true,
                loading: false,
                ids:c.filter(function (item, pos) {return c.indexOf(item) == pos})
                //ids: c
            };
        }

        case feed.ActionTypes.ADD_POST_SUCCESS:
        case feed.ActionTypes.REMOVE_POST_FAIL: {
            const post = action.payload;
            if (state.ids.indexOf(post.body.id) > -1) {
                return state;
            }
            var arr = [post.body.id];

            return Object.assign({}, state, {
                ids: arr.concat(state.ids)
            });
        }
        case authen.ActionTypes.LOGOUT:
        case authen.ActionTypes.LOGIN:
        {
            return {
                having_data : true,
                loaded: false,
                loading: false,
                ids: []
            }
        }

        case feed.ActionTypes.REMOVE_POST_SUCCESS:
        case feed.ActionTypes.ADD_POST_FAIL: {
            const post = action.payload;
            return Object.assign({}, state, {
                ids: state.ids.filter(id => id !== post.id)
            });
        }

        default: {
            return state;
        }
    }
}

export const getLoaded = (state: State) => state.loaded;

export const getLoading = (state: State) => state.loading;

export const getIds = (state: State) => state.ids;