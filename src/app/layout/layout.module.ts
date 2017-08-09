/**
 * Created by idea on 21/03/2017.
 */
import { NgModule }            		from '@angular/core';
import { CommonModule }        		from '@angular/common';
import { Routes, RouterModule } 	from '@angular/router';
import { BrowserModule } from "@angular/platform-browser";
import { FooterModule } from './footer/footer.module';
import { LeftMenuModule } from './menu/left-menu.module';
import { HeaderModule } from './header/header.module';
import { NavigationModule } from './navigation/nav.module';
import { BreadcrumbModule } from './breadcrumb/breadcrumb.module';
import { basicComponent } from './layouts/basic.component';
import { blankComponent } from './layouts/blank.component';
import { nomenuComponent } from './layouts/nomenu.component';
import { FlashMessagesModule } from 'angular2-flash-messages/module';
import { ModalsModule } from './modals/modals.module';

@NgModule({
    declarations: [blankComponent,basicComponent,nomenuComponent],
    imports     : [BrowserModule,FlashMessagesModule , RouterModule,HeaderModule , NavigationModule, LeftMenuModule, FooterModule, BreadcrumbModule, ModalsModule],
    exports     : [blankComponent,basicComponent,nomenuComponent]
})
export class LayoutModule { }