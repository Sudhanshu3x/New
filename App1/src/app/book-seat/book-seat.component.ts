import { Component, OnInit, ɵɵtrustConstantResourceUrl } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Ticket } from '../ticket';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-book-seat',
  templateUrl: './book-seat.component.html',
  styleUrls: ['./book-seat.component.css']
})
export class BookSeatComponent implements OnInit {
 
  id=0;
  amount = "970";
  source: string= "";
  destination: string ="";
  category: string= "AC";
 
  constructor(private ticketservice:TicketService) { }

  submitted=false;

  ngOnInit() {  
    this.submitted=false;  
  }  
 
  save() {
    let t = {
      t_id: this.id, category: this.category, source: this.source, destination: this.destination, amount: this.amount
    }
    console.log(t);
    this.ticketservice.bookSeat(t)  
      .subscribe((data: any) => {console.log(data),this.ticketservice.ticket = data},(error: any) => console.log(error));  
       
  }
  
}
