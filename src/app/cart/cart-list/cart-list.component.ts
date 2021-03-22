import { Component, OnInit } from '@angular/core';
import { DataStateService } from 'src/app/data-state.service';
import { CartItem } from 'src/app/model/cart-item.model';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
cartList : CartItem[] = []
  constructor(private dataStateService: DataStateService) { }

  ngOnInit(): void {
  this.dataStateService.cartItems.subscribe(response=>{
  this.cartList = response;
  console.log( this.cartList )
});
  }

}
