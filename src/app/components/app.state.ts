import { StackState } from '../shared/store/reducers/article.reducer';
import { CategoriesState } from '../shared/store/reducers/category.reducer';


export interface AppState {
    readonly stack: StackState;
    readonly categories: CategoriesState;
}
