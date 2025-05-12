import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RecipeService } from '../../services/recipe.service';
import { RecipeModalComponent } from '../recipe-modal/recipe-modal.component';

@Component({
  selector: 'app-recipe-detail',
  standalone: true,
  imports: [CommonModule, FormsModule,RecipeModalComponent],
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css',
})
export class RecipeDetailComponent {
  searchTerm = '';
  filteredRecipes: any[] = [];
  selectedRecipe: any = null;

  constructor(private recipeService: RecipeService) {}

  onSearch() {
    const term = this.searchTerm.trim().toLowerCase();
    if (!term) {
      this.filteredRecipes = [];
      return;
    }

    if (term.length === 1) {
      this.recipeService.searchByFirstLetter(term).subscribe((res) => {
        this.filteredRecipes = res.meals || [];
      });
    } else {
      this.recipeService.searchByName(term).subscribe((res) => {
        this.filteredRecipes = res.meals || [];
      });
    }
  }

  showRecipeDetails(id: string) {
    this.recipeService.getRecipeDetails(id).subscribe((res) => {
      this.selectedRecipe = res.meals[0];
    });
  }

  closeModal() {
    this.selectedRecipe = null;
  }
}
