import { Component } from '@angular/core';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
})
export class BookCreateComponent {
  newPost = 'NO CONTENT';
  onAddBook() {
    this.newPost = 'The user\'s book';
  }
}
