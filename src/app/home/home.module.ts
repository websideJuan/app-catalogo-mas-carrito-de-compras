import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ShareButtonModule } from '../shared/shareButton.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,  
    HomePageRoutingModule,
    SharedModule,
    ShareButtonModule
  ],
  declarations: [HomePage],
  exports: [HomePage],
})
export class HomePageModule {}
