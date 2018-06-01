import { TestBed, inject } from '@angular/core/testing';

import { OmdbApiService } from './omdb-api.service';

describe('OmdbApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OmdbApiService]
    });
  });

  it('should be created', inject([OmdbApiService], (service: OmdbApiService) => {
    expect(service).toBeTruthy();
  }));
});
