import { Component, OnInit } from '@angular/core';
import { Books } from 'src/app/interfaces/bookInterface';
import { Formats } from 'src/app/interfaces/formatsInterface';
import { Persons } from 'src/app/interfaces/personsInterface';
import { Results } from 'src/app/interfaces/resultsInterface';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.css']
})
export class AllBooksComponent implements OnInit {
books:Books[]=[]
// person:Persons[]=[]
Api:Books={}
formats:Formats={}


page:number=1
count:number=0
size:number=12

  constructor(private booksService:BooksService) { }

  getApi(){
     this.booksService.getAllAPI().subscribe({
      next:(res:any)=>{
        this.Api=res
        console.log(this.Api)
      }
     })
  }

  getBooks(){
    this.booksService.getAllBooks().subscribe({    
    next:(res:any)=>{
    // console.log(res);
    // this.results=res
    this.books=res
    console.log(this.books)
    // this.formats=res.v
    console.log(this.formats)
    // let bookArray=Object.keys(this.books)
    // console.log(bookArray)
   
   
   } })
}



onDataChange(event:any){
  this.page=event
  this.getBooks();
}

  ngOnInit(): void {
    this.getApi()
    this.getBooks()
   
// console.log(this.books)
  }

}
