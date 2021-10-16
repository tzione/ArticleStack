import * as ArticleActions from '../actions/stack.action';
import { Category } from '../models/category.model';

export interface CategoriesState {
  list: Category[];
}

export function categoryReducer(
  state: CategoriesState,
  action: ArticleActions.StackActions) {
  switch (action.type) {
    case ArticleActions.LOAD_CATEGORIES:
      return {
        ...state,
        loading: true
      };
    case ArticleActions.LOAD_CATEGORIES_SUCCESS:
      return {
        ...state,
        list: action.payload,
        loading: false
      };
    case ArticleActions.LOAD_CATEGORIES_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    case ArticleActions.ADD_CATEGORY:
      return {
        ...state,
        loading: true,
         };
    case ArticleActions.ADD_CATEGORY_SUCCESS:
      return {
        ...state,
        list: [...state.list, action.payload],
        loading: false
      };
    case ArticleActions.ADD_CATEGORY_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      };

    case ArticleActions.DELETE_CATEGORY:
      return {
        ...state,
        loading: true
      };
    case ArticleActions.DELETE_CATEGORY_SUCCESS:
      return {
        ...state,
        list: state.list.filter(item => item.id !== action.payload),
        loading: false
      };
    case ArticleActions.DELETE_CATEGORY_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    default:
      return state;
  }
}
