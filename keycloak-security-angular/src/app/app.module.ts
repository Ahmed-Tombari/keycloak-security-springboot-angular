import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomersComponent } from './components/customers/customers.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ProductsComponent } from './components/products/products.component';
import { BodyComponent } from './ui/body/body.component';
import { SidenavComponent } from './ui/sidenav/sidenav.component';

import { FooterComponent } from './ui/footer/footer.component';
import { NavbarComponent } from './ui/navbar/navbar.component';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http'; 
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
// Angular Material Modules
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';

function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: {
        url: 'http://localhost:8180',
        realm: 'myrealm',
        clientId: 'app-client-angular',
      },
      initOptions: {
        onLoad: 'check-sso',
        silentCheckSsoRedirectUri:
          window.location.origin + '/assets/silent-check-sso.html'
          
      }
    });
}

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    OrderDetailsComponent,
    OrdersComponent,
    ProductsComponent,
    BodyComponent,
    SidenavComponent,
    FooterComponent,
    NavbarComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,
    KeycloakAngularModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
  ],
  providers: [{provide : APP_INITIALIZER, useFactory : initializeKeycloak, multi :true, deps : [KeycloakService]}],
  bootstrap: [AppComponent]
})
export class AppModule { }
