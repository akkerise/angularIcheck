import { NgModule }            		from '@angular/core';
import { CommonModule }        		from '@angular/common';
import { Routes, RouterModule } 	from '@angular/router';
import { HomeCateComponent } from './home-cate.component';
import { HomeFeedbackComponent } from './home-feedback.component';
import { HomeFollowComponent } from './home-follow.component';
import { InstallBoxComponent } from './install-app.component';
import { NewsBoxComponent } from './news-box.component';
import { SearchBarComponent } from './search-bar.component';
import { TipBoxComponent } from './tip-box.component';
import { TopProductsComponent } from './top-products.component';
import { ProductsBoxComponent } from './productsbox.component';
import { MainComponent } from './main.component';
import { HelperModule } from '../helper/helper.module';
import { GroupService } from '../services/Group.service';
import { NewsService } from '../services/News.service';
import { UserService } from '../services/User.service';
import { ProductService } from '../services/Product.service';
import { TopService } from '../services/Top.service';
import {MomentModule} from 'angular2-moment';

@NgModule({
	imports: [
		CommonModule,HelperModule,RouterModule,MomentModule
	],
	providers: [
		GroupService,
		NewsService,
		ProductService,
		UserService
	],
	declarations: [
		HomeCateComponent,
		HomeFeedbackComponent,
		HomeFollowComponent,
		InstallBoxComponent,
		NewsBoxComponent,
		SearchBarComponent,
		TipBoxComponent,
		TopProductsComponent,
		ProductsBoxComponent,
		MainComponent,
	],
	exports: [
		HomeCateComponent,
		HomeFeedbackComponent,
		HomeFollowComponent,
		InstallBoxComponent,
		NewsBoxComponent,
		SearchBarComponent,
		TipBoxComponent,
		TopProductsComponent,
		ProductsBoxComponent,
		MainComponent
	],

})
export class DynamicModule { }


