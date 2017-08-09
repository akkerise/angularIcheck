import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { NewsService } from '../common/services/News.service';
import { GroupService } from '../common/services/Group.service';
import { DynamicModule } from '../common/cms/dynamic.module';
//import {  } from '../common/'

@NgModule({
  imports: [CommonModule,DynamicModule],
  declarations: [HomeComponent],
  exports: [HomeComponent],
  providers: [
    NewsService,
  ]
})
export class HomeModule { }
