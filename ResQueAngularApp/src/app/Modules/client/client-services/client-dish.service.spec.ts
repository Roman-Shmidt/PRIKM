import { TestBed } from '@angular/core/testing';

import { ClientDishService } from './client-dish.service';

describe('ClientDishService', () => {
  let service: ClientDishService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientDishService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
