import { NgModule } from '@angular/core';
import { RouterModule } 	from '@angular/router';
import { CommonModule } from '@angular/common';
import { HelperModule } from '../common/helper/helper.module';
import { InfiniteScrollModule } from 'angular2-infinite-scroll';
import { TopService } from '../common/services/Top.service';
import { UsersComponent } from './users.component';
@NgModule({
  imports: [CommonModule,HelperModule,InfiniteScrollModule,RouterModule],
  declarations: [UsersComponent],
  exports: [UsersComponent],
  providers: [
      TopService
  ]
})
export class UsersModule { }
