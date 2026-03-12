import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../models/product.interface';  
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  standalone: true,
  imports: [CommonModule, RouterOutlet],
})
export class ProductsComponent {
  products = [
    { id: 1, name: 'Laptop', category: 'Electronics', price: 50000, stock: 10, status: 'Available', description: 'A high-performance laptop with a sleek design.', brand: 'TechBrand', rating: 4.5, supplier: 'TechSupplier' },
    { id: 2, name: 'Smartphone', category: 'Electronics', price: 25000, stock: 5, status: 'Limited Stock', description: 'A powerful smartphone with a sleek design.', brand: 'TechBrand', rating: 4.2, supplier: 'TechSupplier' },
    { id: 3, name: 'Tablet', category: 'Electronics', price: 18000, stock: 0, status: 'Out of Stock', description: 'A high-performance tablet with a sleek design.', brand: 'TechBrand', rating: 4.5, supplier: 'TechSupplier' },
    { id: 4, name: 'Headphones', category: 'Accessories', price: 5000, stock: 20, status: 'Available', description: 'Noise-cancelling headphones with superior sound quality.', brand: 'SoundBrand', rating: 4.8, supplier: 'SoundSupplier' },
    { id: 5, name: 'Smartwatch', category: 'Wearables', price: 15000, stock: 8, status: 'Available', description: 'A stylish smartwatch with health tracking features.', brand: 'WearBrand', rating: 4.3, supplier: 'WearSupplier' },
    { id: 6, name: 'Camera', category: 'Photography', price: 30000, stock: 3, status: 'Limited Stock', description: 'A high-resolution camera with advanced features.', brand: 'PhotoBrand', rating: 4.6, supplier: 'PhotoSupplier' },
    { id: 7, name: 'Gaming Console', category: 'Gaming', price: 40000, stock: 12, status: 'Available', description: 'A powerful gaming console with immersive graphics.', brand: 'GameBrand', rating: 4.7, supplier: 'GameSupplier' },
    { id: 8, name: 'Bluetooth Speaker', category: 'Audio', price: 8000, stock: 15, status: 'Available', description: 'A portable Bluetooth speaker with excellent sound quality.', brand: 'SoundBrand', rating: 4.4, supplier: 'SoundSupplier' },
    { id: 9, name: 'External Hard Drive', category: 'Storage', price: 6000, stock: 25, status: 'Available', description: 'A high-capacity external hard drive for data storage.', brand: 'StorageBrand', rating: 4.1, supplier: 'StorageSupplier' },
    { id: 10, name: 'Wireless Mouse', category: 'Accessories', price: 2000, stock: 30, status: 'Available', description: 'A wireless mouse with ergonomic design.', brand: 'TechBrand', rating: 4.0, supplier: 'TechSupplier' }
  ];

  selectedProduct: Product | null = null;
  showModal: boolean = false; 


  closeModal() {
    this.showModal = false;
  }

   viewProductDetails(product: Product): void {
    this.selectedProduct = product;
    this.showModal = true;
  }
}