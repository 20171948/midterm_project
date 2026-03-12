import { Injectable } from '@angular/core';
import { Product } from '../models/product.interface';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  products: Product[] = [

    {
      id: 1,
      name: 'Laptop',
      category: 'Electronics',
      price: 45000,
      stock: 10,
      status: 'Available',
      description: 'High performance laptop',
      brand: 'Dell',
      rating: 4,
      supplier: 'Tech Supply'
    },

    {
      id: 2,
      name: 'Phone',
      category: 'Electronics',
      price: 20000,
      stock: 15,
      status: 'Available',
      description: 'Android smartphone',
      brand: 'Samsung',
      rating: 5,
      supplier: 'Mobile Hub'
    }

  ];

  getProducts(){
    return this.products;
  }

}