import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';
import { AuthenticateComponent } from './authenticate.component';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

@NgModule({
  imports: [CommonModule,FormsModule],
  declarations: [LoginComponent,RegisterComponent,AuthenticateComponent],
  exports: [LoginComponent,RegisterComponent,AuthenticateComponent],

})
export class AuthenticateModule { }
