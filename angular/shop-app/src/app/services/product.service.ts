import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {environment} from 'src/environments/environment';
import {Product} from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getAll(id_in?: any[]): Observable<Product[]> {
    return this.http.get<Product[]>(
      `${environment.apiUrl}/product/${id_in ? '?id_in=' + id_in : ''}`
    );
  }

  getById(id: number): Observable<Product> {
    return this.http.get<Product>(`${environment.apiUrl}/product/${id}/`);
  }

  create(product: Product): Observable<Product> {
    return this.http.post<Product>(`${environment.apiUrl}/product/`, product);
  }

  edit(product): Observable<any> {
    return this.http.put(`${environment.apiUrl}/product/${product.id}/`, product);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${environment.apiUrl}/product/${id}/`);
  }
}
