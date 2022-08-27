import { Component } from '@angular/core';
import { Book } from './books/book.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  storedBooks: Book[] = [];
  onBookAdded(book) {
    this.storedBooks.push(book);
  }
}
