import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadHelpComponent } from './read-help.component';

describe('ReadHelpComponent', () => {
  let component: ReadHelpComponent;
  let fixture: ComponentFixture<ReadHelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadHelpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReadHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
