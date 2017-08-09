/**
 * Created by idea on 22/03/2017.
 */

import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {NavComponent} from "./nav.component";
import { PostService } from '../../common/services/Post.service';

@NgModule({
    declarations: [NavComponent],
    imports     : [BrowserModule, RouterModule],
    exports     : [NavComponent],
    providers: [PostService]
})

export class NavigationModule {}

