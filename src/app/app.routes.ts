import { Routes } from '@angular/router';
import { AddRecipeComponent } from '../recipesApp/add-recipe/add-recipe.component';
import { RecipeDetailComponent } from '../recipesApp/recipe-detail/recipe-detail.component';
import { RecipeListComponent } from '../recipesApp/recipe-list/recipe-list.component';
import { BlogComponent } from '../recipesApp/blog/blog.component';
import { ContactComponent } from '../recipesApp/contact/contact.component';
import { AboutRecipeComponent } from '../recipesApp/about-recipe/about-recipe.component';

export const routes: Routes = [
  { path: '', redirectTo: '/recipesHome', pathMatch: 'full' },
{ path: 'recipesHome', component: RecipeListComponent },
{ path: 'recipes', component: RecipeDetailComponent },
{ path: 'about', component: AboutRecipeComponent },
{ path: 'add', component: AddRecipeComponent },
{ path: 'blog', component: BlogComponent },
{ path: 'contact', component: ContactComponent }
];
