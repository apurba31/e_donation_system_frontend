import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Donation } from '../donation';
import { Donor } from '../donor';
import { DonorService } from '../donor.service';

@Component({
  selector: 'app-create-fonor',
  templateUrl: './create-donor.component.html',
  styleUrls: ['./create-donor.component.css']
})
export class CreateDonorComponent implements OnInit {

  donation: Donation = new Donation();
  donor: Donor = new Donor();
  constructor(private donorService:DonorService,
              private router:Router) { }

  ngOnInit(): void {
  }

  saveEmployee(){
    this.donorService.createEmployee(this.donation).subscribe(
      data => { 
        console.log(data);
        this.goToEmployeeList();
      },
      error => console.log(error));
  }

  goToEmployeeList(){
    this.router.navigate(['/donations']);
  }

  onSubmit(){
    console.log(this.donor);
    // this.saveEmployee();
    this.router.navigate(['/create-donor']);
  }
}
