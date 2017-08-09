import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfiniteScrollModule } from 'angular2-infinite-scroll';
import { CategoriesComponent } from './categories.component';
import { BrowserComponent } from './browser.component';
import { CategoryService } from '../common/services/Category.service';
import { HelperModule } from '../common/helper/helper.module';
import { DynamicModule } from '../common/cms/dynamic.module';
import { Routes, RouterModule } 	from '@angular/router';

@NgModule({
  imports: [CommonModule,HelperModule,InfiniteScrollModule,DynamicModule,RouterModule],
  declarations: [CategoriesComponent,BrowserComponent],
  exports: [CategoriesComponent,BrowserComponent],
  providers: [
    CategoryService
  ]
})
export class CategoriesModule { }
