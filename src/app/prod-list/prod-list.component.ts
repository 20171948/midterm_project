import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product.interface';

@Component({
  selector: 'app-prod-list',
  templateUrl: './prod-list.component.html'
})

export class ProdListComponent {

  products: Product[] = [];

  constructor(private productService: ProductService){
    this.products = this.productService.getProducts();
  }

}