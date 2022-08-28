import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

import { Book } from './book.model';

@Injectable({ providedIn: 'root' })
export class BooksService {
  private books: Book[] = [];
  private booksUpdated = new Subject<Book[]>();

  constructor(private http: HttpClient) {}

  getBooks() {
    this.http
      .get<{ message: string; books: any }>('http://localhost:3000/api/books')
      .pipe(
        map((bookData) => {
          return bookData.books.map((book) => {
            return {
              title: book.title,
              author: book.author,
              description: book.description,
              publisher: book.publisher,
              publishedDate: book.publishedDate,
              pageCount: book.pageCount,
              language: book.language,
              price: book.price,
              id: book._id,
            };
          });
        })
      )
      .subscribe((transformedBooks) => {
        this.books = transformedBooks;
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
    this.http
      .post<{ message: string; bookId: string }>(
        'http://localhost:3000/api/books',
        book
      )
      .subscribe((responseData) => {
        const id = responseData.bookId;
        book.id = id;
        console.log(responseData.message);
        this.books.push(book);
        this.booksUpdated.next([...this.books]);
      });
  }

  deleteBook(bookId: string) {
    this.http
      .delete('http://localhost:3000/api/books/' + bookId)
      .subscribe(() => {
        const updatedBooks = this.books.filter((book) => book.id !== bookId);
        this.books = updatedBooks;
        this.booksUpdated.next([...this.books]);
      });
  }
}
