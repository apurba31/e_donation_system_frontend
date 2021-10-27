import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Donation } from '../donation';
import { DonationService } from '../donation.service';
import { DonorService } from '../donor.service';

@Component({
  selector: 'app-donations',
  templateUrl: './donations.component.html',
  styleUrls: ['./donations.component.css']
})
export class DonationsComponent implements OnInit {

  donations: Donation[]=[];

  constructor(private donationService:DonationService,
              private router:Router) { }

  ngOnInit(): void {
    this.getDonations();
  }

  getDonations(){
    this.donationService.getDonationsList().subscribe(
      data => {
        console.log(data);
        this.donations = data;
      }
    );
  }

}
