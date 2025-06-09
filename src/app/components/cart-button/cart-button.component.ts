import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CarritoService } from 'src/app/servicios/carrito.service';

@Component({
  selector: 'app-cart-button',
  templateUrl: './cart-button.component.html',
  styleUrls: ['./cart-button.component.scss'],
  standalone: false
})
export class CartButtonComponent  implements OnInit {
  itemsOfCart: number = 0;

  constructor(private carritoServices: CarritoService, private router: Router) { }

  ngOnInit() {
    // Subscribe to the cart items count
    console.log(this.itemsOfCart = this.carritoServices.obtenerCantidad());
  }


  navegarACarrito() {
    // Navigate to the cart page
    this.router.navigate(['/carrito-compras']);
  }

}
