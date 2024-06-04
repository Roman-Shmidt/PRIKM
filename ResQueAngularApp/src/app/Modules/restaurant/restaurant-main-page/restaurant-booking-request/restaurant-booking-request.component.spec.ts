import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantBookingRequestComponent } from './restaurant-booking-request.component';

describe('RestaurantBookingRequestComponent', () => {
  let component: RestaurantBookingRequestComponent;
  let fixture: ComponentFixture<RestaurantBookingRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantBookingRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestaurantBookingRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
