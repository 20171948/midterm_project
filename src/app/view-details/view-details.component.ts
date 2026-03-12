import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html'
})
export class ViewDetailsComponent implements OnInit {

  productName: string = "";   // <-- add this

  price: number = 0;
  description: string = "";
  category: string = "";
  stock: number = 0;
  status: string = "";
  brand: string = "";
  rating: number = 0;
  supplier: string = "";

  constructor() {}

  ngOnInit(): void {}

}