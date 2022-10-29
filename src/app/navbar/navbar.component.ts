import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Sneaker } from '../models/item/item.model';
import { BuySellService } from '../service/buy-sell.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  public date = Date.now();
  public number = 1000000;
  public classStyle = 'hello';
  @Input() item !: Sneaker;
  @Output() itemChange = new EventEmitter();
 
  constructor() {
  }

  ngOnInit(): void {}
  cong(){
    if(this.item.quantity<this.item.stock)
    this.item.quantity++;
    this.itemChange.emit(this.item);
  }
  tru(){
    if(this.item.quantity<=0){
      return;
    }
    this.item.quantity--;
    this.itemChange.emit(this.item);
  }
}
