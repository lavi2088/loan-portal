import { Component, OnInit } from '@angular/core';
import { NewLoan } from 'src/app/shared/models/new-loan';
import {FormGroup, ReactiveFormsModule, FormsModule, FormControl} from '@angular/forms';
import { from } from 'rxjs';
import { HttpService } from 'src/app/shared/services/http.service';
import { routerTransition } from 'src/app/router.animations';
import { Router } from '@angular/router';
@Component({
  selector: 'app-new-loan-application',
  templateUrl: './new-loan-application.component.html',
  styleUrls: ['./new-loan-application.component.scss']
})
export class NewLoanApplicationComponent implements OnInit {
  loanForm: FormGroup;
  decisonResponse: {};
  constructor( private newLoanObj: NewLoan, private httpService: HttpService, private router: Router) {
    //this.newLoanObj.firstName = "";
    this.newLoanObj.userId = "test123";
    this.loanForm=new FormGroup({
      firstName: new FormControl('')
  });
  }

  ngOnInit() {
  }

  onSubmit(form) {
    if(form.valid) {
      this.httpService.getDecision(this.newLoanObj).subscribe(data => {
          console.log("Loan Approval Response", data);
          this.decisonResponse = data;
          this.router.navigate(['loanstatus'], { queryParams: {data: this.decisonResponse}});

      },error=> console.log("Error:",error));
    }

  }
}
