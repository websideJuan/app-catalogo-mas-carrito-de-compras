import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FooterNavbarComponent } from '../components/footer-navbar/footer-navbar.component';


@NgModule({
  declarations: [FooterNavbarComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [FooterNavbarComponent],
})

export class SharedModule {
  // This module is used to share common components like FooterNavbarComponent across the application.
  // It can be imported in other modules to use the shared components.
}