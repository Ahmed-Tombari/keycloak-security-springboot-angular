import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { OrdersComponent } from './components/orders/orders.component';
import { CustomersComponent } from './components/customers/customers.component';
import { ProductsComponent } from './components/products/products.component';
import { DashboardComponent } from './ui/dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path : "dashboard", component : ProductsComponent, canActivate : [AuthGuard]},
  {path : "products", component : ProductsComponent, canActivate : [AuthGuard], data : {roles :['ADMIN']}},
  {path : "customers", component : CustomersComponent, canActivate : [AuthGuard], data : {roles : ['USER']}},
  {path : "orders", component : OrdersComponent, canActivate : [AuthGuard], data : {roles : ['USER']}},
  {path : "order-details/:id", component : OrderDetailsComponent, canActivate : [AuthGuard], data : {roles : ['USER']}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
