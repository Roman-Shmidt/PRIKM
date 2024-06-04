import { TestBed } from '@angular/core/testing';

import { ClientQueueService } from './client-queue.service';

describe('ClientQueueService', () => {
  let service: ClientQueueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientQueueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
