import { Component } from '@angular/core';

@Component({
  selector: './app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {
  posts = [
    {title:'First Book title', author: 'author name 1', publisher: ' publisher name 1', price: 11 },
    {title:'Second Book title', author: 'author name 2', publisher: ' publisher name 2', price: 12 },
    {title:'Third Book title', author: 'author name 3', publisher: ' publisher name 3', price: 13 }
  ];
}
