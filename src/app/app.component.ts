import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; 
import { ProductsComponent } from './products/products.component';  

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,  
  imports: [RouterModule, ProductsComponent], 
})
export class AppComponent {
  title = 'midtermProject';
}