import { TestBed } from '@angular/core/testing';

import { MigratingService } from './migrating.service';

describe('MigratingService', () => {
  let service: MigratingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MigratingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
