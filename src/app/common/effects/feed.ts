import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/toArray';
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { defer } from 'rxjs/observable/defer';
import { of } from 'rxjs/observable/of';

import * as feed from '../actions/feed';
import { Post } from '../models/Post';
import { Feed } from '../models/Feed';

import { PostService } from '../services/Post.service';
import { FeedService } from '../services/Feed.service';

@Injectable()
export class FeedEffects {

  /**
   * This effect makes use of the `startWith` operator to trigger
   * the effect immediately on startup.
   */
  @Effect()
  loadFeed$: Observable<Action> = this.actions$
    .ofType(feed.ActionTypes.LOAD)
    //.startWith(new feed.LoadAction())
    .switchMap((query:any) =>{
      return this.feedService.getFeed(query.payload)
        .map((posts: Feed[]) => {
           return new feed.LoadSuccessAction(posts)})
        .catch(error => of(new feed.LoadFailAction(error)))
      }
    );

  @Effect()
  addPostToFeed$: Observable<Action> = this.actions$
    .ofType(feed.ActionTypes.ADD_POST)
    .map((action: feed.AddAction) => action.payload)
    .mergeMap(post =>
      this.postService.createPost(post)
        .map((postReturn) => {
            return new feed.AddSuccessAction(postReturn);
          })
        .catch((err) => {
            return of(new feed.AddFailAction(post))}
      )
    );


  @Effect()
  removePostFromFeed$: Observable<Action> = this.actions$
    .ofType(feed.ActionTypes.REMOVE_POST)
    .map((action: feed.RemoveAction) => action.payload)
    .mergeMap(post =>
      this.postService.deletePost(post.id)
        .map(() => {
           return new feed.RemoveSuccessAction(post);
          })
        .catch(() => of(new feed.RemoveFailAction(post)))
    );

    constructor(private actions$: Actions,private postService : PostService,private feedService : FeedService) { }
}
