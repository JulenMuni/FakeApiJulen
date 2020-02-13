import { TestBed } from '@angular/core/testing';

import { MoviecrudService } from './moviecrud.service';

describe('MoviecrudService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MoviecrudService = TestBed.get(MoviecrudService);
    expect(service).toBeTruthy();
  });
});
