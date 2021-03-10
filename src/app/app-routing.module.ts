import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuListComponent } from './menu/menu-list/menu-list.component';
import { CartListComponent }  from './cart/cart-list/cart-list.component';
const routes: Routes = [
  { path: 'menu-list', component: MenuListComponent },
  { path: 'cart-list', component: CartListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
