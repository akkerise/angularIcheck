import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageComponent } from './image.component';
import { RateSpanComponent } from './rateSpan.component';
import { PriceComponent } from './price.component';
import { AvatarComponent } from './avatar.component';
import { ReportButtonComponent } from './reportButton.component';
import { ProductComponent } from './product.component';
import { ShareButtonComponent } from './shareButton.component';
import { UserComponent } from './user.component';
import { GroupComponent } from './group.component';
import { NewComponent } from './new.component';
import { ChartComponent } from './chart.component';
import { Routes, RouterModule } 	from '@angular/router';
import { UserService } from '../services/User.service';
import { GroupService } from '../services/Group.service';
import { PostService } from '../services/Post.service';
import { MomentModule } from 'angular2-moment';
import { ModalModule } from 'ngx-bootstrap';
import { FormsModule }   from '@angular/forms';

@NgModule({
  imports: [CommonModule,RouterModule,MomentModule,ModalModule.forRoot(),FormsModule],
  declarations: [ImageComponent,RateSpanComponent,PriceComponent,AvatarComponent,ProductComponent,UserComponent,GroupComponent,NewComponent,ReportButtonComponent,ShareButtonComponent,ChartComponent],
  exports: [ImageComponent,RateSpanComponent,PriceComponent,AvatarComponent,ProductComponent,UserComponent,GroupComponent,NewComponent,ReportButtonComponent,ShareButtonComponent,ChartComponent ],
  providers: [
    UserService,
    GroupService,
    PostService
  ]
})
export class HelperModule { }
