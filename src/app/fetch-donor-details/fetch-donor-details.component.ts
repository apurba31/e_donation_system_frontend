import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Donation } from '../donation';
import { DonationService } from '../donation.service';
import { Donor } from '../donor';
import { DonorService } from '../donor.service';

@Component({
  selector: 'fetch-donor-details',
  templateUrl: './fetch-donor-details.component.html',
  styleUrls: ['./fetch-donor-details.component.css']
})
export class FetchDonorDetailsComponent implements OnInit {

  donors: Donor = new Donor();
  donations: Donation[]=[];
  donation: Donation = new Donation();
  donationSelected: number = 0;
  constructor(private donorService:DonorService,
          private donationService:DonationService,
              private router:Router) { }

  ngOnInit(): void {
     this.getDonations();
  }

  onSubmit(){
    console.log(this.donations);
    this.getDonations();
  }

  onDonorSelected(value:any){
    // console.log(this.getDonations())
    // this.getDonations();
    console.log(this.getDonationsById)
    this.getDonationsById(value);
  }

  getDonations(){
    this.donationService.getDonationsList().subscribe(
      data => {
        console.log(data);
        this.donations = data;
      }
    );
  }

  getDonationsById(id:number){
    this.donationService.getDonationById(id).subscribe(
      next => {
        console.log(next);
        this.donation = next;
      }
    );
  }
}
