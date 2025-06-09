import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { CarritoComprasPage } from './carrito-compras.page';
import { CarritoComprasPageRoutingModule } from './carrito-compras-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarritoComprasPageRoutingModule
  ],
  declarations: [CarritoComprasPage],
})
export class CarritoComprasPageModule {}
