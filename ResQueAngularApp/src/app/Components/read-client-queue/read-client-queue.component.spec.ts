import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadClientQueueComponent } from './read-client-queue.component';

describe('ReadClientQueueComponent', () => {
  let component: ReadClientQueueComponent;
  let fixture: ComponentFixture<ReadClientQueueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadClientQueueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReadClientQueueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
