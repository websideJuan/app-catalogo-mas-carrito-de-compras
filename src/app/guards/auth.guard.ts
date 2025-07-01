import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { StorageService } from '../storage.service'

@Injectable({
  providedIn: 'root'  
})

export class AuthGuard implements CanActivate {
  constructor(private router: Router, private storage: StorageService) {}

  async canActivate():  Promise<boolean> {
    const isLoggedIn = await this.getUserData();
    if (isLoggedIn) {
      // User is logged in, allow access
      return true;
    }
    this.router.navigate(['/login']);
    return false
  }

  async getUserData() {
    const userData = await this.storage.getItem('users');
    return userData;
  }
};
