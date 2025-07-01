import { Component, OnInit } from '@angular/core';
import {StorageService} from '../storage.service'

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.page.html',
  styleUrls: ['./cuenta.page.scss'],
  standalone: false
})
export class CuentaPage implements OnInit {

  usuario: string = '';
  constructor(private storageService: StorageService) { }

  ngOnInit() {
    this.obtenerUsuario();
  }

  async obtenerUsuario() {
    try {
      const usuario = await this.storageService.getItem('users');
      console.log('Usuario obtenido:', usuario);
      
      if (usuario) {
        this.usuario = usuario.username;
      } else {
        console.log('No se encontró el usuario en el almacenamiento');
      }
    } catch (error) {
      console.error('Error al obtener el usuario:', error);
    }
  }

  async logout() {
    try {
      await this.storageService.removeItem('users');
      console.log('Sesión cerrada correctamente');
      this.usuario = '';
      // Aquí podrías redirigir al usuario a la página de inicio o login
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  }

}
