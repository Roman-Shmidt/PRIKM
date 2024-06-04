import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantTileComponent } from './restaurant-tile.component';

describe('RestaurantTileComponent', () => {
  let component: RestaurantTileComponent;
  let fixture: ComponentFixture<RestaurantTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantTileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestaurantTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
