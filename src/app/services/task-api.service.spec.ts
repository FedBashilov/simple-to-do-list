import { TestBed } from '@angular/core/testing';

import { TaskAPIService } from './task-api.service';

describe('TaskAPIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TaskAPIService = TestBed.get(TaskAPIService);
    expect(service).toBeTruthy();
  });
});
