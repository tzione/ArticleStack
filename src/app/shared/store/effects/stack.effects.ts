import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { StackService } from '../../services/stack.service';
import { map, mergeMap, catchError } from 'rxjs/operators';
import * as ArticleActions from '../actions/stack.action';
import { of } from 'rxjs';

@Injectable()
export class StackEffects {
  @Effect() loadStack$ = this.actions$.pipe(
    ofType<ArticleActions.LoadStack>(ArticleActions.LOAD_STACK),
    mergeMap(() =>
      this.stackService.getStack().pipe(
        map(data => new ArticleActions.LoadStackSuccess(data)),
        catchError(error => of(new ArticleActions.LoadStackFailure(error)))
      )
    )
  );
  @Effect() addArticle$ = this.actions$.pipe(
    ofType<ArticleActions.AddArticle>(ArticleActions.ADD_ARTICLE),
    mergeMap(data =>
      this.stackService.addArticle(data.payload).pipe(
        map(() => new ArticleActions.AddArticleSuccess(data.payload)),
        catchError(error => of(new ArticleActions.AddArticleFailure(error)))
      )
    )
  );
  @Effect() editArticle$ = this.actions$.pipe(
    ofType<ArticleActions.EditArticle>(ArticleActions.EDIT_ARTICLE),
    mergeMap(data =>
      this.stackService.editArticle(data.payload).pipe(
        map(() => new ArticleActions.EditArticleSuccess(data.payload)),
        catchError(error => of(new ArticleActions.EditArticleFailure(error)))
      )
    )
  );

  @Effect() deleteArticle$ = this.actions$.pipe(
    ofType<ArticleActions.DeleteArticle>(ArticleActions.DELETE_ARTICLE),
    mergeMap(data =>
      this.stackService.deleteArticle(data.payload).pipe(
        map(() => new ArticleActions.DeleteArticleSuccess(data.payload)),
        catchError(error => of(new ArticleActions.DeleteArticleFailure(error)))
      )
    )
  );



  @Effect() loadCategories$ = this.actions$.pipe(
    ofType<ArticleActions.LoadCategories>(ArticleActions.LOAD_CATEGORIES),
    mergeMap(() =>
      this.stackService.getCategories().pipe(
        map(data => new ArticleActions.LoadCategoriesSuccess(data)),
        catchError(error => of(new ArticleActions.LoadCategoriesFailure(error)))
      )
    )
  );
  @Effect() addCategory$ = this.actions$.pipe(
    ofType<ArticleActions.AddCategory>(ArticleActions.ADD_CATEGORY),
    mergeMap(data =>
      this.stackService.addCategory(data.payload).pipe(
        map(() => new ArticleActions.AddCategorySuccess(data.payload)),
        catchError(error => of(new ArticleActions.AddCategoryFailure(error)))
      )
    )
  );
   @Effect() deleteCategory$ = this.actions$.pipe(
    ofType<ArticleActions.DeleteCategory>(ArticleActions.DELETE_CATEGORY),
    mergeMap(data =>
      this.stackService.deleteCategory(data.payload).pipe(
        map(() => new ArticleActions.DeleteCategorySuccess(data.payload)),
        catchError(error => of(new ArticleActions.DeleteCategoryFailure(error)))
      )
    )
  );
  constructor(
    private actions$: Actions,
    private stackService: StackService
  ) {}
}
