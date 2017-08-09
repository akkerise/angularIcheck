/**
 * Created by idea on 22/03/2017.
 */

import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import { MomentModule } from 'angular2-moment';
import { ModalModule } from 'ngx-bootstrap';
import { FormsModule }   from '@angular/forms';
import { ModalInfoComponent } from './modal-info.component';
import { ModalComponent } from './modal.component';
import { ModalService } from '../../common/services/Modal.service';
import { ModalInfoService } from '../../common/services/ModalInfo.service';
import { DynamicFormModule } from '../../common/form/dynamic-form.module';

@NgModule({
    declarations: [ModalInfoComponent,ModalComponent],
    imports     : [BrowserModule, RouterModule,ModalModule,FormsModule,DynamicFormModule],
    exports     : [ModalInfoComponent,ModalComponent],
    providers   : [ModalService,ModalInfoService]
})

export class ModalsModule {}

