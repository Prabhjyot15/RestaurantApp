import { Component, Input, OnInit } from '@angular/core';
import { CartItem } from 'src/app/model/cart-item.model';
import { MenuItem } from 'src/app/model/menu-item.model';
import { DataStateService } from '../../data-state.service';
@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {
@Input() item: MenuItem;
cartItemsArray: CartItem[]=[];
  constructor(private dataStateService: DataStateService ) { }

  ngOnInit(): void {
    this.dataStateService.cartItems.subscribe(response=>{
      this.cartItemsArray = response;
    });
  }

  addToCart(item){
    let flag = false;
    if(this.cartItemsArray){
      this.cartItemsArray.forEach(cartitem=>{
      if(cartitem.itemName.localeCompare(this.item.name)==0){
        flag = true;
        cartitem.itemQuantity = cartitem.itemQuantity+1;
        }
      }); 
    }

    if(flag==false){
      this.cartItemsArray.push({itemName:this.item.name, itemPrice: this.item.price, itemQuantity:1});
    }
  }

}
