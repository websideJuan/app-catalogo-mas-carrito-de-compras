import { Component } from '@angular/core';
import {GeolocalitationService} from '../servicios/geolocalitation.service'
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {


  ubicacion: string = '';

  constructor(private golocalitationService: GeolocalitationService) {}

  async ngOnInit() {
    const coords = await this.golocalitationService.getCurrentLocation()
    console.log('Coordenadas obtenidas:', coords);
    console.log('Obteniendo dirección a partir de las coordenadas...');
    console.log('Latitud:', coords?.latitude, 'Longitud:', coords?.longitude);
    
    
    
    if (coords) {
      const address = await this.golocalitationService.getAddressFromCoords(coords?.latitude, coords?.longitude);
      this.ubicacion = address;
    } else {
      console.error('No se pudo obtener la ubicación actual');
    }
  }

}
