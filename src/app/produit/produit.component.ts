import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../model/Product';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.scss']
})
export class ProduitComponent implements OnInit {

  @Input() product: Product;
  constructor() { }

  ngOnInit() {
  }

}
