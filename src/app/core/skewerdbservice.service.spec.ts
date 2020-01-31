import { TestBed } from '@angular/core/testing';

import { SkewerdbService } from './skewerdbservice.service';

describe('SkewerdbserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SkewerdbService = TestBed.get(SkewerdbService);
    expect(service).toBeTruthy();
  });
});
