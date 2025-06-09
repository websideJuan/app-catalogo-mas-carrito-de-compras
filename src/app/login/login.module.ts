import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';

// Importing necessary modules
import { ReactiveFormsModule } from '@angular/forms';

// My component imports
import { FormComponentComponent } from '../components/form-component/form-component.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    ReactiveFormsModule // Importing ReactiveFormsModule for form handling
  ],
  declarations: [LoginPage, FormComponentComponent],
  exports: [LoginPage, FormComponentComponent] // Exporting the components for use in other modules
})
export class LoginPageModule {}
