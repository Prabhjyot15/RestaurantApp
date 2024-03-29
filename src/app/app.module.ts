import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { MenuItemComponent } from './menu/menu-item/menu-item.component';
import { MenuListComponent } from './menu/menu-list/menu-list.component';
import { CartItemComponent } from './cart/cart-item/cart-item.component';
import { CartListComponent } from './cart/cart-list/cart-list.component';
import { CommonModule } from "@angular/common";
import { FinalOrderDetailsComponent } from './final-order-details/final-order-details.component';
import { OrderConfirmationComponent } from './order-confirmation/order-confirmation.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuItemComponent,
    MenuListComponent,
    CartItemComponent,
    CartListComponent,
    FinalOrderDetailsComponent,
    OrderConfirmationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
