import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl } from '@angular/forms';
import { NewLoan } from 'src/app/shared/models/new-loan';
import { HttpService } from 'src/app/shared/services/http.service';
import { Router } from '@angular/router';
import {formatDate} from '@angular/common';

class CompleteTask {
    taskId: string;
    approved: string;
    apr: string;
    approvedBy: string;
    approvedOn: string;
    loanAmount: string;
    comments: string;
}
@Component({
    selector: 'app-loan-application-detail',
    templateUrl: './loan-application-detail.component.html',
    styleUrls: ['./loan-application-detail.component.scss']
})
export class LoanApplicationDetailComponent implements OnInit {
    @Input() public loanDetail;
    @Output() passEntry: EventEmitter<any> = new EventEmitter();

    loanForm: FormGroup;
    decisonResponse: {};
    completeTask: CompleteTask;
    isEdit: boolean;
    constructor(public modalService: NgbModal, public newLoanObj: NewLoan, private httpService: HttpService, private router: Router) {
        //this.newLoanObj.firstName = "";
        //this.newLoanObj.userId = 'test123';
        this.loanForm = new FormGroup({
            firstName: new FormControl('')
        });
        this.newLoanObj.apr = '';
        this.newLoanObj.comments = '';
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
    }

    onSubmit(form, event) {
        console.log('form:::', form, event);
        if (form.valid) {
            this.completeTask = new CompleteTask();
            this.completeTask.taskId = this.loanDetail.processInstanceId;
            this.completeTask.approved = 'true';
            this.completeTask.apr = this.newLoanObj.apr;
            this.completeTask.approvedBy = 'lurie';
            this.completeTask.approvedOn = '' + formatDate(new Date(), 'yyyy/MM/dd', 'en');
            this.completeTask.loanAmount = this.newLoanObj.loanAmount;
            this.completeTask.comments = this.newLoanObj.comments;

            this.completeApplication(this.completeTask);
        }
    }
    rejectApplication() {
            this.completeTask = new CompleteTask();
            this.completeTask.taskId = this.loanDetail.processInstanceId;
            this.completeTask.approved = 'false';
            this.completeTask.apr = this.newLoanObj.apr;
            this.completeTask.approvedBy = 'lurie';
            this.completeTask.approvedOn = '' + formatDate(new Date(), 'yyyy/MM/dd', 'en');
            this.completeTask.loanAmount = this.newLoanObj.loanAmount;
            this.completeTask.comments = this.newLoanObj.comments;

            this.completeApplication(this.completeTask);
    }
    completeApplication(input) {
        this.httpService.completeLoanApplications(input).subscribe(data => {
            console.log('Data', data);
            this.passEntry.emit('REFRESH');
            this.closeModal();
        }, error => console.log(error));
    }
}
