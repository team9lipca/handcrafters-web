import { TestBed, inject } from '@angular/core/testing';

import { CraftersService } from './crafters.service';

describe('CraftersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CraftersService]
    });
  });

  it('should be created', inject([CraftersService], (service: CraftersService) => {
    expect(service).toBeTruthy();
  }));
});
