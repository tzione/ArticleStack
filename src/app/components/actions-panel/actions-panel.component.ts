import { Component, OnInit} from '@angular/core';
import { StackManagerDialogComponent } from '../stack-manager-dialog/stack-manager-dialog.component';
import { CreateCategoryDialogComponent } from '../create-category-dialog/create-category-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Category } from '../../shared/store/models/category.model';
import { Router } from '@angular/router';
import { AppState } from '../app.state';
import { LoadCategories } from '../../shared/store/actions/stack.action';
import { StackService } from '../../shared/services/stack.service';

@Component({
  selector: 'actions-panel',
  templateUrl: './actions-panel.component.html',
  styleUrls: ['./actions-panel.component.scss']
})
export class ActionsPanelComponent implements OnInit {
  categories$: Observable<Array<Category>>;
  constructor(
    public dialog: MatDialog,
    private store: Store<AppState>,
    private _router: Router,
    private stackService: StackService
    ) {}
ngOnInit() {
  this.categories$ = this.store.select(store => store.categories.list);
  this.store.dispatch(new LoadCategories());
}
  openStackManager(): void {
    const dialogRef = this.dialog.open(StackManagerDialogComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {});
  }

  openCreateCategory(): void {
    const dialogRef = this.dialog.open(CreateCategoryDialogComponent, {
    });
    dialogRef.afterClosed().subscribe(result => { });
  }

  getCategory(category: string, color: string) {
    this.stackService.changeCategory(category, color);
  }
}
