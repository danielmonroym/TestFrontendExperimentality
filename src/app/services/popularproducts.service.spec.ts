import { TestBed } from '@angular/core/testing';

import { PopularproductsService } from './popularproducts.service';

describe('PopularproductsService', () => {
  let service: PopularproductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PopularproductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
