import { Injectable } from '@angular/core';
import { Book } from './book.model';

@Injectable({ providedIn: 'root' })
export class BooksService {
  private books: Book[] = [];

  getBooks() {
    return this.books;
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
  }
}
