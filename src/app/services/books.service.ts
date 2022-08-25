import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Books } from '../interfaces/bookInterface';
import { catchError, map, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  url="http://gutendex.com/books/"

  constructor(private httpClient:HttpClient) { }

  //to get all api
  getAllAPI(){
    return this.httpClient.get<Books[]>(this.url)
  }

//to get book data array
  getAllBooks(){
    return this.httpClient.get<Books[]>(this.url).pipe(map((books:any)=>books.results),catchError(error => { return throwError('Its a Trap!')}));
  }

  

  getOneBook(id:number){
    return this.httpClient.get(this.url+id)
  }
}
