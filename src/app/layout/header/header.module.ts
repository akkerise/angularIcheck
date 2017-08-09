/**
 * Created by idea on 22/03/2017.
 */

import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {HeaderComponent} from "./header.component";
import { HelperModule } from "../../common/helper/helper.module";
import { NotificationsModule } from "../../common/notifications/notifications.module";

@NgModule({
    declarations: [HeaderComponent],
    imports     : [BrowserModule, RouterModule,HelperModule,NotificationsModule],
    exports     : [HeaderComponent],
})

export class HeaderModule {}

