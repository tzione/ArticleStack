import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article } from '../store/models/article.model';
import { Category } from '../store/models/category.model';
import { BehaviorSubject} from 'rxjs/BehaviorSubject';
import { from } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StackService {
  private STACK_URL = 'http://localhost:3000/stack';
  private CATEGORIES_URL = 'http://localhost:3000/categories';
  private categorySource = new BehaviorSubject<string>('all');
  private categoryColorSource = new BehaviorSubject<string>('#3666a5');
  currentCategory = this.categorySource.asObservable();
  currentCategoryColor = this.categoryColorSource.asObservable();

  constructor(private http: HttpClient) {}

changeCategory(category: string, color: string) {
  this.categorySource.next(category);
  this.categoryColorSource.next(color);
}

  getStack() {
    return this.http.get<Article[]>(this.STACK_URL);
  }
  addArticle(article: Article) {
    return this.http.post<Article>(this.STACK_URL, article);
  }
  editArticle(article: Article) {
    return this.http.put<Article>(`${this.STACK_URL}/${article.id}`, article);
  }
  deleteArticle(id: string) {
    return this.http.delete(`${this.STACK_URL}/${id}`);
  }

  getCategories() {
    return this.http.get<Category[]>(this.CATEGORIES_URL);
  }
  addCategory(category: Category) {
    return this.http.post<Category>(this.CATEGORIES_URL, category);
  }

  deleteCategory(id: string) {
    return this.http.delete(`${this.CATEGORIES_URL}/${id}`);
  }
}

