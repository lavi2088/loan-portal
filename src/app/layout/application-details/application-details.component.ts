import { Component, OnInit, TemplateRef, Input, Output, EventEmitter } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl } from '@angular/forms';
import { NewLoan } from 'src/app/shared/models/new-loan';
import { HttpService } from 'src/app/shared/services/http.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-application-details',
    templateUrl: './application-details.component.html',
    styleUrls: ['./application-details.component.scss'],
    providers: []
})
export class ApplicationDetailsComponent implements OnInit {
    @Input() public loanDetail;
    @Output() passEntry: EventEmitter<any> = new EventEmitter();

    loanForm: FormGroup;
    decisonResponse: {};
    isEdit: boolean;
    constructor(public modalService: NgbModal, public newLoanObj: NewLoan, private httpService: HttpService, private router: Router) {
        //this.newLoanObj.firstName = "";
        this.newLoanObj.userId = 'test123';
        this.loanForm = new FormGroup({
            firstName: new FormControl('')
        });
    }

    ngOnInit() {
        console.log(this.loanDetail);
        this.newLoanObj.firstName = this.loanDetail.firstName;
        this.newLoanObj.lastName = this.loanDetail.lastName;
        this.newLoanObj.address = this.loanDetail.address;
        this.newLoanObj.SSN = this.loanDetail.socialSecurityNumber;
        this.newLoanObj.income = this.loanDetail.income;
        this.newLoanObj.creditScore = this.loanDetail.creditScore;
        this.newLoanObj.loanAmount = this.loanDetail.loanAmount;
        this.newLoanObj.email = this.loanDetail.email;
    }
    openModal(content) {
        this.modalService.open(content);
    }
    closeModal() {
        this.modalService.dismissAll();
        this.passEntry.emit(this.loanDetail);
    }

    onSubmit(form) {
        if (form.valid) {
            this.httpService.getDecision(this.newLoanObj).subscribe(
                data => {
                    console.log('Loan Approval Response', data);
                    this.decisonResponse = data;
                    this.router.navigate(['loanstatus'], { queryParams: { data: this.decisonResponse } });
                },
                error => console.log('Error:', error)
            );
        }
    }
}
