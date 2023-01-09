import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { FoodService } from '../services/food/food.service';
import { Foods } from '../sheard/models/food';

@Component({
  selector: 'app-food-pages',
  templateUrl: './food-pages.component.html',
  styleUrls: ['./food-pages.component.css'],
})
export class FoodPagesComponent implements OnInit {
  food!: Foods;
  constructor(
    private activatedRoute: ActivatedRoute,
    private foodService: FoodService,
    private cartService: CartService,
    private router: Router
  ) {
    activatedRoute.params.subscribe((params) => {
      if (params['id']) this.food = foodService.getFoodById(params['id']);
    });
  }

  ngOnInit(): void {}
  addToCart() {
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page');
  }
}
