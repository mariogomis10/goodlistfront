import { Component, OnInit } from '@angular/core';
import {Category} from '../model/Category';
import {Product} from '../model/Product';
import {ProductService} from '../services/product.service';
import {Router} from '@angular/router';
import {CategoryService} from '../services/category.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  idCategory: number;
  //category: Category = new Category();
  product: Product = new Product();
  categories: Category[];
  constructor(private productService: ProductService, private router: Router, private categoryService: CategoryService) { }

  ngOnInit() {
    this.categoryService.getCategories().subscribe(
      (data: Category[]) => { this.categories = data; },
      (response) => { alert('impossible de charger les categories'); }
    );
  }

  save() {
    this.productService.addService(this.idCategory, this.product).subscribe(
      () => { this.router.navigate(['/products']); },
      (response) => { alert('Add product failed !'); }
    );
  }
}
