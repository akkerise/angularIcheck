import { createSelector } from 'reselect';
import { Feed } from '../models/Feed';
import { Post } from '../models/Post';
import { Comment } from '../models/Comment';
import * as post from '../actions/post';
import * as feed from '../actions/feed';
import * as authen from '../actions/authentication';
import { ActionReducer, Action } from '@ngrx/store';


export interface State {
    ids: string[];
    entities: { [id: string]: Feed };
    comments : { [id:string]: String[]};
    loading: boolean;
    having_data: boolean;
    selectedPostId : string;
}
;

export const initialState:State = {
    ids: [],
    entities: {},
    comments: {},
    loading: false,
    having_data: true,
    selectedPostId : null
};

export function reducer(state = initialState, action:Action):State {
    switch (action.type) {
        case feed.ActionTypes.LOAD_SUCCESS:
        case post.ActionTypes.LOAD_SUCCESS:
        {
            const posts = action.payload;
            const newPosts = posts.filter(post => !state.entities[post.body.id]);

            const newPostIds = newPosts.map(post => post.body.id);
            const newPostEntities = newPosts.reduce((entities:{ [id: string]: Feed }, post:Feed) => {
                return Object.assign(entities, {
                    [post.body.id]: post
                });
            }, {});
            return {
                ids: [...state.ids, ...newPostIds],
                entities: Object.assign({}, state.entities, newPostEntities),
                comments: state.comments,
                loading: state.loading,
                having_data: posts.length > 0,
                selectedPostId : state.selectedPostId
            };
        }

        case authen.ActionTypes.LOGOUT:{
            return {
                ids: [],
                entities: {},
                comments: {},
                loading: false,
                having_data: true,
                selectedPostId : null
            }
        }
        case post.ActionTypes.ADD:
        case feed.ActionTypes.ADD_POST_SUCCESS:
        {
            const post = action.payload;

            if (state.ids.indexOf(post.body.id) > -1) {
                return state;
            }
            var arr = [post.body.id];

            return {
                ids: arr.concat(state.ids),
                entities: Object.assign({}, state.entities, {
                    [post.body.id]: post
                }),
                comments: state.comments,
                loading: state.loading,
                having_data: state.having_data,
                selectedPostId: state.selectedPostId
            };
        }

        case post.ActionTypes.VIEW_COMMENT:
        {
            return Object.assign({}, state, {
                loading: true
            });
        }

        case post.ActionTypes.VIEW_COMMENT_SUCESS:
        {
            const comments = action.payload;
            const listComments = comments.map(comment => comment.id);
            var c = comments.map(comment => comment.id).concat(state.comments);
            const newPosts = listComments.filter(comment => !state.comments[comment.object_id]);

            const newPostComments = newPosts.reduce((comments:{ [id: string]: string[] }, post:any) => {
                return Object.assign(comments, {
                    [post.id]: c.filter(function (item, pos) {return c.indexOf(item) == pos})
                });
            }, {});

            return {
                ids: state.ids,
                entities: state.entities,
                loading: false,
                comments: Object.assign({}, state.comments, newPostComments),
                having_data: state.having_data,
                selectedPostId: state.selectedPostId
            };
        }

        case post.ActionTypes.ADD_COMMENT_SUCCESS:
        case post.ActionTypes.REMOVE_COMMENT_FAIL:
            const comment = action.payload;
            if (!state.comments[comment.object_id] || state.comments[comment.object_id].indexOf(comment.id) > -1) {
                return state;
            }
            const commentsPost = Object.assign({}, state.comments, {
                [comment.object_id]: [...state.comments[comment.object_id], comment.id]
            });

            return Object.assign({}, state, {
                comments: commentsPost
            });

        case post.ActionTypes.REMOVE_COMMENT_SUCCESS:
        case post.ActionTypes.ADD_COMMENT_FAIL:
        {
            const comment = action.payload;
            const commentsPost = Object.assign({}, state.comments, {
                [comment.object_id]: state.comments[comment.object_id].filter(id => id !== comment.id)
            });

            return Object.assign({}, state, {
                comments: commentsPost
            });
        }

        default:
        {
            return state;
        }
    }
}

/**
 * Because the data structure is defined within the reducer it is optimal to
 * locate our selector functions at this level. If store is to be thought of
 * as a database, and reducers the tables, selectors can be considered the
 * queries into said database. Remember to keep your selectors small and
 * focused so they can be combined and composed to fit each particular
 * use-case.
 */

export const getEntities = (state:State) => state.entities;

export const getIds = (state:State) => state.ids;

export const getComments = (state:State) => state.comments;

export const havingData = (state:State) => state.having_data;

export const getSelectedPost = (state:State) => state.selectedPostId;

export const getAll = createSelector(getEntities, getIds, (entities, ids) => {
    return ids.map(id => entities[id]);
});
export const getCommentIds = createSelector(getSelectedPost,getComments,(postId,comments)=>{
    return comments[postId];
});
