import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Category} from '../model/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  getCategories() {
    return this.http.get('/api/category');
  }

  addCategory(category: Category) {
    return this.http.post('/api/category/create', category);
  }
}
