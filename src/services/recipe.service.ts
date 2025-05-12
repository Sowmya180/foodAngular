import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  constructor(private http: HttpClient) {}

  getMealsByCategory(category: string) {
    return this.http.get<any>(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
  }

  getCategories(): Observable<any> {
    const url = 'https://www.themealdb.com/api/json/v1/1/categories.php';
    return this.http.get(url);
  }

  getRecipeDetails(id: string) {
    return this.http.get<any>(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
  }
  
  getAllRecipes(): Observable<any> {
    const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
    return this.http.get(url);
  }

  searchByName(name: string): Observable<any> {
    return this.http.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`);
  }

  searchByFirstLetter(letter: string): Observable<any> {
    return this.http.get(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`);
  }
}
