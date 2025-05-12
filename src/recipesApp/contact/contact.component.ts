import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,  
  imports: [FormsModule],  
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  title: string = '';
  description: string = '';
  ingredients: string = '';
  instructions: string = '';
  
  constructor() {}

  async submitRecipe() {
    const formData = new FormData();
    formData.append('title', this.title);
    formData.append('description', this.description);
    formData.append('ingredients', this.ingredients);
    formData.append('instructions', this.instructions);
    formData.append("access_key", "9a8ae3aa-56f6-42b7-ba96-9aaab859a701");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        alert('Recipe submitted successfully!');
        this.title = '';
        this.description = '';
        this.ingredients = '';
        this.instructions = '';
      } else {
        alert('Error submitting recipe, please try again later.');
      }
    } catch (error) {
      alert('Error submitting recipe, please try again later.');
      console.error('Error:', error);
    }
  }
}
