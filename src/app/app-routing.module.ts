import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { SurveysComponent } from './surveys/surveys.component';
import { QuestionsComponent } from './questions/questions.component';
import { CompletionComponent } from './completion/completion.component';
 
const routes: Routes = [
  { path: '', redirectTo: '/surveys', pathMatch: 'full' },
  { path: 'surveys', component: SurveysComponent },
  { path: 'survey/:id', component: QuestionsComponent },
  { path: 'survey/:id/completion', component: CompletionComponent }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}