/**
 * Created by idea on 23/03/2017.
 */
import  * as fromBreadcrumb from './breadcrumb';
import  * as fromCategories from './categories';
import  * as fromComment from './comments';
import  * as fromAuth from './authentication';
import  * as fromFeed from './feeds';
import  * as fromPost from './posts';
import  * as fromCommentObj from './commentobjs';
import { ActionReducer } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { combineReducers } from '@ngrx/store';
import { compose } from '@ngrx/core/compose';
import { environment } from '../../../environments/environment';
import { createSelector } from 'reselect';

export interface State {
    breadcrumb : fromBreadcrumb.State,
    categories : fromCategories.State,
    comments   : fromComment.State,
    authentication : fromAuth.State,
    feeds       :fromFeed.State,
    commentobjs : fromCommentObj.State,
    posts       : fromPost.State
}

const reducers = {
    breadcrumb : fromBreadcrumb.reducer,
    categories : fromCategories.reducer,
    comments   : fromComment.reducer,
    authentication : fromAuth.reducer,
    feeds       : fromFeed.reducer,
    commentobjs : fromCommentObj.reducer,
    posts       : fromPost.reducer
};


const developmentReducer: ActionReducer<State> = compose(storeFreeze, combineReducers)(reducers);
const productionReducer: ActionReducer<State> = combineReducers(reducers);

export function reducer(state: any, action: any) {
    if (environment.production) {
        return productionReducer(state, action);
    } else {
        return developmentReducer(state, action);
    }
}


/**
 * A selector function is a map function factory. We pass it parameters and it
 * returns a function that maps from the larger state tree into a smaller
 * piece of state. This selector simply selects the `books` state.
 *
 * Selectors are used with the `select` operator.
 *
 * ```ts
 * class MyComponent {
 * 	constructor(state$: Observable<State>) {
 * 	  this.booksState$ = state$.select(getCategorysState);
 * 	}
 * }
 * ```
 */
export const getCategoriesState = (state: State) => state.categories;

/**
 * Every reducer module exports selector functions, however child reducers
 * have no knowledge of the overall state tree. To make them useable, we
 * need to make new selectors that wrap them.
 *
 * The createSelector function from the reselect library creates
 * very efficient selectors that are memoized and only recompute when arguments change.
 * The created selectors can also be composed together to select different
 * pieces of state.
 */

export const getCategoryEntities = createSelector(getCategoriesState, fromCategories.getEntities);
export const getAllCategories = createSelector(getCategoriesState,fromCategories.getAll);
export const getCategoryIds = createSelector(getCategoriesState, fromCategories.getIds);
export const getSelectedCategoryId = createSelector(getCategoriesState, fromCategories.getSelectedId);
export const getSelectedCategory = createSelector(getCategoriesState, fromCategories.getSelected);

export const getBreadcrumbState = (state: State) => state.breadcrumb;

export const getBreadcrumbEntity = createSelector(getBreadcrumbState, fromBreadcrumb.getRouter);

export const getUserState = (state : State) => state.authentication;

export const getUser = createSelector(getUserState,fromAuth.getUser);

export const getFeedsState = (state : State) => state.feeds;
export const getLoadindFeed = createSelector(getFeedsState,fromFeed.getLoading);
export const getFeedIds =  createSelector(getFeedsState, fromFeed.getIds);

export const getPostsState = (state : State) => state.posts;
export const getPostEntities =  createSelector(getPostsState, fromPost.getEntities);
export const getAllPosts = createSelector(getPostsState,fromPost.getAll);
export const getPosts = createSelector(getPostEntities, getFeedIds, (entities, ids) => {
    return ids.map(id => entities[id]);
});
export const havingDataPosts = createSelector(getPostsState,fromPost.havingData);
export const getCommentIds = createSelector(getPostsState,fromPost.getCommentIds);

export const getCommentState = (state : State) => state.commentobjs;
export const getCommentEntities =  createSelector(getCommentState, fromCommentObj.getEntities);
export const getCommentsPost = createSelector(getCommentEntities,getCommentIds,(entities, ids) =>{
    if(ids)
    return ids.map(id => entities[1]);
    else
    return null;
});