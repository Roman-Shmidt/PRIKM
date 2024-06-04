import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantQueueComponent } from './restaurant-queue.component';

describe('RestaurantQueueComponent', () => {
  let component: RestaurantQueueComponent;
  let fixture: ComponentFixture<RestaurantQueueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantQueueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestaurantQueueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
