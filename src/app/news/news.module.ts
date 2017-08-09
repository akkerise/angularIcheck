import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsListComponent } from './news-list.component';
import { NewsDetailComponent } from './news-detail.component';
import { NewsService } from '../common/services/News.service';
import { DynamicModule } from '../common/cms/dynamic.module';
import { RouterModule } 	from '@angular/router';
import { HelperModule } from '../common/helper/helper.module';
import { InfiniteScrollModule } from 'angular2-infinite-scroll';
import { CommentsModule } from '../common/comments/comments.module';
import { MomentModule } from 'angular2-moment';
import { AlertModule } from 'ngx-bootstrap';
import { FormsModule }   from '@angular/forms';

//import {  } from '../common/'

@NgModule({
  imports: [
    CommonModule,
    DynamicModule,
    RouterModule,
    HelperModule,
    InfiniteScrollModule,
    CommentsModule,
    MomentModule,
    AlertModule.forRoot(),
      FormsModule
  ],
  declarations: [NewsListComponent,NewsDetailComponent],
  exports: [NewsListComponent,NewsDetailComponent],
  providers: [
    NewsService,
  ]
})
export class NewsModule { }
