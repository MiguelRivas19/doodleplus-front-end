import { TestBed } from '@angular/core/testing';

import { DoodleapiService } from './doodleapi.service';

describe('DoodleapiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DoodleapiService = TestBed.get(DoodleapiService);
    expect(service).toBeTruthy();
  });
});
