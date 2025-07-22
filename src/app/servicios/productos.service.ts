import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StorageService } from '../storage.service';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  private apiUrl = 'https://fakestoreapi.com/products';
  productos: any[] = [];

  constructor(private http: HttpClient, private storage: StorageService) {}

  async getProductos(): Promise<any[]> {
    let data = this.http.get<any>(this.apiUrl);
    let dataStorage = await this.storage.getItem('productos');

    if (!data) {
      console.error('Failed to fetch products from API');
      return [];
    }

    // Store the fetched data in local storage
    if (!dataStorage) {
      data.subscribe((productos) => {
        this.storage
          .createDatabase('productos', productos)
          .then(() => {
            this.productos = productos;
          })
          .catch((error) => {
            console.error('Error creating database:', error);
          });
      });
    } else {
      this.productos = dataStorage;
    }
    return this.productos;
  }

  getProductoById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
}
