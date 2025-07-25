import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarritoService } from '../servicios/carrito.service';
import { createAnimation } from '@ionic/angular';
import { ProductosService } from '../servicios/productos.service';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.page.html',
  styleUrls: ['./detalle-producto.page.scss'],
  standalone: false,
})
export class DetalleProductoPage implements OnInit {
  productos: any[] = [];

  producto: any | null = null;

  @ViewChild('btnAgregar', { read: ElementRef }) btnAgregar!: ElementRef;

  constructor(
    private routeActive: ActivatedRoute,
    private carritoService: CarritoService,
    private router: Router,
    private productosService: ProductosService
  ) {}

  async ngOnInit() {
    // Cargar los productos desde el servicio
    this.productos = await this.productosService.getProductos();
    const id = this.routeActive.snapshot.paramMap.get('id');
    if (id) {
      this.producto = this.productos.find((p) => p.id === parseInt(id, 10));
    }
    if (!this.producto) {
      console.error('Producto no encontrado');
      this.router.navigate(['/catalogo']);
    }

  }

  irAlCarrito() {
    // Aquí podrías navegar al carrito de compras si es necesario
    console.log('Navegando al carrito de compras');
    this.router.navigate(['/carrito-compras']);
  }

  agregarAlCarrito() {
    const animation = createAnimation()
      .addElement(this.btnAgregar.nativeElement)
      .duration(500)
      .iterations(1)
      .keyframes([
        { offset: 0, transform: 'scale(1)', opacity: 1 },
        { offset: 0.5, transform: 'scale(1.2)', opacity: 0.5 },
        { offset: 1, transform: 'scale(1)', opacity: 1 },
      ]);
    animation.play();

    if (this.producto) {
      this.producto.cantidad = 1;
      this.carritoService.agregarProducto(this.producto);
      console.log('Producto agregado al carrito:', this.producto);
    } else {
      console.error('Producto no encontrado');
    }
  }
}
