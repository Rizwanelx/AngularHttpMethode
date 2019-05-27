import { Book } from './book';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BookService {
  bookUrl: any = '/api/books';
  constructor(private http: HttpClient) { }
  getBookFromStore(): Observable<Book[]> {
return this.http.get<Book[]>(this.bookUrl)
  }
getBookbyId(bookid: string) {
 return this.http.get(this.bookUrl + '/' + bookid);
}
createBook(book: Book): Observable<Book> {
  const options = new HttpHeaders ({
    'Content-Type' : 'application/Json',
    });
  return this.http.post<Book>(this.bookUrl, book, {headers: options});
}
updateBook(book: Book): Observable<number> {
  const options = new HttpHeaders ({
    'Content-Type' : 'application/Json',
    });
  return this.http.put<number>(this.bookUrl + '/' + book.id, book, {headers: options});
   }
   deleteBook(bookid: string): Observable<number> {
    const options = new HttpHeaders ({
      'Content-Type' : 'application/Json',
      });
    return this.http.delete<number>(this.bookUrl + '/' + bookid, {headers: options});
     }
}
