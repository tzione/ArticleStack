import * as ArticleActions from '../actions/stack.action';
import { Article } from '../models/article.model';

export interface StackState {
  list: Article[];
  loading: boolean;
  error: Error;
}


export function articleReducer(
  state: StackState,
  action: ArticleActions.StackActions) {
  switch (action.type) {
    case ArticleActions.LOAD_STACK:
      return {
        ...state,
        loading: true
      };
    case ArticleActions.LOAD_STACK_SUCCESS:
      return {
        ...state,
        list: action.payload,
        loading: false
      };
    case ArticleActions.LOAD_STACK_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    case ArticleActions.ADD_ARTICLE:
      return {
        ...state,
        loading: true,
         };
    case ArticleActions.ADD_ARTICLE_SUCCESS:
      return {
        ...state,
        list: [...state.list, action.payload],
        loading: false
      };
    case ArticleActions.ADD_ARTICLE_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      };

    case ArticleActions.EDIT_ARTICLE:
      return {
        ...state,
        loading: true
      };
    case ArticleActions.EDIT_ARTICLE_SUCCESS:
       return {
        ...state,
        list: state.list.map((item) => {
          if (item.id === action.payload.id) {
          return {
          ...item, url: action.payload.url,
           caption: action.payload.caption,
           tags: action.payload.tags,
           category: action.payload.category,
           color: action.payload.color
          };
        }
          return item;
        }),
        loading: false
      };
    case ArticleActions.EDIT_ARTICLE_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      };

    case ArticleActions.DELETE_ARTICLE:
      return {
        ...state,
        loading: true
      };
    case ArticleActions.DELETE_ARTICLE_SUCCESS:
      return {
        ...state,
        list: state.list.filter(item => item.id !== action.payload),
        loading: false
      };
    case ArticleActions.DELETE_ARTICLE_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    default:
      return state;
  }
}
