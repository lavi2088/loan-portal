import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-loan-status',
    templateUrl: './loan-status.component.html',
    styleUrls: ['./loan-status.component.scss']
})
export class LoanStatusComponent implements OnInit {
    private customerInfo: any;
    constructor(private route: ActivatedRoute, private router: Router) {
        const navigation = this.router.getCurrentNavigation();
        if (navigation.extras.queryParams) {
            this.customerInfo = navigation.extras.queryParams;
            console.log("Data:", this.customerInfo);
        }
    }

    ngOnInit() {
    }
}
