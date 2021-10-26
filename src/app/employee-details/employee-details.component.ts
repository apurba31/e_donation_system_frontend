import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Donation } from '../donation';
import { DonorService } from '../donor.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  id: number;
  donation: Donation;
  constructor(private route: ActivatedRoute,
              private donorService: DonorService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.donation = new Donation();
    this.donorService.getEmployeeById(this.id).subscribe( 
      data => {
        this.donation = data;
      });
  }

}
