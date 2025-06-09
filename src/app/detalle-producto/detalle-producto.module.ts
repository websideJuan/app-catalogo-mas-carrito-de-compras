import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleProductoPageRoutingModule } from './detalle-producto-routing.module';

import { DetalleProductoPage } from './detalle-producto.page';
import { CarritoComprasPageModule } from "../carrito-compras/carrito-compras.module";
import { ShareButtonModule } from '../shared/shareButton.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleProductoPageRoutingModule,
    ShareButtonModule
],
  declarations: [DetalleProductoPage],
  exports: [DetalleProductoPage],
})
export class DetalleProductoPageModule {}
