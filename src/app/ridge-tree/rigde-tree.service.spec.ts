import { TestBed } from '@angular/core/testing';

import { RigdeTreeService } from './rigde-tree.service';

describe('RigdeTreeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RigdeTreeService = TestBed.get(RigdeTreeService);
    expect(service).toBeTruthy();
  });
});
