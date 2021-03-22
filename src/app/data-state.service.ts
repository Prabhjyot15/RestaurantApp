import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from './model/cart-item.model';

@Injectable({
  providedIn: 'root'
})
export class DataStateService {
public cartItems : BehaviorSubject<CartItem[]> = new BehaviorSubject<CartItem[]>([]);
  constructor() { }
}
