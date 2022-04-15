import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Mexican pizza',
      'Spicy mexican pizza',
      'https://cdn.pixabay.com/photo/2019/07/06/09/06/pizza-4320003_960_720.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
