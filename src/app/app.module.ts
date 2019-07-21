import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatListModule,
  MatSidenavModule,
  MatToolbarModule,
  MatGridListModule,
  MatMenuModule,
  MatFormFieldModule,
  MatSelectModule, MatInputModule
} from '@angular/material';
import { MenuHautComponent } from './menu-haut/menu-haut.component';
import { LayoutModule } from '@angular/cdk/layout';
import { CategoryComponent } from './category/category.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProduitComponent } from './produit/produit.component';
import { ProduitsComponent } from './produits/produits.component';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListesComponent } from './listes/listes.component';
import {HttpClientModule} from '@angular/common/http';
import { ListeComponent } from './liste/liste.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddListeComponent } from './add-liste/add-liste.component';
import {FormsModule} from '@angular/forms';
import { AddProductComponent } from './add-product/add-product.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path : '',    component : HomeComponent },
  {path : 'products',   component : ProduitsComponent },
  {path : 'listes',     component : ListesComponent },
  {path : 'addliste',     component : AddListeComponent },
  {path : 'addproduct',     component : AddProductComponent },
  {path : 'addcategory',     component : AddCategoryComponent },
  {path : 'categories', component : CategoriesComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MenuHautComponent,
    CategoryComponent,
    CategoriesComponent,
    ProduitComponent,
    ProduitsComponent,
    HomeComponent,
    ListesComponent,
    ListeComponent,
    DashboardComponent,
    AddListeComponent,
    AddProductComponent,
    AddCategoryComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    LayoutModule,
    RouterModule.forRoot(routes, {useHash: true}),
    MatCardModule,
    HttpClientModule,
    MatGridListModule,
    MatMenuModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
