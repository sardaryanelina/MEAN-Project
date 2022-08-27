import { Component, EventEmitter, Output } from '@angular/core';
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

  onAddBook() {
    const book: Book = {
      title: this.enteredTitle,
      author: this.enteredAuthor,
      description: this.enteredDescription,
      publisher: this.enteredPublisher,
      publishedDate: this.enteredPublicationDate,
      pageCount: this.enteredPageCount,
      language: this.enteredLanguage,
      price: this.enteredPrice,
    };
    this.bookCreated.emit(book);
  }
}
