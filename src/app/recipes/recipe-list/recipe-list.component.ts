import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeDetails = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      'Mexican pizza',
      'Spicy mexican pizza',
      'https://cdn.pixabay.com/photo/2019/07/06/09/06/pizza-4320003_960_720.jpg'
    ),
    new Recipe(
      'Brazilian barbecue',
      'Brazilian style steak',
      'https://cdn.pixabay.com/photo/2019/07/31/06/49/meet-4374466_960_720.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}

  handleRecipeClick(recipe: Recipe) {
    this.recipeDetails.emit(recipe);
  }
}
