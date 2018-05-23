import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { HashtagService } from './hashtag.service';

describe('HashtagService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [HashtagService]
    });
  });

  it('should be created', inject([HashtagService], (service: HashtagService) => {
    expect(service).toBeTruthy();
  }));
});
