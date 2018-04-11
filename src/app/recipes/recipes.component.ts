import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit { constructor() { }
  recipeDetail: String;
  recipeSelected: Recipe;
  ngOnInit() {
  }

  onClickedRecipeItem(data: string) {
    this.recipeDetail = data;
  }



}
