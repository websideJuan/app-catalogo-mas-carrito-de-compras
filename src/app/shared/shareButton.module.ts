import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CartButtonComponent } from '../components/cart-button/cart-button.component';


@NgModule({
  declarations: [CartButtonComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [CartButtonComponent],
})

export class ShareButtonModule {
  // This module is used to share common components like FooterNavbarComponent across the application.
  // It can be imported in other modules to use the shared components.
}