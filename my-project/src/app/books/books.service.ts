import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Book } from './book.model';

@Injectable({ providedIn: 'root' })
export class BooksService {
  private books: Book[] = [];
  private booksUpdated = new Subject<Book[]>();

  constructor(private http: HttpClient) {}

  getBooks() {
    this.http
      .get<{ message: string; books: Book[] }>(
        'http://localhost:3000/api/books'
      )
      .subscribe((bookData) => {
        this.books = bookData.books;
        this.booksUpdated.next([...this.books]);
      });
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
      id: null,
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
