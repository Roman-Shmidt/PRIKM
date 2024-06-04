import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadReviewsDialogComponent } from './read-reviews-dialog.component';

describe('ReadReviewsDialogComponent', () => {
  let component: ReadReviewsDialogComponent;
  let fixture: ComponentFixture<ReadReviewsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadReviewsDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReadReviewsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
