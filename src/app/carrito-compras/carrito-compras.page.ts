import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../servicios/carrito.service';

@Component({
  selector: 'app-carrito-compras',
  templateUrl: './carrito-compras.page.html',
  styleUrls: ['./carrito-compras.page.scss'],
  standalone: false
})
export class CarritoComprasPage implements OnInit {

   productos: any[] = []; 
 
   constructor(private carritoServices: CarritoService) { }
 
   ngOnInit() {
     this.productos = this.carritoServices.obtenerProductos();
   }
 
   verCarrito() {
     this.carritoServices.obtenerProductos();
     this.carritoServices.obtenerTotal();
   }
 
   eliminarProducto(producto: any) {
     this.carritoServices.eliminarProducto(producto);
     this.productos = this.carritoServices.obtenerProductos();
   }
 
   limpiarCarrito() {
     this.carritoServices.limpiarCarrito();
     this.productos = [];
   }
 
   obtenerTotal() {
     return this.carritoServices.obtenerTotal();
   }
}
