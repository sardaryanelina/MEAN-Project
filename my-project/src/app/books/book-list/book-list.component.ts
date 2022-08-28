import { Component, OnInit } from '@angular/core';
import { Book } from '../book.model';
import { BooksService } from '../books.service';

@Component({
  selector: './app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit {
  books: Book[] = [];

  constructor(public booksService: BooksService) {}
  ngOnInit() {
    this.books = this.booksService.getBooks();
  }
}
