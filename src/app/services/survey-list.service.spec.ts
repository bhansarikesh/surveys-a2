import { TestBed, inject } from '@angular/core/testing';

import { SurveyListService } from './survey-list.service';

describe('SurveyListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SurveyListService]
    });
  });

  it('should be created', inject([SurveyListService], (service: SurveyListService) => {
    expect(service).toBeTruthy();
  }));
});
