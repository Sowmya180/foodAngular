import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';


@Component({
  selector: 'app-add-recipe',
  standalone: true,
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css'],
  imports: [FormsModule, NgIf]
})
export class AddRecipeComponent {
  recipe = {
    title: '',
    description: '',
    ingredients: '',
    steps: '',
    image: null
  };

  imagePreview: string | ArrayBuffer | null = null;

  onImageSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.recipe.image = file;

      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }

  onSubmit(): void {
    console.log('Recipe submitted:', this.recipe);
  }
}
