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
    { icon: 'home-outline', label: 'Inicio', url: '/home', isFinite: true },
    { icon: 'grid-outline', label: 'Catalogo', url: '/catalogo', isFinite: true },
    { icon: 'person-outline', label: 'Cuenta', url: '/cuenta', isFinite: true },
    { icon: 'heart-outline', label: 'Favorito', url: '/favorite', isFinite: true },
    { icon: 'add-outline', label: 'Más', url: '/mas', isFinite: false },
  ];

  constructor(private Router: Router) { }

  ngOnInit() {}
  
  navigateTo(url: string) {
    this.Router.navigate([url]);
  }
  
}
