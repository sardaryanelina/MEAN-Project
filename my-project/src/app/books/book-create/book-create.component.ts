import { Component } from '@angular/core';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
})
export class BookCreateComponent {
  enteredValue = '';
  newBook = 'NO CONTENT';
  onAddBook() {
    // console.dir(bookInput);
    this.newBook = this.enteredValue;
  }
}
