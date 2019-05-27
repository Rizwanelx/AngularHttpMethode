import { BookService } from './../book.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Book } from './../book';

@Component({
  selector: 'app-mybook',
  templateUrl: './mybook.component.html',
  styleUrls: ['./mybook.component.css']
})
export class MybookComponent implements OnInit {
  bookForm: FormGroup;
  mybook: any;
  booktoUpdate = null;
  book: any;


  constructor(private bookService: BookService, private fb: FormBuilder) { }

  ngOnInit() {
    this.bookForm = this.fb.group({
      name: ['', Validators.required],
      category: ['', Validators.required],
      writer: ['', Validators.required]
    });
    this.getBook();
  }


getBook() {
  this.bookService.getBookFromStore().subscribe(
res => this.mybook = res
);
}

booktoedit(bookid: string) {
  this.bookService.getBookbyId(bookid).subscribe(book => {
    this.booktoUpdate = bookid;
    // this.bookForm.controls['name'].setValue(book.name);
    // this.bookForm.controls['category'].setValue(book.category);
    // this.bookForm.controls['writer'].setValue(book.writer);
    });
}


onFormSubmit() {
const book = this.bookForm.value;
this.createBook(book);
this.bookForm.reset();

}

createBook(book: Book) {
  if ( this.booktoUpdate == null ) {
this.bookService.createBook(book).subscribe(
  res => {
  this.getBook();
  console.log(res);
  this.booktoUpdate = null;
  }
);
} else {
  book.id = this.booktoUpdate;
  this.bookService.updateBook(book).subscribe( res => {
    this.getBook();
    this.booktoUpdate = null;
    console.log(res);
  });
 }
}
bookdelete(bookid: string) {
this.bookService.deleteBook(bookid).subscribe(book => {
  this.getBook();
});
}


}
