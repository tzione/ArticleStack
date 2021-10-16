import { Component, OnInit, OnDestroy } from "@angular/core";
import { Article } from "../../shared/store/models/article.model";
import { AppState } from "../app.state";
import { Store } from "@ngrx/store";
import * as uuid from "uuid";
import { Observable } from "rxjs";
import { Category } from "../../shared/store/models/category.model";
import { AddArticle } from "../../shared/store/actions/stack.action";
import { LoadCategories } from "../../shared/store/actions/stack.action";
import { MatDialogRef } from "@angular/material/dialog";
import { ISubscription } from "rxjs/Subscription";
@Component({
  selector: "stack-manager-dialog",
  templateUrl: "./stack-manager-dialog.component.html",
  styleUrls: ["./stack-manager-dialog.component.scss"]
})
export class StackManagerDialogComponent implements OnInit, OnDestroy {
  newArticle: Article = {
    id: "",
    url: "",
    caption: "",
    tags: [],
    category: "",
    color: ""
  };
  private subscription: ISubscription;
  constructor(
    private store: Store<AppState>,
    private dialogRef: MatDialogRef<StackManagerDialogComponent>
  ) {}
  categories$: Observable<Array<Category>>;
  ngOnInit() {
    this.categories$ = this.store.select(store => store.categories.list);
    this.store.dispatch(new LoadCategories());
  }
  addArticle(tag, category) {
    this.subscription = this.categories$.subscribe(data => {
      let color = "";
      for (let i = 0; i <= data.length - 1; i++) {
        if (data[i].name === category) {
          color = data[i].color;
        }
      }
      this.newArticle.color = color;
    });
    this.newArticle.category = category;
    this.newArticle.tags = tag.split(" ");
    this.newArticle.id = uuid();
    this.store.dispatch(new AddArticle(this.newArticle));
    this.newArticle = {
      id: "",
      url: "",
      caption: "",
      tags: [],
      category: "",
      color: ""
    };
  }
  closeDialog(): void {
    this.dialogRef.close();
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
