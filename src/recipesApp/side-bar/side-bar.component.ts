import { NgFor } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [NgFor],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SidebarComponent {
  @Input() categories: any[] = [];
  @Output() categorySelected = new EventEmitter<string>();

  isVisible = false;
  selectedCategory: string = '';

  toggleSidebar() {
    this.isVisible = !this.isVisible;
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
    this.categorySelected.emit(category);
    this.toggleSidebar();
  }
}
