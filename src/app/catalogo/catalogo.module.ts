import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CatalogoPageRoutingModule } from './catalogo-routing.module';

import { CatalogoPage } from './catalogo.page';
import { CarritoComprasPageModule } from "../carrito-compras/carrito-compras.module";
import { SharedModule } from '../shared/shared.module';
import { ShareButtonModule } from '../shared/shareButton.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CatalogoPageRoutingModule,
    SharedModule,
    ShareButtonModule
],
  declarations: [CatalogoPage],
  exports: [],
})
export class CatalogoPageModule {}
