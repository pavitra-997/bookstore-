import { Component, OnInit } from '@angular/core';
import { BookServiceService } from '../book-service.service';
import { Book } from '../book';
import { ActivatedRoute,Params,Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  providers:[BookServiceService]
})
export class DetailsComponent implements OnInit {

  constructor(
    private bookServiceService:BookServiceService,
    private route:ActivatedRoute,
    private router:Router
  ) { }

  newBook:Book;
  bookid:string;

  // header for details page 

  pageContent={
    header:{
      title:'KNOW MORE',
      body:'Find your favourites here'
    }
  };


  ngOnInit(): void {

    // function to retrieve single data from database
    this.route.params.pipe(
      switchMap((params: Params)=>{
      return this.bookServiceService.getSingleBook(params['bookid'])
      })
      ).subscribe((newBook : Book)=>{
      this.newBook = newBook;
      });
      this.bookid = this.route.snapshot.params['bookid'];
      // this.bookServiceService.getSingleBook(this.bookid).subscribe((data: Book)=>{
      //   this.newBook = data;
      //   console.log(this.newBook);
      // })
}

//// function to update data from database

  update(newBook: Book){
    this.bookServiceService.updateBook(this.bookid, newBook).subscribe((res:any) => {
         console.log('Post updated successfully!');
         this.router.navigateByUrl('/list');
    })
  }

  // function to delete data from database
  delete(bookid:string){
    this.bookServiceService.delete(bookid).subscribe(res => {
         console.log('Post deleted successfully!');
         this.router.navigateByUrl('/list');
    })
  }

  /////function to open update form on button click

  
  Openform()
  {
    document.getElementById('updateForm').style.display ='block';
    document.getElementById('updateButton').style.display ='none';
  } 

}
