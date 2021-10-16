import { Action } from '@ngrx/store';
import { Article } from '../models/article.model';
import { Category } from '../models/category.model';

// Actions constants
export const LOAD_STACK = '[STACK] Load Stack';
export const LOAD_STACK_SUCCESS = '[STACK] Load Stack Success';
export const LOAD_STACK_FAILURE = '[STACK] Load Stack Failure';

export const ADD_ARTICLE = '[STACK] Add Article';
export const ADD_ARTICLE_SUCCESS = '[STACK] Add Article Success';
export const ADD_ARTICLE_FAILURE = '[STACK] Add Article Failure';

export const EDIT_ARTICLE = '[STACK] Edit Article';
export const EDIT_ARTICLE_SUCCESS = '[STACK] Edit Article Success';
export const EDIT_ARTICLE_FAILURE = '[STACK] Edit Article Failure';

export const DELETE_ARTICLE = '[STACK] Delete Article';
export const DELETE_ARTICLE_SUCCESS = '[STACK] Delete Article Success';
export const DELETE_ARTICLE_FAILURE = '[STACK] Delete Article Failure';


export const LOAD_CATEGORIES = '[CATEGORIES] Load Categories';
export const LOAD_CATEGORIES_SUCCESS = '[CATEGORIES] Load Categories Success';
export const LOAD_CATEGORIES_FAILURE = '[CATEGORIES] Load Categories Failure';

export const ADD_CATEGORY = '[CATEGORIES] Add Category';
export const ADD_CATEGORY_SUCCESS = '[CATEGORIES] Add Category Success';
export const ADD_CATEGORY_FAILURE = '[CATEGORIES] Add Category Failure';

export const DELETE_CATEGORY = '[CATEGORIES] Delete Category';
export const DELETE_CATEGORY_SUCCESS = '[CATEGORIES] Delete Category Success';
export const DELETE_CATEGORY_FAILURE = '[CATEGORIES] Delete Category Failure';

// Action creators
export class LoadStack implements Action {
  readonly type = LOAD_STACK;
  }
export class LoadStackSuccess implements Action {
  readonly type = LOAD_STACK_SUCCESS;
  constructor(public payload: Article[]) {}
}
export class LoadStackFailure implements Action {
  readonly type = LOAD_STACK_FAILURE;
  constructor(public payload: Error) {}
}

export class AddArticle implements Action {
  readonly type = ADD_ARTICLE;
  constructor(public payload: Article) {}
}
export class AddArticleSuccess implements Action {
  readonly type = ADD_ARTICLE_SUCCESS;
  constructor(public payload: Article) {}
}
export class AddArticleFailure implements Action {
  readonly type = ADD_ARTICLE_FAILURE;
  constructor(public payload: Error) {}
}

export class EditArticle implements Action {
  readonly type = EDIT_ARTICLE;
  constructor(public payload: Article) {}
}
export class EditArticleSuccess implements Action {
  readonly type = EDIT_ARTICLE_SUCCESS;
  constructor(public payload: Article) {}
}
export class EditArticleFailure implements Action {
  readonly type = EDIT_ARTICLE_FAILURE;
  constructor(public payload: Error) {}
}


export class DeleteArticle implements Action {
  readonly type = DELETE_ARTICLE;
  // the number type is for the ID property
  constructor(public payload: string) {}
}
export class DeleteArticleSuccess implements Action {
  readonly type = DELETE_ARTICLE_SUCCESS;
  // the number type is for the ID property
  constructor(public payload: string) {}
}
export class DeleteArticleFailure implements Action {
  readonly type = DELETE_ARTICLE_FAILURE;
  constructor(public payload: Error) {}
}


export class LoadCategories implements Action {
  readonly type = LOAD_CATEGORIES;
  }
export class LoadCategoriesSuccess implements Action {
  readonly type = LOAD_CATEGORIES_SUCCESS;
  constructor(public payload: Category[]) {}
}
export class LoadCategoriesFailure implements Action {
  readonly type = LOAD_CATEGORIES_FAILURE;
  constructor(public payload: Error) {}
}

export class AddCategory implements Action {
  readonly type = ADD_CATEGORY;
  constructor(public payload: Category) {}
}
export class AddCategorySuccess implements Action {
  readonly type = ADD_CATEGORY_SUCCESS;
  constructor(public payload: Category) {}
}
export class AddCategoryFailure implements Action {
  readonly type = ADD_CATEGORY_FAILURE;
  constructor(public payload: Error) {}
}

export class DeleteCategory implements Action {
  readonly type = DELETE_CATEGORY;
  // the number type is for the ID property
  constructor(public payload: string) {}
}
export class DeleteCategorySuccess implements Action {
  readonly type = DELETE_CATEGORY_SUCCESS;
  // the number type is for the ID property
  constructor(public payload: string) {}
}
export class DeleteCategoryFailure implements Action {
  readonly type = DELETE_CATEGORY_FAILURE;
  constructor(public payload: Error) {}
}


// Action type
export type StackActions =
   LoadStack
 | LoadStackSuccess
 | LoadStackFailure
 | AddArticle
 | AddArticleFailure
 | AddArticleSuccess
 | EditArticle
 | EditArticleSuccess
 | EditArticleFailure
 | DeleteArticle
 | DeleteArticleSuccess
 | DeleteArticleFailure
 | LoadCategories
 | LoadCategoriesSuccess
 | LoadCategoriesFailure
 | AddCategory
 | AddCategoryFailure
 | AddCategorySuccess
 | DeleteCategory
 | DeleteCategorySuccess
 | DeleteCategoryFailure;
