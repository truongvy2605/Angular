import { Injectable } from '@angular/core';
import { Sneaker } from '../models/item/item.model';

@Injectable({
  providedIn: 'root'
})
export class BuySellService {
  cart: Sneaker[] = []
  total = 0;
  purchase () {
    this.total = 0;
    for(let i = 0;i<this.cart.length;i++){
      this.total += this.cart[i].quantity*this.cart[i].priceSale;
    }
    this.cart=[];
    return this.total;
  }
  constructor() { }
}
