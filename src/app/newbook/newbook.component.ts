import { Book } from './../book';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { NewbookService } from '../newbook.service';

@Component({
  selector: 'app-newbook',
  templateUrl: './newbook.component.html',
  styleUrls: ['./newbook.component.css']
})
export class NewbookComponent implements OnInit {
  mybook: any;
  bookForm: FormGroup;
  sendBook: any;
  datasaved: boolean;
  booktoUpdate: any;
  constructor(private bookService: NewbookService, private fb: FormBuilder) { }

  ngOnInit() {
    this.getBookFromeStore();
    this.bookForm = this.fb.group({
      name : [''],
      category : [''],
      writer : ['']
    });
  }

getBookFromeStore() {
  this.bookService.getbook().subscribe(
 res => this.mybook = res
  );
}
onFormSubmit() {
this.datasaved = false;
const book = this.bookForm.value;
this.saveBookToStore(book);
this.bookForm.reset();
}
saveBookToStore(book: Book) {
 this.bookService.sendBook(book).subscribe( sendBook => {
  this.datasaved = true;
  this.getBookFromeStore();
  console.log(sendBook);
  this.booktoUpdate = null;
 });
}
booktoedit(bookid: string) {
this.bookService.getBookById(bookid).subscribe(
  book => {
  this.booktoUpdate = bookid;

  }
)
}



}
