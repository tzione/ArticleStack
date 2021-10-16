import { Component, OnInit, OnDestroy } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { AppState } from "../app.state";
import { ArticleManagerDialogComponent } from "../article-manager-dialog/article-manager-dialog.component";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { Article } from "../../shared/store/models/article.model";
import { Category } from "../../shared/store/models/category.model";
import {
  LoadStack,
  DeleteArticle,
  LoadCategories
} from "../../shared/store/actions/stack.action";
import { StackService } from '../../shared/services/stack.service';
import { ISubscription } from "rxjs/Subscription";

@Component({
  selector: "article-card",
  templateUrl: "./article-card.component.html",
  styleUrls: ["./article-card.component.scss"]
})
export class ArticleCardComponent implements OnInit, OnDestroy {
  stack$: Observable<Array<Article>>;
  loading$: Observable<boolean>;
  error$: Observable<Error>;
  categories$: Observable<Array<Category>>;
  errorCat$: Observable<Error>;
  category: string;
  color: string;
  private categorySubscription: ISubscription;
  private categoryColorySubscription: ISubscription;


  newArticle: Article = { id: "", url: "", caption: "", tags: [], category: '', color: '' };

  constructor(private store: Store<AppState>,
              public dialog: MatDialog,
              private stackService: StackService) {}

  searchTag = null;
  getSearchVal(searchString) {
    if (searchString) {
      this.searchTag = searchString;
    } else {
      this.searchTag = null;
    }
    console.log('Check it out:  ' + this.searchTag);
  }

  openArticleManager(itemId, itemUrl, itemCaption, itemTags, itemCategory): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      itemId,
      itemUrl,
      itemCaption,
      itemTags,
      itemCategory
    };

    const dialogRef = this.dialog.open(
      ArticleManagerDialogComponent,
      dialogConfig
    );

    dialogRef.afterClosed().subscribe(result => {});
  }

  ngOnInit() {
    this.stack$ = this.store.select(store => store.stack.list);
    this.loading$ = this.store.select(store => store.stack.loading);
    this.error$ = this.store.select(store => store.stack.error);
    this.store.dispatch(new LoadStack());

    this.categories$ = this.store.select(store => store.categories.list);
    this.store.dispatch(new LoadCategories());
    this.categorySubscription = this.stackService.currentCategory.subscribe(category => this.category = category);
    this.categoryColorySubscription = this.stackService.currentCategoryColor.subscribe(color => this.color = color);
  }
  deleteArticle(id: string) {
    this.store.dispatch(new DeleteArticle(id));
  }

  ngOnDestroy() {
    this.categorySubscription.unsubscribe();
    this.categoryColorySubscription.unsubscribe();
  }
}
