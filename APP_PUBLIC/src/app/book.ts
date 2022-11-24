import { Component,OnInit } from "@angular/core";

export class Book {

        _id:string | undefined;
        name: string | undefined;
        author:string | undefined;
        price:number | undefined;
        image:string | undefined;
        publish_details:[{
                language: string;
                publisher: string;
                publish_date: Date;
        }] | undefined
}




