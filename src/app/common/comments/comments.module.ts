import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentService } from '../services/Comment.service';
import { HelperModule } from '../helper/helper.module';
import { CommentsComponent } from './comments.component';
import { CommentItemComponent } from './comment-item.component';
import { FormsModule }   from '@angular/forms';
import { Routes, RouterModule } 	from '@angular/router';
import { MomentModule } from 'angular2-moment';

@NgModule({
    imports: [CommonModule, HelperModule, FormsModule,RouterModule,MomentModule],
    declarations: [CommentsComponent,CommentItemComponent],
    exports: [CommentsComponent,CommentItemComponent],
    providers: [CommentService]
})

export class CommentsModule { }