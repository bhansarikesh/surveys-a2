import { Component, OnInit } from '@angular/core';
import { SurveyListService } from '../services/survey-list.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
// import { Router } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  private questionsUrl = 'https://private-anon-66405f3516-surveys7.apiary-mock.com/api/surveys/';
  private btnDisabled = false;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private surveyListService: SurveyListService,
    // private router: Router
  ) { }

  survey = {
     id: '',
     title: '',
     tagline: '',
     questions: []
  };
  submitted = false;

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.surveyListService.getRequest(this.questionsUrl+params.get('id')))
      .subscribe(survey => {
        this.survey = survey.survey;
      });
  }

  onSubmit(): void {
    this.btnDisabled = true;
    const submitObject = {
      completion: [],
    };
    this.survey.questions.forEach((question) => {
      submitObject.completion.push({
        question_id: question.id,
        value: question.option,
      });
    });
    this.surveyListService.postRequest(this.questionsUrl + this.survey.id + '/completions', submitObject)
      .then(response => {
        this.btnDisabled = false;
        // this.router.navigate(['/survey',this.survey.id, 'completion']);
        this.submitted = true;
        console.log(response);
      })
      .catch(error => {
        console.error(error);
      });
  }
}
