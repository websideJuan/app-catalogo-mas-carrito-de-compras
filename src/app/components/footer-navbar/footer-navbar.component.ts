import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer-navbar',
  templateUrl: './footer-navbar.component.html',
  styleUrls: ['./footer-navbar.component.scss'],
  standalone: false,
})
export class FooterNavbarComponent  implements OnInit {
  nabarItems = [
    { icon: 'home-outline', label: 'Inicio', url: '/home' },
    { icon: 'grid-outline', label: 'Catalogo', url: '/catalogo' },
    { icon: 'person-outline', label: 'Cuenta', url: '/mi-cuenta' },
    { icon: 'heart-outline', label: 'Favorito', url: '/favoritos' },
    { icon: 'add-outline', label: 'Más', url: '/mas' }
  ];

  constructor(private Router: Router) { }

  ngOnInit() {}
  
  navigateTo(url: string) {
    this.Router.navigate([url]);
  }
  
}
