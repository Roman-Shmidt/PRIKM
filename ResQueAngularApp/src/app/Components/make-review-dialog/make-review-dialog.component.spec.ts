import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeReviewDialogComponent } from './make-review-dialog.component';

describe('MakeReviewDialogComponent', () => {
  let component: MakeReviewDialogComponent;
  let fixture: ComponentFixture<MakeReviewDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MakeReviewDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MakeReviewDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
