import { Recipe } from './../recipe.model';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('This is Recipe', 'this is recipe test', 'http://diylogodesigns.com/blog/wp-content/uploads/2016/05/Pizza-Hut-Logo-PNG-Transparent-Background.png'),
    new Recipe('Another Recipe', 'this is recipe test', 'http://diylogodesigns.com/blog/wp-content/uploads/2016/05/Pizza-Hut-Logo-PNG-Transparent-Background.png')
  ];
  @Output() recipeSelected = new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit() {
  }

  onClickedRecipeList(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }

}
