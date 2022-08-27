import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  storedBooks = [];
  onBookAdded(book) {
    this.storedBooks.push(book);
  }
}
