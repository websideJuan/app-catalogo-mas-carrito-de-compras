import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  private productos: any[] = [];
  private total: number = 0;
  private cantidad: number = 0;


  agregarProducto(producto: any) {
    // Verificar si el producto ya está en el carrito
    const index = this.productos.findIndex(p => p.id === producto.id);
    if (index > -1) {
      // Si el producto ya está en el carrito, no lo agregamos de nuevo
      return;
    }
    // Si no está en el carrito, lo agregamos
    producto.cantidad + 1;
    this.productos.push(producto);
    this.total += producto.precio;
  }

  eliminarProducto(producto: any) {
    const index = this.productos.indexOf(producto);
    if (index > -1) {
      this.productos.splice(index, 1);
      this.total -= producto.precio;
    }
  }

  obtenerProductos() {
    return this.productos;
  }
  
  obtenerTotal() {
    return this.total;
  }

  obtenerCantidad() {
    return this.productos.length;
  }

  limpiarCarrito() {
    this.productos = [];
    this.total = 0;
  }

  constructor() { }
}

 