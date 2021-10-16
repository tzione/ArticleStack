import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { Article } from '../../shared/store/models/article.model';
import { EditArticle} from 'src/app/shared/store/actions/stack.action';
import { FormGroup, FormControl } from '@angular/forms';
import { LoadCategories } from '../../shared/store/actions/stack.action';
import { Observable } from 'rxjs';
import { Category } from '../../shared/store/models/category.model';


@Component({
  selector: 'edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.scss']
})
export class EditArticleComponent implements OnInit {
  categories$: Observable<Array<Category>>;
  editForm: FormGroup;
  currCategory: any;
  @Input()itemId;
  @Input()itemUrl;
  @Input()itemCaption;
  @Input()itemTags;
  @Input()itemCategory;
  color: any;
  editedArticle: Article = { id: '', url: '', caption: '', tags: [], category: '', color: '' };
  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.initForm();
    this.categories$ = this.store.select(store => store.categories.list);
    this.store.dispatch(new LoadCategories());
  }

  private initForm() {
    this.editForm = new FormGroup({
      link: new FormControl(null),
      itemCaption: new FormControl(null),
    });
  }

  editArticle(orgId, orgUrl, orgCaption, orgTags, orgCategory, caption, tags, category) {
    this.editedArticle.id = orgId;
    this.editedArticle.url = orgUrl;
    if (caption === '' || caption === undefined) {
      this.editedArticle.caption = orgCaption;
    } else {
      this.editedArticle.caption = caption;
    }
    if (tags === '' || tags === undefined) {
      this.editedArticle.tags = orgTags;
    } else {
      this.editedArticle.tags = tags.split(' ');
    }
    if (category === '' || category === undefined) {
      this.editedArticle.category = orgCategory;
      this.categories$.subscribe(data => {
        for (let i = 0; i <= data.length - 1; i++) {
           if (data[i].name === orgCategory) {
             this.color = data[i].color;
             console.log('color: ' + data[i].color);
           }
         }
       });
      this.editedArticle.color = this.color;
     } else {
      this.categories$.subscribe(data => {
        for (let i = 0; i <= data.length - 1; i++) {
           if (data[i].name === category) {
             this.color = data[i].color;
           }
         }
       });
      this.editedArticle.color = this.color;
      this.editedArticle.category = category;
    }
    this.store.dispatch(new EditArticle(this.editedArticle));
    this.editedArticle = { id: '', url: '', caption: '', tags: [], category: '', color: '' };
  }


}
