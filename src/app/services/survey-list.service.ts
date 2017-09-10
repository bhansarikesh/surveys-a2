import { Injectable } from '@angular/core';
import { Survey } from '../survey';

import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class SurveyListService {  
  constructor(private http: Http) { }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  getRequest(url: string): Promise<any> {
    console.log(url);
    return this.http.get(url)
      .toPromise()
      .then(response => {
        return Promise.resolve(response.json());
      })
      .catch(this.handleError);
  }

  postRequest(url: string, postObj: {}): Promise<any> {
    console.log(url, postObj);
    return this.http.post(url, postObj)
      .toPromise()
      .then(response => {
        return Promise.resolve(response.json());
      })
      .catch(this.handleError);
  }
}
