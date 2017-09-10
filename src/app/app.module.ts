import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { SurveyListService } from './services/survey-list.service';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SurveysComponent } from './surveys/surveys.component';
import { QuestionsComponent } from './questions/questions.component';

@NgModule({
  declarations: [
    AppComponent,
    SurveysComponent,
    QuestionsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [SurveyListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
