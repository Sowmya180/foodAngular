import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, NgFor, NgIf } from '@angular/common';
import { RecipeService } from '../../services/recipe.service';
import { SidebarComponent } from '../side-bar/side-bar.component';
import { RecipeModalComponent } from '../recipe-modal/recipe-modal.component';

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [RecipeModalComponent, NgFor, SidebarComponent, NgIf],
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: any[] = [];
  filteredRecipes: any[] = [];
  randomMeals: any[] = [];
  categories: any[] = [];
  selectedRecipe: any = null;

  private isBrowser: boolean;

  constructor(
    private recipeService: RecipeService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId); // store once
  }

  filterByCategory(category: string) {
    this.filteredRecipes = this.recipes.filter(recipe => recipe.strCategory === category);
  }

  showRecipeDetails(recipeId: string) {
    this.recipeService.getRecipeDetails(recipeId).subscribe(response => {
      this.selectedRecipe = response.meals[0];

      // Lock scroll when modal opens
      if (this.isBrowser) {
        document.body.style.overflow = 'hidden';
      }
    });
  }

  closeModal() {
    this.selectedRecipe = null;

    // Unlock scroll when modal closes
    if (this.isBrowser) {
      document.body.style.overflow = '';
    }
  }

  ngOnInit(): void {
    this.recipeService.getCategories().subscribe((response) => {
      this.categories = response.categories;
      this.recipes = [];

      this.categories.forEach((category) => {
        this.recipeService.getMealsByCategory(category.strCategory).subscribe((res) => {
          const meals = res.meals;
          const randomMeal = meals[Math.floor(Math.random() * meals.length)];
          this.randomMeals.push({
            category: category.strCategory,
            meal: randomMeal
          });
        });
      });
    });

    this.recipeService.getAllRecipes().subscribe((response) => {
      this.recipes = response.meals;
      this.filteredRecipes = this.recipes;
    });
  }
}
