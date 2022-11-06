import { TestBed } from '@angular/core/testing';

import { NoticesServiceService } from './notices-service.service';

describe('NoticesServiceService', () => {
  let service: NoticesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NoticesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
