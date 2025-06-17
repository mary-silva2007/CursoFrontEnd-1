import { TestBed } from '@angular/core/testing';

import { CurriculoServiceTsService } from './curriculo.service.ts.service';

describe('CurriculoServiceTsService', () => {
  let service: CurriculoServiceTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurriculoServiceTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
