import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Donation } from '../donation';
import { DonorService } from '../donor.service';

@Component({
  selector: 'app-donations',
  templateUrl: './donations.component.html',
  styleUrls: ['./donations.component.css']
})
export class DonationsComponent implements OnInit {

  donations: Donation[]=[];

  constructor(private donorService:DonorService,
              private router:Router) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees(){
    this.donorService.getEmployeesList().subscribe(
      data=> {
        this.donations =data;
      });
  }

  updateEmployee(id: number){
    this.router.navigate(['update-employee', id]);
  }

  employeeDetails(id: number){
    this.router.navigate(['employee-details', id]);
  }

  deleteEmployee(id: number){
    this.donorService.deleteEmployee(id).subscribe( data => {
      console.log(data);
      this.getEmployees();
    })
  }
}
