import {
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { createAnimation } from '@ionic/angular';
import { ProductosService } from '../servicios/productos.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.page.html',
  styleUrls: ['./catalogo.page.scss'],
  standalone: false,
})
export class CatalogoPage implements OnInit {
  productos: any[] = [];

  @ViewChildren('productoItem', { read: ElementRef })
  productoItems!: QueryList<ElementRef>;

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

  constructor(
    private router: Router,
    private productService: ProductosService
  ) {}

  async ngOnInit() {
    // Aquí podrías cargar los productos desde un servicio si fuera necesario
    this.productos = await this.productService.getProductos();
  }

  verDetalles(producto: number) {
    this.router.navigate(['/detalle-producto', producto]);
  }
}
