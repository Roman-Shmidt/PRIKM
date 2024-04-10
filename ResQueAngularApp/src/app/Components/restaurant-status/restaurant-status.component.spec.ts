import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantStatusComponent } from './restaurant-status.component';

describe('RestaurantStatusComponent', () => {
  let component: RestaurantStatusComponent;
  let fixture: ComponentFixture<RestaurantStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestaurantStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
