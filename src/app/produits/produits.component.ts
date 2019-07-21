import { Component, OnInit } from '@angular/core';
import {Product} from '../model/Product';
import {ProductService} from '../services/product.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.scss']
})
export class ProduitsComponent implements OnInit {

  products: Product[];
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.products = [];
    this.productService.getProducts().subscribe(
      (data: Product[]) => { this.products = data; },
      () => { alert('erreur pc1'); }
    );
  }

}
