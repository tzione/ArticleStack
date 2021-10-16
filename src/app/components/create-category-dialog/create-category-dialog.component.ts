import { Component, OnInit } from '@angular/core';
import { Category } from '../../shared/store/models/category.model';
import * as uuid from 'uuid';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { AddCategory } from '../../shared/store/actions/stack.action';
import { Observable } from "rxjs";
import { DeleteCategory } from "../../shared/store/actions/stack.action";
import { MatDialogRef} from '@angular/material/dialog';
@Component({
  selector: 'create-category-dialog',
  templateUrl: './create-category-dialog.component.html',
  styleUrls: ['./create-category-dialog.component.scss']
})
export class CreateCategoryDialogComponent implements OnInit {
  newCategory: Category = { id: '', name: '', color: '' };
  
  constructor(private store: Store<AppState>, private dialogRef: MatDialogRef<CreateCategoryDialogComponent>) { }
  categories$: Observable<Array<Category>>;
  addCategory(cat, color) {
    this.newCategory.color = color;
    this.newCategory.name = cat;
    this.newCategory.id = uuid();
    this.store.dispatch(new AddCategory(this.newCategory));
    this.newCategory = { id: '', name: '', color: '' };
    }
  ngOnInit() {
    this.categories$ = this.store.select(store => store.categories.list);
  }
  deleteCategory(id: string) {
    this.store.dispatch(new DeleteCategory(id));
  }
  closeDialog(): void {
    this.dialogRef.close();
  }
}
