import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Book } from './book.model';

@Injectable({ providedIn: 'root' })
export class BooksService {
  private books: Book[] = [];
  private booksUpdated = new Subject<Book[]>();

  getBooks() {
    return [...this.books];
  }

  getBookUpdatListener() {
    return this.booksUpdated.asObservable();
  }

  addBook(
    title: string,
    author: string,
    description: string,
    publisher: string,
    publishedDate: Date,
    pageCount: number,
    language: string,
    price: number
  ) {
    const book: Book = {
      title: title,
      author: author,
      description: description,
      publisher: publisher,
      publishedDate: publishedDate,
      pageCount: pageCount,
      language: language,
      price: price,
    };
    this.books.push(book);
    this.booksUpdated.next([...this.books]);
  }
}
