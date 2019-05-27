import { TestBed } from '@angular/core/testing';

import { NewbookService } from './newbook.service';

describe('NewbookService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewbookService = TestBed.get(NewbookService);
    expect(service).toBeTruthy();
  });
});
