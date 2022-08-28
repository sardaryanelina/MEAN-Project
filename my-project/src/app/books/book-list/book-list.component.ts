import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Book } from '../book.model';
import { BooksService } from '../books.service';

@Component({
  selector: './app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit, OnDestroy {
  books: Book[] = [];
  private booksSub: Subscription;

  constructor(public booksService: BooksService) {}
  ngOnInit() {
    this.books = this.booksService.getBooks();
    this.booksSub = this.booksService
      .getBookUpdatListener()
      .subscribe((books: Book[]) => {
        this.books = books;
      });
  }
  ngOnDestroy() {
    this.booksSub.unsubscribe;
  }
}
