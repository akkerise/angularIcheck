/**
 * Created by idea on 22/03/2017.
 */

import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {LeftMenuComponent} from "./left-menu.component";

@NgModule({
    declarations: [LeftMenuComponent],
    imports     : [BrowserModule, RouterModule],
    exports     : [LeftMenuComponent],
})

export class LeftMenuModule {}

