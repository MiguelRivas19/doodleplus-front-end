import { TestBed } from '@angular/core/testing';

import { DoodlegeneratorService } from './doodlegenerator.service';

describe('DoodlegeneratorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DoodlegeneratorService = TestBed.get(DoodlegeneratorService);
    expect(service).toBeTruthy();
  });
});
