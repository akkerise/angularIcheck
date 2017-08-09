import { NgModule } from '@angular/core';
import { NotFoundComponent } from './notfound.component';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } 	from '@angular/router';
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
  imports: [CommonModule,RouterModule,BrowserModule],
  declarations: [NotFoundComponent],
  exports: [NotFoundComponent]
})
export class NotFoundModule { }
