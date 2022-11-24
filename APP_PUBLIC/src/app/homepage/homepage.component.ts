import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
///////header for homepage


  pageContent={
    header:{
      title:'THE BOOK HOUSE',
      body:'The Arsenal Of Words'
    }
  };

}
