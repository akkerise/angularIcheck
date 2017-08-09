import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelperModule } from '../common/helper/helper.module';
import { InfiniteScrollModule } from 'angular2-infinite-scroll';
import { ProductService } from '../common/services/Product.service';
import { TopProductComponent } from './top-product.component';

@NgModule({
  imports: [CommonModule,HelperModule,InfiniteScrollModule],
  declarations: [TopProductComponent],
  exports: [TopProductComponent],
  providers: [
      ProductService
  ]
})
export class TopProductModule { }
