import { Injectable } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';

@Injectable({
  providedIn: 'root',
})
export class GeolocalitationService {
  constructor() {}

  async getCurrentLocation() {
    try {
      const { coords } = await Geolocation.getCurrentPosition();
      return coords;
    } catch (error) {
      console.error('Error getting location', error);
      return null;
    }
  }

  async getAddressFromCoords(lat: number, lon: number): Promise<string> {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`
      );
      const data = await response.json();
      console.log('Address data:', data);
      
      return `${data.address.neighbourhood || ''} ${data.address.house_number || ''}, ${data.address.suburb || ''}`.trim() || 'ubicación';
    } catch (error) {
      console.error('Error fetching address:', error);
      return 'ubicación';
    }
  }
}
