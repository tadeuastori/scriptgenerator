import { TestBed } from '@angular/core/testing';

import { NewcubeService } from './newcube.service';

describe('NewcubeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewcubeService = TestBed.get(NewcubeService);
    expect(service).toBeTruthy();
  });
});
