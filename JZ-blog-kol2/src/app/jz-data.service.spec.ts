import { TestBed } from '@angular/core/testing';

import { JZDataService } from './jz-data.service';

describe('JZDataService', () => {
  let service: JZDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JZDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
