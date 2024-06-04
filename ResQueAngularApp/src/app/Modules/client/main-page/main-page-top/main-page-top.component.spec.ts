import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageTopComponent } from './main-page-top.component';

describe('MainPageTopComponent', () => {
  let component: MainPageTopComponent;
  let fixture: ComponentFixture<MainPageTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPageTopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainPageTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
