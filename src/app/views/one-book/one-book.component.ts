import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Books } from 'src/app/interfaces/bookInterface';
import { Formats } from 'src/app/interfaces/formatsInterface';
import { Persons } from 'src/app/interfaces/personsInterface';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-one-book',
  templateUrl: './one-book.component.html',
  styleUrls: ['./one-book.component.css']
})
export class OneBookComponent implements OnInit {

  constructor(private bookServices:BooksService, private route:ActivatedRoute) { }
  books:Books={}
  id:number=this.route.snapshot.params['id']
  authors:Persons[]=[]
  bookshelves:[]=[]
 formats:Formats[]=[]

  getOneBook(){
    console.log(this.id)
    this.bookServices.getOneBook(this.id).subscribe({
      next:(res:any)=>{
        this.books=res
        console.log(this.books)
        this.authors=res.authors
        console.log(this.authors)
        this.bookshelves=(res.bookshelves)
        console.log(this.bookshelves)
        this.formats=res.formats
        console.log(this.formats)
    //     let bookArray=Object.keys(this.books)
    // console.log(bookArray)

      }
    })
  }



  ngOnInit(): void {
  this.getOneBook()
  // console.log(this.books.authors)
  
  }


}
