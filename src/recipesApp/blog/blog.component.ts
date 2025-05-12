import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-blog',
  imports: [CommonModule, RouterModule],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  posts = [
    {
      id: 1,
      title: '5 Secrets to Perfect Pizza Dough',
      excerpt: 'Crust too chewy? Too thin? Unlock the techniques top pizzerias use…',
      imageUrl: 'https://media.istockphoto.com/id/1442417585/photo/person-getting-a-piece-of-cheesy-pepperoni-pizza.jpg?s=612x612&w=0&k=20&c=k60TjxKIOIxJpd4F4yLMVjsniB4W1BpEV4Mi_nb4uJU=',
      linkBlog: 'https://honestcooking.com/secrets-perfect-homemade-pizza-dough/'
    },
    {
      id: 2,
      title: 'The Art of Creamy Carbonara',
      excerpt: 'Learn why authentic carbonara never uses cream, and how to emulsify eggs…',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5cM3F6kPXOx9fEjZFyQFQdB87NvVLgG1WKQ&s',
      linkBlog: 'https://cooking.nytimes.com/recipes/12965-spaghetti-carbonara'
    },
    {
      id: 3,
      title: 'Meal-Prep Magic: 7 Dinners in Under 30 Minutes',
      excerpt: 'Busy week? These simple, make-ahead recipes will save you time & stress.',
      imageUrl: 'https://i.guim.co.uk/img/media/545e9effb5e717ea28f7d639571f081d9e3d9dc4/0_45_7952_4774/master/7952.jpg?width=700&quality=85&auto=format&fit=max&s=8a2f7d19c3a325f1cc3f3515627a7f69',
      linkBlog: 'https://www.tasteofhome.com/collection/contest-winning-quick-dinner-recipes/'
    },
    {
      id: 4,
      title: 'Global Spice Guide: From Harissa to Garam Masala',
      excerpt: 'Level up your spice rack—explore flavor profiles and how to blend them.',
      imageUrl: 'https://spiceeats.com/wp-content/uploads/2020/07/Garam-Masala.jpg',
      linkBlog: 'https://aatomize.co.in/masala-around-the-world-exploring-global-spice-blends-masala-machin/?srsltid=AfmBOooNbCyqOti8AAFtQSbZ1QfYf-0A488Hm2tznftUi4bjs-4o9Y4k'
    }
  ];
}
