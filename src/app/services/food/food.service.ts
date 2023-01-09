import { Injectable } from '@angular/core';
import { Foods } from 'src/app/sheard/models/food';
import { Tag } from 'src/app/sheard/models/tag';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor() {}

  getFoodById(id: number): Foods {
    return this.getAll().find((food) => food.id == id);
  }

  getAllFoodByTag(tag: string): Foods[] {
    // return tag == 'All'?
    // this.getAll() : this.getAll().filter(food => food.tags?.includes(tag));
    if (tag == 'All') {
      return this.getAll();
    } else {
      return this.getAll().filter((food) => food.tags?.includes(tag));
    }
  }
  getAllTag(): Tag[] {
    return [
      { name: 'All', count: 20 },
      { name: 'FastFood', count: 14 },
      { name: 'Pizza', count: 1 },
      { name: 'Lunch', count: 12 },
      { name: 'SlowFood', count: 2 },
      { name: 'Hamburger', count: 1 },
      { name: 'Fry', count: 5 },
      { name: 'Mozzarella', count: 1 },
      { name: 'LightFood', count: 1 },
      { name: 'Chicken', count: 2 },
    ];
  }
  getAll(): Foods[] {
    return [
      {
        id: 1,
        name: 'Burger',
        cookTime: '10-20',
        price: 60,
        favorites: false,
        origins: ['India', 'Italy'],
        star: 1,
        imageUrl: '/assets/food-1.jpg',
        tags: ['FastFood', 'Burger', 'Lunch'],
      },
      {
        id: 2,
        name: 'Alu Tikki',
        cookTime: '10-15',
        price: 50,
        favorites: true,
        origins: ['India', ' Asia'],
        star: 5,
        imageUrl: '/assets/food-2.jpg',
        tags: ['FastFood', 'Tikki', 'Fry'],
      },
      {
        id: 3,
        name: 'Chiken Figers',
        cookTime: '10-15',
        price: 60,
        favorites: false,
        origins: ['Germany', ' us'],
        star: 3.5,
        imageUrl: '/assets/food-3.jpg',
        tags: ['SlowFood', ' Lunch'],
      },
      {
        id: 4,
        name: 'Pizza',
        cookTime: '15-20',
        price: 40,
        favorites: false,
        origins: ['belgium', ' france'],
        star: 4.5,
        imageUrl: '/assets/food-4.jpg',
        tags: ['FastFood', 'Pizza'],
      },
      {
        id: 5,
        name: 'Homemade Mozzarella',
        cookTime: '10-15',
        price: 50,
        favorites: true,
        origins: ['India', ' Asia'],
        star: 1.5,
        imageUrl: '/assets/food-5.jpg',
        tags: ['Fry', 'Mozzarella', ' Lunch'],
      },
      {
        id: 6,
        name: 'Hamburger',
        cookTime: '40-50',
        price: 9,
        favorites: false,
        origins: ['Italy'],
        star: 4.5,
        imageUrl: '/assets/food-6.jpg',
        tags: ['FastFood', 'Hamburger'],
      },
      {
        id: 7,
        name: 'Chicken Burger',
        cookTime: '10-15',
        price: 50,
        favorites: true,
        origins: ['India', ' Asia'],
        star: 5,
        imageUrl: '/assets/food-7.jpg',
        tags: ['Chicken', 'Burger', 'Lunch'],
      },
      {
        id: 8,
        name: 'Greek Lamb Pita pocket',
        cookTime: '10-20',
        price: 60,
        favorites: false,
        origins: ['Italy', ' India', ' Greek'],
        star: 4.5,
        imageUrl: '/assets/food-8.jpg',
        tags: ['FastFood', 'Greek', 'Lunch'],
      },
      {
        id: 9,
        name: 'French Fries',
        cookTime: '10-15',
        price: 50,
        favorites: true,
        origins: ['India', ' Asia'],
        star: 5,
        imageUrl: '/assets/food-9.jpg',
        tags: ['Fry', 'Lunch', 'Fries'],
      },
      {
        id: 10,
        name: 'Chicken Fingers',
        cookTime: '10-20',
        price: 60,
        favorites: false,
        origins: ['Italy'],
        star: 4.5,
        imageUrl: '/assets/food-10.jpg',
        tags: ['Chicken', 'Lunch'],
      },
      {
        id: 11,
        name: 'Cheesy Dish',
        cookTime: '10-15',
        price: 50,
        favorites: true,
        origins: ['India', ' Asia'],
        star: 3,
        imageUrl: '/assets/food-11.jpg',
        tags: ['FastFood', 'Fry'],
      },
      {
        id: 12,
        name: 'Frites Cheddar/Becon',
        cookTime: '10-20',
        price: 60,
        favorites: false,
        origins: ['Italy'],
        star: 4.5,
        imageUrl: '/assets/food-12.jpg',
        tags: ['FastFood', 'Becon'],
      },
      {
        id: 13,
        name: 'Cheese Fries',
        cookTime: '10-15',
        price: 50,
        favorites: true,
        origins: ['India', ' Asia'],
        star: 5,
        imageUrl: '/assets/food-13.jpg',
        tags: ['FastFood', 'Fry', 'Lunch'],
      },
      {
        id: 14,
        name: 'Mushroom Melt Hot Dogs',
        cookTime: '10-20',
        price: 60,
        favorites: false,
        origins: ['Italy'],
        star: 5,
        imageUrl: '/assets/food-14.jpg',
        tags: ['FastFood', 'Hot Dogs', 'Lunch'],
      },
      {
        id: 15,
        name: 'Samosas',
        cookTime: '10-20',
        price: 5,
        favorites: true,
        origins: ['India', 'Asia'],
        star: 5,
        imageUrl: '/assets/food-15.jpg',
        tags: ['FastFood', 'Samosas', 'Lunch'],
      },
      {
        id: 16,
        name: 'Gyros',
        cookTime: '10-11',
        price: 3,
        favorites: false,
        origins: ['New York'],
        star: 4.5,
        imageUrl: '/assets/food-16.jpg',
        tags: ['FastFood', 'Grayos', 'Lunch'],
      },
      {
        id: 17,
        name: 'Croque Monsieur',
        cookTime: '10-15',
        price: 50,
        favorites: true,
        origins: ['Asia', 'Briten'],
        star: 5,
        imageUrl: '/assets/food-17.jpg',
        tags: ['FastFood', 'Tikki', 'Lunch'],
      },
      {
        id: 18,
        name: 'Cheesy BBQ',
        cookTime: '10-20',
        price: 60,
        favorites: false,
        origins: ['Italy', ' Korea'],
        star: 2,
        imageUrl: '/assets/food-18.jpg',
        tags: ['FastFood', 'SlowFood', 'Lunch'],
      },
      {
        id: 19,
        name: 'Tacos',
        cookTime: '10-15',
        price: 50,
        favorites: true,
        origins: ['India', 'Asia'],
        star: 2,
        imageUrl: '/assets/food-19.jpg',
        tags: ['FastFood', 'Tacose', 'Lunch'],
      },
      {
        id: 20,
        name: 'Bhel puri',
        cookTime: '0-10',
        price: 2,
        favorites: false,
        origins: ['India'],
        star: 4.5,
        imageUrl: '/assets/food-20.jpg',
        tags: ['LightFood'],
      },
    ];
  }
}
