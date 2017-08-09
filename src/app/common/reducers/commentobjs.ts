import { createSelector } from 'reselect';
import { ActionReducer, Action } from '@ngrx/store';
import { Post } from '../models/Post';
import { Comment } from '../models/Comment';
import * as post from '../actions/post';
import * as comment from '../actions/comment';


export interface State {
  ids: string[];
  entities: { [id: string]: Comment };
};

export const initialState: State = {
  ids: [],
  entities: {},
};

export function reducer(state = initialState, action: Action): State {
  switch (action.type) {
    case comment.ActionTypes.LOAD_SUCCESS:{
      const comments = action.payload;
      const newComments = comments.filter(comment => !state.entities[comment.id]);

      const newCommentIds = newComments.map(book => book.id);
      const newCommentEntities = newComments.reduce((entities: { [id: string]: Comment }, comment: Comment) => {
        return Object.assign(entities, {
          [comment.id]: comment
        });
      }, {});

      return {
        ids: [ ...state.ids, ...newCommentIds ],
        entities: Object.assign({}, state.entities, newCommentEntities),
      };
    }

    case comment.ActionTypes.LOAD: {
      const comment = action.payload;

      if (state.ids.indexOf(comment.id) > -1) {
        return state;
      }

      return {
        ids: [ ...state.ids, comment.id ],
        entities: Object.assign({}, state.entities, {
          [comment.id]: comment
        }),
      };
    }


    default: {
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

export const getEntities = (state: State) => state.entities;

export const getIds = (state: State) => state.ids;

export const getAll = createSelector(getEntities, getIds, (entities, ids) => {
  return ids.map(id => entities[id]);
});
