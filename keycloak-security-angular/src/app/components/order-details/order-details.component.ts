import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {
  orderId: string;
  orderDetails: any;
  displayedColumns: string[] = ['id', 'productName', 'price', 'quantity', 'amount'];

  constructor(private route: ActivatedRoute, private http: HttpClient) {
    this.orderId = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    this.http.get("http://localhost:8083/api/orders/" + this.orderId).subscribe({
      next: order => {
        this.orderDetails = order;
      },
      error: err => {
        console.log(err);
      }
    });
  }

  getTotal(orderDetails: any) {
    let total: number = 0;
    for (let pi of orderDetails.productItems) {
      total += pi.price * pi.quantity;
    }
    return total;
  }
}
