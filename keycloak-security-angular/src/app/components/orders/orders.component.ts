import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  public orders: any;
  displayedColumns: string[] = ['id', 'date', 'state', 'productsCount', 'actions'];

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.http.get("http://localhost:8083/api/orders").subscribe({
      next: (orders) => {
        this.orders = orders;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  getOrderDetails(order: any) {
    this.router.navigateByUrl(`/order-details/${order.id}`);
  }
}
