import { BrowserModule } from '@angular/platform-browser';
import {MatChipsModule} from '@angular/material/chips'
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ActionsPanelComponent } from './components/actions-panel/actions-panel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule, MatIconModule, MatCardModule, MatDialogModule, MatSelectModule} from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { StackManagerDialogComponent } from './components/stack-manager-dialog/stack-manager-dialog.component';
import { DeleteArticleComponent } from './components/delete-article/delete-article.component';
import { NavComponent } from './components/nav/nav.component';
import { StackService } from './shared/services/stack.service';
import { HomeComponent } from './components/home/home.component';
import { StoreModule } from '@ngrx/store';
import { articleReducer } from './shared/store/reducers/article.reducer';
import { categoryReducer } from './shared/store/reducers/category.reducer';
import { StackEffects } from './shared/store/effects/stack.effects';
import { EffectsModule } from '@ngrx/effects';
import { StackComponent } from './components/stack/stack.component';
import { ArticleCardComponent } from './components/article-card/article-card.component';
import { EditArticleComponent } from './components/edit-article/edit-article.component';
import { ArticleManagerDialogComponent } from './components/article-manager-dialog/article-manager-dialog.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { CreateCategoryDialogComponent } from './components/create-category-dialog/create-category-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ActionsPanelComponent,
    StackManagerDialogComponent,
    DeleteArticleComponent,
    NavComponent,
    HomeComponent,
    StackComponent,
    ArticleCardComponent,
   EditArticleComponent,
   ArticleManagerDialogComponent,
   SearchBoxComponent,
   CreateCategoryDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatDialogModule,
    MatTabsModule,
    MatChipsModule,
    MatSelectModule,
    StoreModule.forRoot({
      stack: articleReducer,
      categories: categoryReducer
    }),
    EffectsModule.forRoot([StackEffects])
   ],
    entryComponents: [
      StackManagerDialogComponent,
      ArticleManagerDialogComponent,
      CreateCategoryDialogComponent
    ],
    providers: [
    StackService,
  ],
   bootstrap: [AppComponent]
})
export class AppModule { }
