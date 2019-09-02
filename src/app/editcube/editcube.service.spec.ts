import { TestBed } from '@angular/core/testing';

import { EditcubeService } from './editcube.service';

describe('EditcubeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EditcubeService = TestBed.get(EditcubeService);
    expect(service).toBeTruthy();
  });
});
