import { NgModule } from '@angular/core';
import { ProfileComponent } from './profile.component';
import { CommonModule } from '@angular/common';
import { HelperModule } from '../common/helper/helper.module';
import { RouterModule } 	from '@angular/router';
import { CollectionService } from '../common/services/Collection.service';

@NgModule({
    imports: [CommonModule, HelperModule,RouterModule],
    declarations: [ProfileComponent],
    exports: [ProfileComponent],
    providers: [CollectionService]
})

export class ProfileModule { }