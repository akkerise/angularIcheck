import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FollowComponent } from './follow.component';
import { DetailFeedComponent } from './detail.component';
import { NewsService } from '../common/services/News.service';
import { HelperModule } from '../common/helper/helper.module';
import { FormsModule }   from '@angular/forms';
import { FeedModule } from '../common/feed/feed.module';
import { UploadService } from '../common/services/Upload.service';
import { CommentsModule } from '../common/comments/comments.module';
import { InfiniteScrollModule } from 'angular2-infinite-scroll';

@NgModule({
  imports: [CommonModule,HelperModule,FormsModule,FeedModule,InfiniteScrollModule,CommentsModule],
  declarations: [FollowComponent,DetailFeedComponent],
  exports: [FollowComponent,DetailFeedComponent],
  providers: [
    NewsService,
    UploadService
  ]
})
export class FollowModule { }
