import { Component, OnInit } from '@angular/core';
import {Category} from '../model/Category';
import {CategoryService} from '../services/category.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {

  category: Category = new Category();
  constructor(private categoryService: CategoryService, private router: Router) { }
  ngOnInit() {
  }

  save() {
    this.category.miniature = 'miniature.png';
    this.categoryService.addCategory(this.category).subscribe(
      () => { this.router.navigate(['/categories']); },
      (response) => { alert('erreur ajout categorie'); }
    );
  }

}
