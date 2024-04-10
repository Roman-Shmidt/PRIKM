import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadClientReservationQueueComponent } from './read-client-reservation-queue.component';

describe('ReadClientReservationQueueComponent', () => {
  let component: ReadClientReservationQueueComponent;
  let fixture: ComponentFixture<ReadClientReservationQueueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadClientReservationQueueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReadClientReservationQueueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
