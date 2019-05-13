import { TestBed } from '@angular/core/testing';

import { DoodleshareService } from './doodleshare.service';

describe('DoodleshareService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DoodleshareService = TestBed.get(DoodleshareService);
    expect(service).toBeTruthy();
  });
});
