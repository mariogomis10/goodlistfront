import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from '../model/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get('/api/product');
  }

  addService(idCategory: number, produit: Product) {
    return this.http.post('/api/category/' + idCategory + '/product', produit);
  }
}
