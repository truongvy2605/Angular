import { Component } from '@angular/core';
import { Sneaker } from './models/item/item.model';
import { BuySellService } from './service/buy-sell.service';
import { ItemService } from './services/item.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FirstDemo';
  itemList : Sneaker[]  = [];
  total = 0;
  constructor(private itemService : ItemService, private buySellServic : BuySellService) {
    this.itemList = this.itemService.itemList;
  }
  public addTotal(){
    this.total = this.buySellServic.purchase();
  }
}
