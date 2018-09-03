import { TestBed, inject } from '@angular/core/testing';

import { ShoutcastService } from './shoutcast.service';

describe('ShoutcastService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShoutcastService]
    });
  });

  it('should be created', inject([ShoutcastService], (service: ShoutcastService) => {
    expect(service).toBeTruthy();
  }));
});
