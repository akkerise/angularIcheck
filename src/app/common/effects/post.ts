import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/toArray';
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { empty } from 'rxjs/observable/empty';
import { defer } from 'rxjs/observable/defer';
import { of } from 'rxjs/observable/of';

import * as feed from '../actions/feed';
import * as post from '../actions/post';
import { Post } from '../models/Post';
import { Feed } from '../models/Feed';

import { PostService } from '../services/Post.service';
import { CommentService } from '../services/Comment.service';
import { FeedService } from '../services/Feed.service';

@Injectable()
export class PostEffects {

  /**
   * This effect makes use of the `startWith` operator to trigger
   * the effect immediately on startup.
   */
  @Effect()
      search$: Observable<Action> = this.actions$
          .ofType(post.ActionTypes.LOAD)
          .map(toPayload)
          .switchMap(query => {
            if (query === '') {
              return empty();
            }

            const nextSearch$ = this.actions$.ofType(post.ActionTypes.LOAD).skip(1);

            return this.feedService.getFeed(query)
                .takeUntil(nextSearch$)
                .map(books => new post.LoadSuccessAction(books))
                .catch(() => of(new post.LoadFailAction([])));
          });

    @Effect()
        loadComment$: Observable<Action> = this.actions$
            .ofType(post.ActionTypes.VIEW_COMMENT)
            .startWith(new post.ViewAction())
            .switchMap((query:any) =>{
                return this.feedService.getFeed(query.payload)
                    .map((posts: Feed[]) => {
                        return new feed.LoadSuccessAction(posts)})
                    .catch(error => of(new feed.LoadFailAction(error)))
            }
        );
    @Effect()
        addCommentToPost$: Observable<Action> = this.actions$
            .ofType(post.ActionTypes.ADD_COMMENT)
            .map((action: post.AddAction) => action.payload)
            .mergeMap(comment =>{
                console.log(comment);
                return this.commentService.postComment(comment)
                    .map((commentReturn) => {
                        return new post.AddSuccessAction(commentReturn);
                    })
                    .catch((err) => {
                        return of(new post.AddFailAction(comment))}
                )
            }
        );


    @Effect()
        removeCommentFromPost$: Observable<Action> = this.actions$
            .ofType(post.ActionTypes.REMOVE_COMMENT)
            .map((action: feed.RemoveAction) => action.payload)
            .mergeMap(comment =>
                this.commentService.deleteComment(comment.id)
                    .map(() => {
                        return new post.RemoveSuccessAction(comment);
                    })
                    .catch(() => of(new post.RemoveFailAction(comment)))
        );

    constructor(private actions$: Actions,private commentService:CommentService,private postService : PostService,private feedService : FeedService) { }
}
