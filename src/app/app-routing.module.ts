import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuListComponent } from './menu/menu-list/menu-list.component';
import { CartListComponent }  from './cart/cart-list/cart-list.component';
import { FinalOrderDetailsComponent } from './final-order-details/final-order-details.component';
import { OrderConfirmationComponent } from './order-confirmation/order-confirmation.component';
const routes: Routes = [
  { path: '', component: MenuListComponent },
  { path: 'menu-list', component: MenuListComponent },
  { path: 'cart-list', component: CartListComponent },
  { path: 'final-order', component: FinalOrderDetailsComponent },
  { path: 'order-complete', component: OrderConfirmationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
