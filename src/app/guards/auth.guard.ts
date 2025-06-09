import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'  
})

export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const isLoggedIn = JSON.parse(sessionStorage.getItem('isLoggedIn') || 'null');
    if (isLoggedIn) {
      // User is logged in, allow access
      return true;
    }
    this.router.navigate(['/login']);
    return false
  }
};
