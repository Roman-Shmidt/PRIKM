import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeBookingDialogComponent } from './make-booking-dialog.component';

describe('MakeBookingDialogComponent', () => {
  let component: MakeBookingDialogComponent;
  let fixture: ComponentFixture<MakeBookingDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MakeBookingDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MakeBookingDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
