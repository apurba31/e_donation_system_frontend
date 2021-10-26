import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Donation } from './donation';

@Injectable({
  providedIn: 'root'
})
export class DonorService {

  private baseUrl = "http://localhost:8080/e-donation/api/v1";

  constructor(private http:HttpClient) { }

  //get all employees
  getEmployeesList(): Observable<Donation[]>{
      return this.http.get<Donation[]>(`${this.baseUrl}`)
  }

  //create employee rest api
  createEmployee(donation: Donation): Observable<Object>{
      return this.http.post(`${this.baseUrl}`, donation);
  }

  //update employee by id
  updateEmployee(id: number, donation:Donation): Observable<Object>{
    return this.http.put(`${this.baseUrl}/${id}`, donation);
  }

  //delete employee by id
  deleteEmployee(id: number): Observable<Object>{
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  getEmployeeById(id: number): Observable<Donation>{
    return this.http.get<Donation>(`${this.baseUrl}/${id}`);
  }
}
