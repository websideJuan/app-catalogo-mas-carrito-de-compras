import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarritoService } from '../servicios/carrito.service'; 
import { createAnimation } from '@ionic/angular';
import { CartButtonComponent } from '../components/cart-button/cart-button.component';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.page.html',
  styleUrls: ['./detalle-producto.page.scss'],
  standalone: false
})
export class DetalleProductoPage implements OnInit {
  producto: any;

  productos = [
    {
      id: 1,
      nombre: 'Producto 1',
      descripcion: 'Descripción del Producto 1',
      precio: 100,
      imagen: '/assets/imagenesCatalogo/audifonos_inalambricos.jpg'
    },
    {
      id: 2,
      nombre: 'Producto 2',
      descripcion: 'Descripción del Producto 2',
      precio: 200,
      imagen: './assets/imagenesCatalogo/sin-bg-smartwatch.jpg'
    },
    {
      id: 3,
      nombre: 'Producto 3',
      descripcion: 'Descripción del Producto 3',
      precio: 300,
      imagen: '/assets/imagenesCatalogo/play-station-5.jpg'
    }
  ];

  @ViewChild('btnAgregar', { read: ElementRef }) btnAgregar!: ElementRef;



  constructor(private router: ActivatedRoute, private carritoService: CarritoService, private roter: Router) { }

  ngOnInit() {
    const id = this.router.snapshot.paramMap.get('id');
    if (id) {
      this.producto = this.productos.find(p => p.id === parseInt(id, 10));
    } else {
      this.producto = null;
    }
  }

  irAlCarrito() {
    // Aquí podrías navegar al carrito de compras si es necesario
    console.log('Navegando al carrito de compras');
    this.roter.navigate(['/carrito-compras']);
  }


  agregarAlCarrito() {
    const animation = createAnimation()
      .addElement(this.btnAgregar.nativeElement)
      .duration(500)
      .iterations(1)
      .keyframes([
        { offset: 0, transform: 'scale(1)', opacity: 1 },
        { offset: 0.5, transform: 'scale(1.2)', opacity: 0.5 },
        { offset: 1, transform: 'scale(1)', opacity: 1 }
      ]);
    animation.play();

    if (this.producto) {
      this.carritoService.agregarProducto(this.producto);
      console.log('Producto agregado al carrito:', this.producto);
    } else {
      console.error('Producto no encontrado');
    }
  }

}
