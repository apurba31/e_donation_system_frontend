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
  donors: Donor = new Donor();
  donor:Donor = new Donor();
  donorNames: {}|any;
  constructor(private donorService:DonorService,
              private router:Router) { }

  ngOnInit(): void {
    this.getDonorNameList();
  }

  saveDonor(){
    this.donorService.createDonor(this.donor).subscribe(
      data => {
        console.log(data);
        //this.router.navigate(['/create-donor']);
      },
      error => console.log(error));
  }

  onSubmit(){
    console.log(this.donors);
    // this.saveEmployee();
    this.saveDonor();
    this.router.navigate(['/create-donor']);
  }

  getDonorNameList(){
    this.donorService.getDonorNameList().subscribe(
      data => {
        console.log(data);
        this.donorNames = data;
      }
    );
  }
}
