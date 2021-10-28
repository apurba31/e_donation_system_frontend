import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FetchDonorDetailsComponent } from './fetch-donor-details/fetch-donor-details.component';
import { DonationsComponent } from './donations/donations.component';

const routes: Routes = [
  {path: 'donations', component: DonationsComponent},
  {path: 'fetch-donor-details', component:FetchDonorDetailsComponent },
  {path: '', redirectTo: 'fetch-donor-details', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
