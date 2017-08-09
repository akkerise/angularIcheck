import { NgModule } from '@angular/core';
import { ProductComponent } from './product.component';
import { CommonModule } from '@angular/common';
import { ProductService } from '../common/services/Product.service';
import { HelperModule } from '../common/helper/helper.module';
import { CommentsModule } from '../common/comments/comments.module';

@NgModule({
    imports: [CommonModule, HelperModule,CommentsModule],
    declarations: [ProductComponent],
    exports: [ProductComponent],
    providers: [ProductService]
})

export class ProductModule { }