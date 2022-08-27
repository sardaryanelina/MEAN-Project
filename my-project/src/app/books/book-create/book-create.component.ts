import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Book } from '../book.model';

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
  @Output() bookCreated = new EventEmitter<Book>();

  onAddBook(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const book: Book = {
      title: form.value.title,
      author: form.value.author,
      description: form.value.description,
      publisher: form.value.publisher,
      publishedDate: form.value.publishedDate,
      pageCount: form.value.pageCount,
      language: form.value.language,
      price: form.value.price,
    };
    this.bookCreated.emit(book);
  }
}
