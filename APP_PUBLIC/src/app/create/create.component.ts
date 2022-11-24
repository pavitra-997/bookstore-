import { Component, OnInit,Input } from '@angular/core';
import { BookServiceService } from '../book-service.service';
import { Book } from '../book';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers:[BookServiceService]
})
export class CreateComponent implements OnInit {


// variable of Book
public newBook:Book={
  _id:'',
  name: '',
  author:'',
  price:null,
  image:'',
  publish_details:[{
         language:'',
         publisher:'',
         publish_date:null
 }]
}

// header for create page
pageContent={
  header:{
    title:'THE BOOK HOUSE',
    body:'Add new book here'
  }
};


  constructor(private bookServiceService:BookServiceService) { }

  ngOnInit(): void {
  }

  // create function to add data to database

  
  public createNewBook(newBook:Book):void{
    this.bookServiceService.createBook(newBook);
  }

 
}



