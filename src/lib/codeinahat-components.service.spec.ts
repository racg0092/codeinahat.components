import { TestBed } from '@angular/core/testing';

import { CodeinahatComponentsService } from './codeinahat-components.service';

describe('CodeinahatComponentsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CodeinahatComponentsService = TestBed.get(CodeinahatComponentsService);
    expect(service).toBeTruthy();
  });
});
