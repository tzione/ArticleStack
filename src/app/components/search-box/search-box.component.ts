import { Component, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent {

@Output() outputSearchTag = new EventEmitter<string>();
  constructor() { }

  getSearch(f: NgForm) {
    this.outputSearchTag.emit(f.value.search) ;
  }

}
