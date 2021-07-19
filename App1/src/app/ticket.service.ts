import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs';  
import { Ticket } from './ticket';


@Injectable({
  providedIn: 'root'
})
export class TicketService {
  ticket:any;
  BookSeat(ticket: Ticket) {
    throw new Error('Method not implemented.');
  }
  private baseUrl = "http://localhost:8085/ticket"
  constructor(private http:HttpClient) { }
  getTicketList(): Observable<any> {  
    return this.http.get(`${this.baseUrl}`+'/getTickets'); 
  } 

  bookSeat(ticket:object): Observable<object> { 
    console.log(ticket);
    return this.http.post("http://localhost:8085/ticket/bookTickets",ticket);  
  }  



















}
