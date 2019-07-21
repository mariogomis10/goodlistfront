import {Component, Input, OnInit} from '@angular/core';
import {CategoryService} from '../services/category.service';
import {Category} from '../model/Category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  categories: Category[];
  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.categories = [];
    this.categoryService.getCategories().subscribe(
      (data: Category[]) => { this.categories = data; },
            () => { alert('Erreur(cc1) detected'); }
      );
  }

}
