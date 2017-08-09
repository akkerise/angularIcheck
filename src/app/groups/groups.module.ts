import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelperModule } from '../common/helper/helper.module';
import { InfiniteScrollModule } from 'angular2-infinite-scroll';
import { GroupService } from '../common/services/Group.service';
import { GroupsComponent } from './groups.component';
import { RouterModule } 	from '@angular/router';

@NgModule({
  imports: [CommonModule,HelperModule,InfiniteScrollModule,RouterModule],
  declarations: [GroupsComponent],
  exports: [GroupsComponent],
  providers: [
    GroupService
  ]
})
export class GroupModule { }
