/**
 * Created by idea on 22/03/2017.
 */

import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {FooterComponent} from "./footer.component";

@NgModule({
    declarations: [FooterComponent],
    imports     : [BrowserModule, RouterModule],
    exports     : [FooterComponent],
})

export class FooterModule {}

