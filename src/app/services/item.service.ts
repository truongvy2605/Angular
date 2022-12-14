import { Injectable } from '@angular/core';
import { Sneaker } from '../models/item/item.model';
@Injectable({
  providedIn: 'root',
})
export class ItemService {
  itemList: Sneaker[] = [
    {
      name: 'jodan',
      size: 42,
      priceOrigin: 3600000,
      priceSale: 3000000,
      description: 'Sieu ben sieu deo',
      stock: 10,
      quantity: 0,
      URL: 'https://image.goat.com/attachments/product_template_pictures/images/078/713/580/original/946189_00.png.png',
    },
    {
      name: 'Nike',
      size: 40,
      priceOrigin: 5000000,
      priceSale: 2500000,
      description: 'Giay chay bo',
      stock: 15,
      quantity: 0,
      URL: 'https://www.dropbox.com/s/e928cht0h5crcn4/shoe.png?raw=1',
    },
    {
      name: 'Nike-Air',
      size: 39,
      priceOrigin: 2500000,
      priceSale: 1900000,
      description: 'Giay chay nhanh',
      stock: 0,
      quantity: 0,
      URL: 'https://static.nike.com/a/images/t_default/c133276d-9a7b-4b4e-a6b5-117f097d8d41/air-jordan-3-retro-mens-shoes-bPRc5V.png',
    },
    {
      name: 'converse',
      size: 38,
      priceOrigin: 1500000,
      priceSale: 900000,
      description: 'Giay di choi',
      stock: 20,
      quantity: 0,
      URL: 'https://static.nike.com/a/images/t_default/c133276d-9a7b-4b4e-a6b5-117f097d8d41/air-jordan-3-retro-mens-shoes-bPRc5V.png',
    },
  ]
  constructor() {}
}
