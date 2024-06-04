import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateReservationDialogComponent } from './update-reservation-dialog.component';

describe('UpdateReservationDialogComponent', () => {
  let component: UpdateReservationDialogComponent;
  let fixture: ComponentFixture<UpdateReservationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateReservationDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateReservationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
