import { TestBed } from '@angular/core/testing';

import { GeneralLogicService } from './general-logic.service';

describe('GeneralLogicService', () => {
  let service: GeneralLogicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeneralLogicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
