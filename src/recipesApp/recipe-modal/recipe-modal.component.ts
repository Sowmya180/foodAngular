import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common'; // ✅ Import CommonModule

@Component({
  selector: 'app-recipe-modal',
  standalone: true,
  imports: [CommonModule], // ✅ Use CommonModule to enable all built-in pipes
  templateUrl: './recipe-modal.component.html',
  styleUrl: './recipe-modal.component.css'
})
export class RecipeModalComponent implements OnChanges {
  @Input() recipe: any;
  @Output() closeModal = new EventEmitter<void>();

  steps: string[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['recipe'] && this.recipe?.strInstructions) {
      const raw = this.recipe.strInstructions;
  
      // Check if the instructions already have steps like "STEP 1", "Step 2", etc.
      const hasManualSteps = /step\s?\d+/i.test(raw);
  
      if (hasManualSteps) {
        // If steps are already labeled, split by "Step" with number
        this.steps = raw
          .split(/step\s?\d+[:\s\-]*/i)
          .map((step: string) => step.trim())
          .filter((step: string | any[]) => step.length > 0);
      } else {
        // Otherwise, fallback to splitting by punctuation/new lines
        this.steps = raw
          .split(/[\r\n\.]+/)
          .map((step: string) => step.trim())
          .filter((step: string | any[]) => step.length > 0);
      }
    }
  }
  

  close() {
    this.closeModal.emit();
  }
}
