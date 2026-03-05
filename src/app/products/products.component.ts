import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Import CommonModule

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class ProductsComponent {
  products = [
    { id: 1, name: 'Laptop', category: 'Electronics', price: 50000, stock: 10, status: 'Available', description: 'A high-performance laptop with a sleek design.', brand: 'TechBrand', rating: 4.5, supplier: 'TechSupplier' },
    { id: 2, name: 'Smartphone', category: 'Electronics', price: 25000, stock: 5, status: 'Limited Stock', description: 'A powerful smartphone with a sleek design.', brand: 'TechBrand', rating: 4.2, supplier: 'TechSupplier' },
    { id: 3, name: 'Tablet', category: 'Electronics', price: 18000, stock: 0, status: 'Out of Stock', description: 'A high-performance tablet with a sleek design.', brand: 'TechBrand', rating: 4.5, supplier: 'TechSupplier' },
   
  ];

  selectedProduct: any = null;
  showModal: boolean = false; 

  viewProductDetails(product: any) {
    this.selectedProduct = product;
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }
}