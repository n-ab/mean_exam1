import { TestBed, inject } from '@angular/core/testing';

import { UsertablesService } from './usertables.service';

describe('UsertablesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsertablesService]
    });
  });

  it('should be created', inject([UsertablesService], (service: UsertablesService) => {
    expect(service).toBeTruthy();
  }));
});
