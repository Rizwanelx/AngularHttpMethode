import { Component, OnInit } from '@angular/core';
import { BookService } from './../book.service';
import { Book } from './../book';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Observable} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'AngularHttpMethode';
  softBook: Book[];
  book: any;
  datasaved = false;
  bookForm: FormGroup;
  allbooks: Observable<Book[]>;
  booktoUpdate = null;
  constructor( private bookService: BookService, private fb: FormBuilder) {}

ngOnInit() {
  this.getsoftBook();
  this.bookForm = this.fb.group({
    name: ['', Validators.required],
    category: ['', Validators.required],
    writer: ['', Validators.required]
  });
}
onFormSubmit() {
this.datasaved = false;
const book = this.bookForm.value;
this.createsbook(book);
this.bookForm.reset();
}
booktoedit(bookid: string) {
  this.bookService.getBookbyId(bookid).subscribe(book => {
    this.booktoUpdate = bookid;
    // this.bookForm.controls['name'].setValue(book.name);
    // this.bookForm.controls['category'].setValue(book.category);
    // this.bookForm.controls['writer'].setValue(book.writer);
  });
}


createsbook(book: Book) {
  if (this.booktoUpdate == null) {
this.bookService.createBook(book).subscribe(
  res => {
    this.datasaved = true;
    this.getsoftBook();
    console.log(res);
    this.booktoUpdate = null;

  }
);
} else {
 book.id = this.booktoUpdate;
 this.bookService.updateBook(book).subscribe( res => {
   this.datasaved = true;
   this.getsoftBook();
   this.booktoUpdate = null;
   console.log(res);
 })
}
}

getsoftBook() {
  this.allbooks = this.bookService.getBookFromStore();
  this.bookService.getBookFromStore().subscribe(
  book => this.softBook = book
  );
}

bookdelete(bookid: string) {
this.bookService.deleteBook(bookid).subscribe(book => {
  this.getsoftBook();
}
);
}

}
