import { Injectable } from '@angular/core';
import { Book } from './book'; 
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  private booksUrl="http://localhost:3000/api/books"

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient,private router:Router) { }

  getBooks(){
    return this.http.get<Book[]>(this.booksUrl)
  }
  getSingleBook(bookid: string) {
    return this.http.get<Book>(this.booksUrl + '/' + bookid);
  }
  createBook(newBook: Book) {
    return this.http.post<Book>(this.booksUrl, newBook)
    .subscribe((newBook : Book)=>{
    console.log(newBook);
    this.router.navigate(['/list']);
    })
    }

    updateBook(bookid : string, book:Book): Observable<Book> {
      return this.http.put<Book>(this.booksUrl + '/' + bookid, JSON.stringify(book), this.httpOptions)
      .pipe()
    }
  
    delete(bookid: string){
      return this.http.delete(this.booksUrl + '/' + bookid, this.httpOptions)
      .pipe()
    }

    
}
