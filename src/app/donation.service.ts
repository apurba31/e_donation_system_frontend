import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Donation } from './donation';

@Injectable({
  providedIn: 'root'
})
export class DonationService {

  // private baseUrl = "http://localhost:8080/e-donation/api/v1";
  private testUrl = "http://localhost:3000/donation";
  private newUrl = "localhost:8080/donations/by-id";

  constructor(private http:HttpClient) { }

  //get donations list
  getDonationsList(): Observable<Donation[]>{
    return this.http.get<Donation[]>(`${this.testUrl}`);
    //   return this.http.get<Donation>(`${this.baseUrl}/${id}`);
  }

  // get donation by id
  getDonationById(id: number): Observable<Donation>{
    return this.http.get<Donation>(`${this.testUrl}/${id}`);
  } 
}
