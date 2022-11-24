import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookServiceService } from '../book-service.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
  providers:[BookServiceService]
})
export class BookListComponent implements OnInit {

  books:Book[] | undefined
  constructor(private bookService:BookServiceService) { }



//get book function to fetch data from database


  ngOnInit(): void {
    this.bookService
    .getBooks()
    .subscribe((books:Book[])=>{
      this.books=books.map(book=>{
        return book;
      });
    });
    }


// header for book list page


    pageContent={
      header:{
        title:'THE BOOK HOUSE',
        body:'Find your favourites here'
      }
    };
}
