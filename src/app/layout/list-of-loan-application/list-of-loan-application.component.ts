import { Component, OnInit } from '@angular/core';
import { ApplicationDetailsComponent } from '../application-details/application-details.component';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpService } from 'src/app/shared/services/http.service';

interface LoanApplication {
    id?: string;
    name: string;
    loanamount: string;
    apr: string;
    status: string;
}

let LOANAPPLICATIONS: LoanApplication[] = [
    {
        id: 'LN6001',
        name: 'David Gray',
        loanamount: '20000 USD',
        apr: '5.2%',
        status: 'Approved'
    },
    {
        id: 'LN6010',
        name: 'David Gray',
        loanamount: '2500 USD',
        apr: 'N/A',
        status: 'In Review'
    },
    {
        id: 'LN6025',
        name: 'David Gray',
        loanamount: '8000 USD',
        apr: 'N/A',
        status: 'Declined'
    },
    {
        id: 'LN6032',
        name: 'David Gray',
        loanamount: '6000 USD',
        apr: '3.2%',
        status: 'Approved'
    },
    {
        id: 'LN6041',
        name: 'David Gray',
        loanamount: '50000 USD',
        apr: '3.2%',
        status: 'Approved'
    }
];

@Component({
    selector: 'app-list-of-loan-application',
    templateUrl: './list-of-loan-application.component.html',
    styleUrls: ['./list-of-loan-application.component.scss']
})
export class ListOfLoanApplicationComponent implements OnInit {
    page = 1;
    pageSize = 4;
    collectionSize = LOANAPPLICATIONS.length;
    loanApplications = [];

    constructor(config: NgbModalConfig, private modalService: NgbModal, private httpService: HttpService) {
        this.getAllLoanApplication("test123");
    }

    ngOnInit() {}

    get getLoanApp(): LoanApplication[] {
        return this.loanApplications.map((loanapp, i) => ({ id: '' + i + 1, ...loanapp })).slice(
            (this.page - 1) * this.pageSize,
            (this.page - 1) * this.pageSize + this.pageSize
        );
    }

    getAllLoanApplication(inputParam) {
        this.httpService.getAllLoanApplicationsForUser(inputParam).subscribe(
            data => {
                console.log('Loan Application Response', data);
                this.loanApplications = data;
            },
            error => console.log('Error:', error)
        );
    }

    rowClicked(rowData) {
        const modalRef = this.modalService.open(ApplicationDetailsComponent, { size: 'lg' });
        modalRef.componentInstance.loanDetail = rowData;
        modalRef.result.then((data: any) => {}, (reason: any) => {});
        modalRef.componentInstance.passEntry.subscribe((receivedEntry) => {
            console.log(receivedEntry);
        });
    }
}
