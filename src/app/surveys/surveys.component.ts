import { Component, OnInit } from '@angular/core';
import { SurveyListService } from '../services/survey-list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-surveys',
  templateUrl: './surveys.component.html',
  styleUrls: ['./surveys.component.css']
})
export class SurveysComponent implements OnInit {
  private surveyListUrl = 'https://private-anon-66405f3516-surveys7.apiary-mock.com/api/surveys';
  constructor(
    private surveyListService: SurveyListService,
    private router: Router
   ) { }

  surveyList = [];

  ngOnInit(): void {
    this.surveyListService.getRequest(this.surveyListUrl)
      .then(surveyList => {
          this.surveyList = surveyList.surveys;
          console.log('Page load');
        })
        .catch(error => {
          console.error(error);
        });
  }

  // calling from click event in html
  // getSurveyQuestions(id: string): void {
  //   this.router.navigate(['/survey',id]);
  // }
}