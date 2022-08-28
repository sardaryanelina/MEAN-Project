import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { BooksService } from '../books.service';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css'],
})
export class BookCreateComponent {
  enteredTitle = '';
  enteredAuthor = '';
  enteredDescription = '';
  enteredPublisher = '';
  enteredPublicationDate = new Date();
  enteredPageCount = 0;
  enteredLanguage = '';
  enteredPrice = 0;

  constructor(public booksService: BooksService) {}

  onAddBook(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.booksService.addBook(
      form.value.title,
      form.value.author,
      form.value.description,
      form.value.publisher,
      form.value.publishedDate,
      form.value.pageCount,
      form.value.language,
      form.value.price
    );
    form.resetForm();
  }
}
