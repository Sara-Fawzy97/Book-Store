import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllBooksComponent } from './views/all-books/all-books.component';
import { OneBookComponent } from './views/one-book/one-book.component';

const routes: Routes = [
  {path:'',component:AllBooksComponent},
  {path:'book/:id',component:OneBookComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
