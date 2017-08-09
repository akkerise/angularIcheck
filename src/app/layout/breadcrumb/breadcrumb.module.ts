/**
 * Created by idea on 22/03/2017.
 */

import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {BreadcrumbComponent} from "./breadcrumb.component";

@NgModule({
    declarations: [BreadcrumbComponent],
    imports     : [BrowserModule, RouterModule],
    exports     : [BreadcrumbComponent],
})

export class BreadcrumbModule {}

