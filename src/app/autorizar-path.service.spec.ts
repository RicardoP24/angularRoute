import { TestBed } from '@angular/core/testing';

import { AutorizarPathService } from './autorizar-path.service';

describe('AutorizarPathService', () => {
  let service: AutorizarPathService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutorizarPathService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
