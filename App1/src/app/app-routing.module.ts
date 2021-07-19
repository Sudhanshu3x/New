import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookSeatComponent } from './book-seat/book-seat.component';

const routes: Routes = [
  { path: '', redirectTo: 'book-seat', pathMatch: 'full' },  
  { path: 'book-seat', component: BookSeatComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
