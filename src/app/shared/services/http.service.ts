import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseUrl: string;
  // Http Options
  httpOptions = {};

  constructor(private httpClient: HttpClient) {
    //this.baseUrl = "http://drools-springboot-msk-sample.apps.us-west-2.online-starter.openshift.com/api";
    //this.baseUrl = 'http://camunda-apii-camunda-api.b9ad.pro-us-east-1.openshiftapps.com/API';
    this.baseUrl = 'http://camunda-cors-camunda.b9ad.pro-us-east-1.openshiftapps.com/API/bpm';
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'access-control-allow-origin': '*'
      })
    }
  }

  getDecision(inputParam): Observable<any> {

    return this.httpClient.post(this.baseUrl+`/loanApproval/process/startProcess`, JSON.stringify(inputParam), this.httpOptions);
  }

  getAllLoanApplications(inputParam): Observable<any> {

    return this.httpClient.post(this.baseUrl +`/allApplicationDetails`, JSON.stringify(inputParam), this.httpOptions);
  }

  getAllLoanApplicationsForUser(inputParam): Observable<any> {

    return this.httpClient.get(this.baseUrl +`/allApplicationDetailsByUser?userId=` + inputParam);
  }

  completeLoanApplications(inputParam): Observable<any> {

    return this.httpClient.post(this.baseUrl+`/loanApproval/task/completeTask`, JSON.stringify(inputParam), this.httpOptions);
  }
}
