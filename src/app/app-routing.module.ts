import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipesDetailComponent } from './recipes/recipes-detail/recipes-detail.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const approutes: Routes = [
  {path: '',redirectTo: '/recipes', pathMatch:'full'},
  {path: 'recipes',component: RecipesComponent, children:[
   {path: '',component:RecipeStartComponent},
   {path:':id',component:RecipesDetailComponent}
  ]},
  {path: 'shopping-list',component: ShoppingListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(approutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
