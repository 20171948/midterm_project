import { Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { AppComponent } from './app.component'; 
import { ViewDetailsComponent } from './view-details/view-details.component';

export const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'products', component: ProductsComponent },
  {path: 'view-details', component: AppComponent}
];