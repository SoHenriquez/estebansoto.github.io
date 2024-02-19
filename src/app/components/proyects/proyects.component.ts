import { Component } from '@angular/core';

import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

interface Products {
  id: string;
  code: string;
  name: string;
  description: string;
  image: string;
  price: number;
  category: string;
  quantity: number;
  inventoryStatus: string;
  rating: number;
}

@Component({
  selector: 'app-proyects',
  standalone: true,
  imports: [CardModule, CarouselModule, ButtonModule, RippleModule],
  templateUrl: './proyects.component.html',
  styleUrl: './proyects.component.scss'
})
export class ProyectsComponent {
  products: Products[] | any;
  constructor () {
    this.products = [
      {
        "id": "1000",
        "code": "f230fh0g3",
        "name": "Bamboo Watch",
        "description": "Product Description",
        "image": "bamboo-watch.jpg",
        "price": 65,
        "category": "Accessories",
        "quantity": 24,
        "inventoryStatus": "INSTOCK",
        "rating": 5
      },
      {
        "id": "2000",
        "code": "j43k29f0d",
        "name": "UltraMax Pro",
        "description": "The latest flagship smartphone with revolutionary camera technology and lightning-fast performance.",
        "image": "ultramax_pro.jpg",
        "price": 899,
        "category": "Electronics",
        "quantity": 100,
        "inventoryStatus": "INSTOCK",
        "rating": 4.7
      },
      {
        "id": "3000",
        "code": "g2h103p9q",
        "name": "Noise Cancelling Headphones",
        "description": "Immerse yourself in your music with active noise cancellation and superior sound quality.",
        "image": "noise_cancelling_headphones.jpg",
        "price": 149,
        "category": "Electronics",
        "quantity": 50,
        "inventoryStatus": "LOWSTOCK",
        "rating": 4.8
      }]
  }
}
