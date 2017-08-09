import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../services/User.service';
import { HelperModule } from '../helper/helper.module';
import { NotificationsComponent } from './notifications.component';
import { FormsModule }   from '@angular/forms';
import { MomentModule } from 'angular2-moment';
import {RouterModule} from "@angular/router";

@NgModule({
    imports: [CommonModule, HelperModule, FormsModule,MomentModule,RouterModule],
    declarations: [NotificationsComponent],
    exports: [NotificationsComponent],
    providers: [UserService]
})

export class NotificationsModule { }