import { Component, Input } from '@angular/core';
import { Recipe } from '../recipes.model';
import { RecipeService } from '../recipes.service';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent {
@Input() recipe:Recipe

constructor(private recipeService: RecipeService) { }

ngOnInit() {
}

onAddToShoppingList() {
  this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
}
}
