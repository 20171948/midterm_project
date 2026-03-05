import { Component } from '@angular/core';
import { Product } from './models/product.interface';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  showModal = false;

  selectedProduct: Product | null = null;

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
      rating: 4.5,
      supplier: 'Tech Supplier'
    },
    {
      id: 2,
      name: 'Smartphone',
      category: 'Electronics',
      price: 20000,
      stock: 5,
      status: 'Limited',
      description: 'Latest Android smartphone',
      brand: 'Samsung',
      rating: 4.3,
      supplier: 'Mobile Supplier'
    },
    {
      id: 3,
      name: 'Keyboard',
      category: 'Accessories',
      price: 1200,
      stock: 0,
      status: 'Out of Stock',
      description: 'Mechanical keyboard',
      brand: 'Logitech',
      rating: 4.2,
      supplier: 'Accessory Hub'
    },
    {
      id: 4,
      name: 'Mouse',
      category: 'Accessories',
      price: 800,
      stock: 20,
      status: 'Available',
      description: 'Wireless mouse',
      brand: 'HP',
      rating: 4.1,
      supplier: 'Accessory Hub'
    },
    {
      id: 5,
      name: 'Monitor',
      category: 'Electronics',
      price: 9000,
      stock: 6,
      status: 'Available',
      description: '24 inch LED monitor',
      brand: 'LG',
      rating: 4.4,
      supplier: 'Display Supplier'
    },
    {
      id: 6,
      name: 'Headset',
      category: 'Audio',
      price: 1500,
      stock: 12,
      status: 'Available',
      description: 'Noise cancelling headset',
      brand: 'Sony',
      rating: 4.3,
      supplier: 'Audio Supplier'
    },
    {
      id: 7,
      name: 'Webcam',
      category: 'Accessories',
      price: 2000,
      stock: 3,
      status: 'Limited',
      description: 'HD webcam',
      brand: 'Logitech',
      rating: 4.2,
      supplier: 'Camera Supplier'
    },
    {
      id: 8,
      name: 'Printer',
      category: 'Office',
      price: 6500,
      stock: 4,
      status: 'Available',
      description: 'All in one printer',
      brand: 'Canon',
      rating: 4.0,
      supplier: 'Office Supplier'
    },
    {
      id: 9,
      name: 'Tablet',
      category: 'Electronics',
      price: 18000,
      stock: 7,
      status: 'Available',
      description: '10 inch tablet',
      brand: 'Huawei',
      rating: 4.1,
      supplier: 'Mobile Supplier'
    },
    {
      id: 10,
      name: 'Speaker',
      category: 'Audio',
      price: 2200,
      stock: 0,
      status: 'Out of Stock',
      description: 'Bluetooth speaker',
      brand: 'JBL',
      rating: 4.4,
      supplier: 'Audio Supplier'
    }
  ];

  viewProductDetails(product: Product) {
    this.selectedProduct = product;
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }
}