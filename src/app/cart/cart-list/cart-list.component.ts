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
  reduceQuantity(cartItem){
    this.cartList.forEach(item=>{
      if(item.itemName == cartItem.itemName){
        if(item.itemQuantity == 1){
          let index = this.cartList.findIndex(obj => obj.itemName== cartItem.itemName);
          this.cartList.splice(index,1);
        }else{
          item.itemQuantity = item.itemQuantity-1;
        }        
      }
    });

    this.dataStateService.cartItems.next(this.cartList);
  }

  addQuantity(cartItem){
    this.cartList.forEach(item=>{
      if(item.itemName == cartItem.itemName){
        item.itemQuantity = item.itemQuantity+1;
      }
    });

    this.dataStateService.cartItems.next(this.cartList);
  }

  deleteItem(item){
    console.log(item)
   let index = this.cartList.findIndex(obj => obj.itemName== item.itemName);
   this.cartList.splice(index,1);
   this.dataStateService.cartItems.next(this.cartList);
  }
}
