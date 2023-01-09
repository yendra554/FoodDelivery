import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Foods } from '../sheard/models/food';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  foods: Foods[] = [];
  constructor(private fservice: FoodService, private route: ActivatedRoute) {}

  onRate() {}
  ngOnInit() {
    this.route.params.subscribe((params) => {
      if (params['searchItem']) {
        this.foods = this.fservice
          .getAll()
          .filter((food) =>
            food.name.toLowerCase().includes(params['searchItem'].toLowerCase())
          );
      } else if (params['tag']) {

        this.foods = this.fservice.getAllFoodByTag(params['tag']);
      } else {
        this.foods = this.fservice.getAll();
      }
    });
  }
}
