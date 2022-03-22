import { TestBed } from '@angular/core/testing';

import { Spares4indiaService } from './spares4india.service';

describe('Spares4indiaService', () => {
  let service: Spares4indiaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Spares4indiaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
