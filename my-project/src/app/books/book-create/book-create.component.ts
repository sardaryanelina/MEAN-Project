import { Component } from '@angular/core';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
})
export class BookCreateComponent {
  newBook = 'NO CONTENT';
  onAddBook(bookInput: HTMLTextAreaElement) {
    // console.dir(bookInput);
    this.newBook = bookInput.value;
  }
}
