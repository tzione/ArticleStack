import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-article-manager-dialog',
  templateUrl: './article-manager-dialog.component.html',
  styleUrls: ['./article-manager-dialog.component.scss']
})
export class ArticleManagerDialogComponent {
  public itemId: any;
  public itemUrl: string;
  public itemCaption: string;
  public itemTags: [];
  public itemCategory: string;

  constructor(
     private dialogRef: MatDialogRef<ArticleManagerDialogComponent>,
     @Inject(MAT_DIALOG_DATA) data)  {
      this.itemId = data.itemId;
      this.itemUrl = data.itemUrl;
      this.itemCaption = data.itemCaption;
      this.itemTags = data.itemTags;
      this.itemCategory = data.itemCategory;
      }
      closeDialog(): void {
        this.dialogRef.close();
      }

}
