import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
  public products: any[] = []; // Should be an array
  displayedColumns: string[] = ['id', 'name', 'price', 'quantity']; // Define columns

  constructor(private http : HttpClient) {
  }
  ngOnInit() {
    this.http.get<any[]>("http://localhost:8082/api/products").subscribe({
      next: (data) => {
        this.products = data; // Assign the data to the products array
        console.log(this.products);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}