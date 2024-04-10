import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantBookingHistoryComponent } from './restaurant-booking-history.component';

describe('RestaurantBookingHistoryComponent', () => {
  let component: RestaurantBookingHistoryComponent;
  let fixture: ComponentFixture<RestaurantBookingHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantBookingHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestaurantBookingHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
