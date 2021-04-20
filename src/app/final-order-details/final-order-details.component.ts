import { Component, OnInit } from '@angular/core';
import { DataStateService } from '../data-state.service';
import { CartItem } from '../model/cart-item.model';

@Component({
  selector: 'app-final-order-details',
  templateUrl: './final-order-details.component.html',
  styleUrls: ['./final-order-details.component.css']
})
export class FinalOrderDetailsComponent implements OnInit {
  cartList : CartItem[];
  totalPrice : number = 0;
  constructor(private dataStateService: DataStateService) { }

  ngOnInit(): void {
    this.dataStateService.cartItems.subscribe(response=>{
    this.cartList = response;
    this.cartList.forEach(item=>{
      this.totalPrice = this.totalPrice + (item.itemPrice * item.itemQuantity);
    });
    console.log(this.totalPrice)
  });


    }

}
