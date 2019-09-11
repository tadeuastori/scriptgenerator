import { TestBed } from '@angular/core/testing';

import { FunctioncontrolService } from './functioncontrol.service';

describe('FunctioncontrolService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FunctioncontrolService = TestBed.get(FunctioncontrolService);
    expect(service).toBeTruthy();
  });
});
