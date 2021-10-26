import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateDonorComponent } from './create-donor/create-donor.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { DonationsComponent } from './donations/donations.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';

const routes: Routes = [
  {path: 'donations', component: DonationsComponent},
  {path: 'create-donor', component:CreateDonorComponent },
  {path: '', redirectTo: 'create-donor', pathMatch: 'full'},
  {path: 'update-employee/:id', component:UpdateEmployeeComponent},
  {path: 'employee-details/:id', component:EmployeeDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
