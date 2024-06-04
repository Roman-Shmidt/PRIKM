import { TestBed } from '@angular/core/testing';

import { ClientMenuService } from './client-menu.service';

describe('ClientMenuService', () => {
  let service: ClientMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
