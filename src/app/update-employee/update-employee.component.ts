import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Donation } from '../donation';
import { DonorService } from '../donor.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  id: number;
  donation: Donation = new Donation();
  constructor(private donorService: DonorService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.donorService.getEmployeeById(this.id).subscribe(data =>{
       this.donation = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.donorService.updateEmployee(this.id, this.donation).subscribe(
      data => {
        this.goToEmployeeList();
      },
      error => console.log(error));
  }

  goToEmployeeList(){
    this.router.navigate(['/employees']);
  }
}
