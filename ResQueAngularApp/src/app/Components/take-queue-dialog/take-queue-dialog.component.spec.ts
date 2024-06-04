import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeQueueDialogComponent } from './take-queue-dialog.component';

describe('TakeQueueDialogComponent', () => {
  let component: TakeQueueDialogComponent;
  let fixture: ComponentFixture<TakeQueueDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TakeQueueDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TakeQueueDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
