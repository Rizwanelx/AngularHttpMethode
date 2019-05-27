import { Book } from './book';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewbookService {
  bookUrl: any = '/api/books';

  constructor(private http: HttpClient) { }

  getbook(): Observable <Book[]> {
   return this.http.get<Book[]>(this.bookUrl);
  }

  sendBook(book: Book): Observable <Book[]> {
    const options = new HttpHeaders ({
      'Content-Type' : 'application/Json',
      });
    return this.http.post<Book[]>(this.bookUrl, book, {headers: options} );
  }



getBookById(bookid: string) {
return this.http.get(this.bookUrl + '/' + bookid);
  }
updateBook(book: Book): Observable <number> {
    const options = new HttpHeaders ({
      'Content-Type' : 'application/Json',
      });
    return this.http.put<number>(this.bookUrl + '/' + book.id, book, {headers: options} );
  }
}
