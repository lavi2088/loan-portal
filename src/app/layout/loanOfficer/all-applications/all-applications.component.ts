import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/shared/services/http.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoanApplicationDetailComponent } from '../loan-application-detail/loan-application-detail.component';

@Component({
    selector: 'app-all-applications',
    templateUrl: './all-applications.component.html',
    styleUrls: ['./all-applications.component.scss']
})
export class AllApplicationsComponent implements OnInit {
    page = 1;
    pageSize = 4;
    loanApplications = [];
    collectionSize = this.loanApplications.length;
    constructor( private httpService: HttpService, config: NgbModalConfig, private modalService: NgbModal) {
        this.getAllLoanApplication({"processDefinition": "loanApproval"});
    }

    ngOnInit() {}

    getAllLoanApplication(inputParam) {
        this.httpService.getAllLoanApplications(inputParam).subscribe(data => {
            console.log("Loan Application Response", data);
            this.loanApplications = data;

        },error=> console.log('Error:',error));
    }
    rowClicked(rowData) {
        const modalRef = this.modalService.open(LoanApplicationDetailComponent, { size: 'lg' });
        modalRef.componentInstance.loanDetail = rowData;
        modalRef.result.then((data: any) => {}, (reason: any) => {});
        modalRef.componentInstance.passEntry.subscribe((receivedEntry) => {
            console.log("Data Received:",receivedEntry);
            if(receivedEntry === "REFRESH") {
                this.getAllLoanApplication({"processDefinition": "loanApproval"});
            }
        });
    }
}
