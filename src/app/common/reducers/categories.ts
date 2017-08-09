/**
 * Created by idea on 23/03/2017.
 */
import { ActionReducer, Action } from '@ngrx/store';
import { Category } from '../models/Category';
import { createSelector } from 'reselect';
import * as category from '../actions/category';

export interface State {
    ids: string[];
    entities: { [id: string]: Category };
    selectedCategoryId: string | null;
    loading: boolean;
};

export const initialState: State = {
    ids: [],
    entities: {},
    selectedCategoryId: null,
    loading: false
};


export function reducer(state = initialState, action: Action): State {
    switch (action.type) {
        case category.ActionTypes.LOAD_COMPLETE: {
            const categories = action.payload;
            const newCategories = categories.filter(category => !state.entities[category.id]);
            const newCategoryIds = newCategories.map(category => category.id);
            const newCategoryEntities = newCategories.reduce((entities: { [id: string]: Category }, category: Category) => {
                return Object.assign(entities, {
                    [category.id]: category
                });
            }, {});

            return {
                ids: [ ...state.ids, ...newCategoryIds ],
                entities: Object.assign({}, state.entities, newCategoryEntities),
                selectedCategoryId: state.selectedCategoryId,
                loading: false
            };
        }

        case category.ActionTypes.LOAD:{
            return Object.assign({},state, {
                loading : true
            });
        }

        case category.ActionTypes.SELECT: {
            return {
                ids: state.ids,
                entities: state.entities,
                selectedCategoryId: action.payload,
                loading: false,
            };
        }


        default: {
            return state;
        }
    }
}

export const getEntities = (state: State) => state.entities;

export const getIds = (state: State) => state.ids;


export const getSelectedId = (state: State) => state.selectedCategoryId;

export const getSelected = createSelector(getEntities, getSelectedId, (entities, selectedId) => {
    return entities[selectedId];
});

export const getAll = createSelector(getEntities, getIds, (entities, ids) => {
    return ids.map(id => entities[id]);
});