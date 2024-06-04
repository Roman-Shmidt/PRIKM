import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsInfoContainerComponent } from './details-info-container.component';

describe('DetailsInfoContainerComponent', () => {
  let component: DetailsInfoContainerComponent;
  let fixture: ComponentFixture<DetailsInfoContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsInfoContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsInfoContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
