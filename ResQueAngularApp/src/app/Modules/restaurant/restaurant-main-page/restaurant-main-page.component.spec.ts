import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantMainPageComponent } from './restaurant-main-page.component';

describe('RestaurantMainPageComponent', () => {
  let component: RestaurantMainPageComponent;
  let fixture: ComponentFixture<RestaurantMainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantMainPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestaurantMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
