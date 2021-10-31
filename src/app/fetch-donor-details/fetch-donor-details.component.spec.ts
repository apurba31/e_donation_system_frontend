import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FetchDonorDetailsComponent } from './fetch-donor-details.component';

describe('CreateEmployeeComponent', () => {
  let component: FetchDonorDetailsComponent;
  let fixture: ComponentFixture<FetchDonorDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FetchDonorDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FetchDonorDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
