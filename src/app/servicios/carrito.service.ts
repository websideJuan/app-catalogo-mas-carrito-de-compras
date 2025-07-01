import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CarritoService {
  private productos: any[] = [];
  private total: number = 0;
  private cantidad: number = 0;

  agregarProducto(producto: any) {
    // Verificar si el producto ya está en el carrito
    const index = this.productos.findIndex((p) => p.id === producto.id);
    if (index > -1) {
      // Si ya está en el carrito, incrementamos la cantidad
      this.productos[index].cantidad += 1;
      this.total += producto.price; // Asumiendo que el precio es un número
      return;
    }
    // Si no está en el carrito, lo agregamos

    this.productos.push(producto);
    this.total += producto.price;
  }

  eliminarProducto(producto: any) {
    const index = this.productos.indexOf(producto);
    if (index > -1) {
      this.productos.splice(index, 1);
      this.total -= producto.price * producto.cantidad;
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

  constructor() {}
}
