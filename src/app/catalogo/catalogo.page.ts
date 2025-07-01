import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { createAnimation } from '@ionic/angular';
import { ProductosService } from '../servicios/productos.service'; 

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.page.html',
  styleUrls: ['./catalogo.page.scss'],
  standalone: false
})
export class CatalogoPage implements OnInit {
  // productos = [
  //   {
  //     id: 1,
  //     nombre: 'Producto 1',
  //     descripcion: 'Descripción del Producto 1',
  //     precio: 100,
  //     imagen: '/assets/imagenesCatalogo/audifonos_inalambricos.jpg'
  //   },
  //   {
  //     id: 2,
  //     nombre: 'Producto 2',
  //     descripcion: 'Descripción del Producto 2',
  //     precio: 200,
  //     imagen: './assets/imagenesCatalogo/sin-bg-smartwatch.jpg'
  //   },
  //   {
  //     id: 3,
  //     nombre: 'Producto 3',
  //     descripcion: 'Descripción del Producto 3',
  //     precio: 300,
  //     imagen: '/assets/imagenesCatalogo/play-station-5.jpg'
  //   }
  // ];

  productos: any[] = [];

  @ViewChildren('productoItem', { read: ElementRef }) productoItems!: QueryList<ElementRef>;

  ngAfterViewInit() {
  this.animateItems();
} 

animateItems() {
  this.productoItems.forEach((item, index) => {
    const animation = createAnimation()
      .addElement(item.nativeElement)
      .duration(1200)
      .delay(index * 100)
      .fromTo('opacity', '0', '1')
      .fromTo('transform', 'translateY(20px)', 'translateY(0)');

    animation.play();
  });
}


  constructor(private router: Router, private productService: ProductosService) { }

  ngOnInit() {
    // Aquí podrías cargar los productos desde un servicio si fuera necesario
    this.productService.getProductos().subscribe({
      next: (productos) => {
        this.productos = productos;
        console.log('Productos cargados:', this.productos)
      }, error: (error) => {
        console.error('Error al cargar los productos', error)
      }, complete: () => {
        console.log('Carga de productos completada')
      }});
  }

  verDetalles(producto: number) {
    this.router.navigate(['/detalle-producto', producto]);
  }

}
