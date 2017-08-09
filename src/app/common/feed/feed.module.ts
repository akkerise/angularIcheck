import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelperModule } from '../helper/helper.module';
import { FeedComponent } from './feed.component';
import { TitleComponent } from './title.component';
import { ContentComponent } from './content.component';
import { Routes, RouterModule } 	from '@angular/router';
import { MomentModule } from 'angular2-moment';
import { PostService } from '../services/Post.service';
import { CommentsModule } from '../comments/comments.module';

@NgModule({
    imports: [CommonModule, HelperModule,RouterModule,MomentModule,CommentsModule],
    declarations: [FeedComponent,TitleComponent,ContentComponent],
    exports: [FeedComponent,TitleComponent,ContentComponent],
    providers: [PostService]
})

export class FeedModule { }