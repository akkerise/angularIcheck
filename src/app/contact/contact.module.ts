import { NgModule } from '@angular/core';
import { ContactComponent } from './contact.component';
import { CommonModule } from '@angular/common';
import { ContactService } from '../common/services/Contact.service';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [ContactComponent],
  exports: [ContactComponent],
  providers: [ContactService]
})
export class ContactModule { }
