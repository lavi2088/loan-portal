(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["loanOfficer-all-applications-all-applications-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/layout/loanOfficer/all-applications/all-applications.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layout/loanOfficer/all-applications/all-applications.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"loan-container\">\n  <div class=\"loan-title\">List of applications</div>\n    <div class=\"loan-body\">\n  <table class=\"table table-striped\">\n    <thead>\n      <tr>\n        <th scope=\"col\">Case Id</th>\n        <th scope=\"col\">Name</th>\n        <th scope=\"col\">Loan Amount</th>\n        <th scope=\"col\">Credit Score</th>\n        <th scope=\"col\">Income</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let loanApp of loanApplications\" (click)=\"rowClicked(loanApp)\">\n        <th scope=\"row\">{{ loanApp.userId }}</th>\n        <td>\n          {{ loanApp.firstName + ' ' + loanApp.lastName }}\n        </td>\n        <td>{{ loanApp.loanAmount}}</td>\n        <td>{{ loanApp.creditScore }}</td>\n        <td\n          [ngClass]=\"{'text-success': loanApp.status == 'Approved', 'text-warning': loanApp.status == 'In Review', 'text-danger': loanApp.status == 'Declined'}\">\n          {{ loanApp.income }}</td>\n      </tr>\n    </tbody>\n  </table>\n\n  <div class=\"d-flex justify-content-between p-2\">\n    <!-- <ngb-pagination [collectionSize]=\"collectionSize\" [(page)]=\"page\" [pageSize]=\"pageSize\">\n  </ngb-pagination> -->\n\n    <select class=\"custom-select\" style=\"width: auto\" [(ngModel)]=\"pageSize\">\n      <option [ngValue]=\"2\">2 items per page</option>\n      <option [ngValue]=\"4\">4 items per page</option>\n      <option [ngValue]=\"6\">6 items per page</option>\n    </select>\n  </div>\n</div>\n</div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layout/loanOfficer/loan-application-detail/loan-application-detail.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layout/loanOfficer/loan-application-detail/loan-application-detail.component.html ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n    <h4 class=\"modal-title\">Application Detail</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"closeModal()\">\n        <span aria-hidden=\"true\">&times;</span>\n    </button>\n</div>\n<div class=\"modal-body loan-container\">\n    <!-- <form (ngSubmit)=\"f.form.valid && submitBtn(f)\" #f=\"ngForm\" autocomplete=\"off\" novalidate> -->\n            <div class=\"loan-body p-10\">\n        <form novalidate (ngSubmit)=\"onSubmit(f, $event)\" #f=\"ngForm\">\n        <div class=\"row\">\n            <div class=\"col-12 col-md\">\n                <div class=\"form-group\">\n                    <div class=\"form-group\">\n                        <label>First Name</label>\n                        <input\n                            type=\"text\"\n                            class=\"form-control\"\n                            name=\"firstName\"\n                            [(ngModel)]=\"newLoanObj.firstName\"\n                            required\n                            #firstName=\"ngModel\"\n                            [disabled]=\"1\"\n                        />\n                        <div class=\"text-danger\" *ngIf=\"firstName.errors && (firstName.dirty || firstName.touched)\">\n                            <p *ngIf=\"firstName.errors.required\">First name is required</p>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <div\n                        class=\"form-group\"\n                        [ngClass]=\"{\n                            'has-danger': lastName.invalid && (lastName.dirty || lastName.touched),\n                            'has-success': lastName.valid && (lastName.dirty || lastName.touched)\n                        }\"\n                    >\n                        <label>Last Name</label>\n                        <input\n                            type=\"text\"\n                            class=\"form-control\"\n                            name=\"lastName\"\n                            [(ngModel)]=\"newLoanObj.lastName\"\n                            required\n                            #lastName=\"ngModel\"\n                            [disabled]=\"1\"\n                        />\n                        <div class=\"text-danger\" *ngIf=\"lastName.errors && (lastName.dirty || lastName.touched)\">\n                            <p *ngIf=\"lastName.errors.required\">Last name is required</p>\n                        </div>\n                    </div>\n                </div>\n\n                <div\n                    class=\"form-group\"\n                    [ngClass]=\"{\n                        'has-danger': ssn.invalid && (ssn.dirty || ssn.touched),\n                        'has-success': ssn.valid && (ssn.dirty || ssn.touched)\n                    }\"\n                >\n                    <label>SSN</label>\n                    <input\n                        type=\"text\"\n                        class=\"form-control\"\n                        name=\"ssn\"\n                        [(ngModel)]=\"newLoanObj.SSN\"\n                        required\n                        #ssn=\"ngModel\"\n                        [disabled]=\"1\"\n                    />\n                    <div class=\"text-danger\" *ngIf=\"ssn.errors && (ssn.dirty || ssn.touched)\">\n                        <p *ngIf=\"ssn.errors.required\">SSN is required</p>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label>Income</label>\n                    <input\n                        type=\"text\"\n                        class=\"form-control\"\n                        name=\"income\"\n                        [(ngModel)]=\"newLoanObj.income\"\n                        required\n                        #income=\"ngModel\"\n                        [disabled]=\"1\"\n                    />\n                    <div class=\"text-danger\" *ngIf=\"income.errors && (income.dirty || income.touched)\">\n                        <p *ngIf=\"income.errors.required\">Income is required</p>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label>Credit Score</label>\n                    <input\n                        type=\"text\"\n                        class=\"form-control\"\n                        name=\"creditScore\"\n                        [(ngModel)]=\"newLoanObj.creditScore\"\n                        required\n                        #creditScore=\"ngModel\"\n                        [disabled]=\"1\"\n                    />\n                    <div class=\"text-danger\" *ngIf=\"creditScore.errors && (creditScore.dirty || creditScore.touched)\">\n                        <p *ngIf=\"creditScore.errors.required\">Credit Score is required</p>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-12 col-md\">\n                <div class=\"form-group\">\n                    <label>Email</label>\n                    <input\n                        type=\"text\"\n                        class=\"form-control\"\n                        name=\"email\"\n                        [(ngModel)]=\"newLoanObj.email\"\n                        required\n                        #email=\"ngModel\"\n                        [disabled]=\"!isEdit\"\n                    />\n                    <div class=\"text-danger\" *ngIf=\"email.errors && (email.dirty || email.touched)\">\n                        <p *ngIf=\"creditScore.errors.required\">Email is required</p>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label>Loan Amount</label>\n                    <input\n                        type=\"text\"\n                        class=\"form-control\"\n                        name=\"loanAmount\"\n                        [(ngModel)]=\"newLoanObj.loanAmount\"\n                        required\n                        #loanAmount=\"ngModel\"\n                        [disabled]=\"!isEdit\"\n                    />\n                    <div class=\"text-danger\" *ngIf=\"loanAmount.errors && (loanAmount.dirty || loanAmount.touched)\">\n                        <p *ngIf=\"loanAmount.errors.required\">Loan amount is required</p>\n                    </div>\n                </div>\n\n                <div class=\"form-group\">\n                    <label>Apr</label>\n                    <input type=\"text\" class=\"form-control\" name=\"apr\" [(ngModel)]=\"newLoanObj.apr\" #apr=\"ngModel\" required />\n                    <div class=\"text-danger\" *ngIf=\"apr.errors && (apr.dirty || apr.touched)\">\n                        <p *ngIf=\"apr.errors.required\">Apr is required</p>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label>Comments</label>\n                    <textarea\n                        class=\"form-control\"\n                        name=\"comments\"\n                        [(ngModel)]=\"newLoanObj.comments\"\n                        #comments=\"ngModel\"\n                        rows=\"3\"\n                    ></textarea>\n                </div>\n                <div class=\"form-group\">\n                    <button type=\"button\" class=\"btn btn-warning\" (click)=\"isEdit = !isEdit\">Edit</button> &nbsp;\n                    <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"f.invalid\">Approve</button> &nbsp;\n                    <button type=\"button\" class=\"btn btn-danger\" (click)=\"rejectApplication()\" [disabled]=\"f.invalid\">Reject</button> &nbsp;\n                    <button class=\"btn btn-danger\">Reset</button>\n                </div>\n            </div>\n        </div>\n    </form>\n    </div>\n</div>\n<div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-light\" (click)=\"closeModal()\">Close</button>\n</div>\n"

/***/ }),

/***/ "./src/app/layout/loanOfficer/all-applications/all-applications-routing.module.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/layout/loanOfficer/all-applications/all-applications-routing.module.ts ***!
  \****************************************************************************************/
/*! exports provided: AllApplicationsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllApplicationsRoutingModule", function() { return AllApplicationsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _all_applications_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./all-applications.component */ "./src/app/layout/loanOfficer/all-applications/all-applications.component.ts");




const routes = [
    { path: '', component: _all_applications_component__WEBPACK_IMPORTED_MODULE_3__["AllApplicationsComponent"] }
];
let AllApplicationsRoutingModule = class AllApplicationsRoutingModule {
};
AllApplicationsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AllApplicationsRoutingModule);



/***/ }),

/***/ "./src/app/layout/loanOfficer/all-applications/all-applications.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/layout/loanOfficer/all-applications/all-applications.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9sb2FuT2ZmaWNlci9hbGwtYXBwbGljYXRpb25zL2FsbC1hcHBsaWNhdGlvbnMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/layout/loanOfficer/all-applications/all-applications.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/layout/loanOfficer/all-applications/all-applications.component.ts ***!
  \***********************************************************************************/
/*! exports provided: AllApplicationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllApplicationsComponent", function() { return AllApplicationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/http.service */ "./src/app/shared/services/http.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _loan_application_detail_loan_application_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../loan-application-detail/loan-application-detail.component */ "./src/app/layout/loanOfficer/loan-application-detail/loan-application-detail.component.ts");





let AllApplicationsComponent = class AllApplicationsComponent {
    constructor(httpService, config, modalService) {
        this.httpService = httpService;
        this.modalService = modalService;
        this.page = 1;
        this.pageSize = 4;
        this.loanApplications = [];
        this.collectionSize = this.loanApplications.length;
        this.getAllLoanApplication({ "processDefinition": "loanApproval" });
    }
    ngOnInit() { }
    getAllLoanApplication(inputParam) {
        this.httpService.getAllLoanApplications(inputParam).subscribe(data => {
            console.log("Loan Application Response", data);
            this.loanApplications = data;
        }, error => console.log('Error:', error));
    }
    rowClicked(rowData) {
        const modalRef = this.modalService.open(_loan_application_detail_loan_application_detail_component__WEBPACK_IMPORTED_MODULE_4__["LoanApplicationDetailComponent"], { size: 'lg' });
        modalRef.componentInstance.loanDetail = rowData;
        modalRef.result.then((data) => { }, (reason) => { });
        modalRef.componentInstance.passEntry.subscribe((receivedEntry) => {
            console.log("Data Received:", receivedEntry);
            if (receivedEntry === "REFRESH") {
                this.getAllLoanApplication({ "processDefinition": "loanApproval" });
            }
        });
    }
};
AllApplicationsComponent.ctorParameters = () => [
    { type: src_app_shared_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModalConfig"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] }
];
AllApplicationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-all-applications',
        template: __webpack_require__(/*! raw-loader!./all-applications.component.html */ "./node_modules/raw-loader/index.js!./src/app/layout/loanOfficer/all-applications/all-applications.component.html"),
        styles: [__webpack_require__(/*! ./all-applications.component.scss */ "./src/app/layout/loanOfficer/all-applications/all-applications.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModalConfig"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]])
], AllApplicationsComponent);



/***/ }),

/***/ "./src/app/layout/loanOfficer/all-applications/all-applications.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/layout/loanOfficer/all-applications/all-applications.module.ts ***!
  \********************************************************************************/
/*! exports provided: AllApplicationsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllApplicationsModule", function() { return AllApplicationsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _all_applications_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./all-applications-routing.module */ "./src/app/layout/loanOfficer/all-applications/all-applications-routing.module.ts");
/* harmony import */ var _all_applications_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./all-applications.component */ "./src/app/layout/loanOfficer/all-applications/all-applications.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _loan_application_detail_loan_application_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../loan-application-detail/loan-application-detail.component */ "./src/app/layout/loanOfficer/loan-application-detail/loan-application-detail.component.ts");
/* harmony import */ var _loan_application_detail_loan_application_detail_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../loan-application-detail/loan-application-detail.module */ "./src/app/layout/loanOfficer/loan-application-detail/loan-application-detail.module.ts");








let AllApplicationsModule = class AllApplicationsModule {
};
AllApplicationsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_all_applications_component__WEBPACK_IMPORTED_MODULE_4__["AllApplicationsComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _all_applications_routing_module__WEBPACK_IMPORTED_MODULE_3__["AllApplicationsRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _loan_application_detail_loan_application_detail_module__WEBPACK_IMPORTED_MODULE_7__["LoanApplicationDetailModule"]
        ],
        exports: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
        ],
        entryComponents: [
            _loan_application_detail_loan_application_detail_component__WEBPACK_IMPORTED_MODULE_6__["LoanApplicationDetailComponent"]
        ]
    })
], AllApplicationsModule);



/***/ }),

/***/ "./src/app/layout/loanOfficer/loan-application-detail/loan-application-detail-routing.module.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/layout/loanOfficer/loan-application-detail/loan-application-detail-routing.module.ts ***!
  \******************************************************************************************************/
/*! exports provided: LoanApplicationDetailRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoanApplicationDetailRoutingModule", function() { return LoanApplicationDetailRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _loan_application_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loan-application-detail.component */ "./src/app/layout/loanOfficer/loan-application-detail/loan-application-detail.component.ts");




const routes = [
    { path: '', component: _loan_application_detail_component__WEBPACK_IMPORTED_MODULE_3__["LoanApplicationDetailComponent"] }
];
let LoanApplicationDetailRoutingModule = class LoanApplicationDetailRoutingModule {
};
LoanApplicationDetailRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], LoanApplicationDetailRoutingModule);



/***/ }),

/***/ "./src/app/layout/loanOfficer/loan-application-detail/loan-application-detail.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/layout/loanOfficer/loan-application-detail/loan-application-detail.component.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9sb2FuT2ZmaWNlci9sb2FuLWFwcGxpY2F0aW9uLWRldGFpbC9sb2FuLWFwcGxpY2F0aW9uLWRldGFpbC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/layout/loanOfficer/loan-application-detail/loan-application-detail.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/layout/loanOfficer/loan-application-detail/loan-application-detail.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: LoanApplicationDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoanApplicationDetailComponent", function() { return LoanApplicationDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_shared_models_new_loan__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/models/new-loan */ "./src/app/shared/models/new-loan.ts");
/* harmony import */ var src_app_shared_services_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/http.service */ "./src/app/shared/services/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");








class CompleteTask {
}
let LoanApplicationDetailComponent = class LoanApplicationDetailComponent {
    constructor(modalService, newLoanObj, httpService, router) {
        this.modalService = modalService;
        this.newLoanObj = newLoanObj;
        this.httpService = httpService;
        this.router = router;
        this.passEntry = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        //this.newLoanObj.firstName = "";
        //this.newLoanObj.userId = 'test123';
        this.loanForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('')
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
            this.completeTask.approvedOn = '' + Object(_angular_common__WEBPACK_IMPORTED_MODULE_7__["formatDate"])(new Date(), 'yyyy/MM/dd', 'en');
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
        this.completeTask.approvedOn = '' + Object(_angular_common__WEBPACK_IMPORTED_MODULE_7__["formatDate"])(new Date(), 'yyyy/MM/dd', 'en');
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
};
LoanApplicationDetailComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] },
    { type: src_app_shared_models_new_loan__WEBPACK_IMPORTED_MODULE_4__["NewLoan"] },
    { type: src_app_shared_services_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], LoanApplicationDetailComponent.prototype, "loanDetail", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], LoanApplicationDetailComponent.prototype, "passEntry", void 0);
LoanApplicationDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-loan-application-detail',
        template: __webpack_require__(/*! raw-loader!./loan-application-detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/layout/loanOfficer/loan-application-detail/loan-application-detail.component.html"),
        styles: [__webpack_require__(/*! ./loan-application-detail.component.scss */ "./src/app/layout/loanOfficer/loan-application-detail/loan-application-detail.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"], src_app_shared_models_new_loan__WEBPACK_IMPORTED_MODULE_4__["NewLoan"], src_app_shared_services_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
], LoanApplicationDetailComponent);



/***/ }),

/***/ "./src/app/layout/loanOfficer/loan-application-detail/loan-application-detail.module.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/layout/loanOfficer/loan-application-detail/loan-application-detail.module.ts ***!
  \**********************************************************************************************/
/*! exports provided: LoanApplicationDetailModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoanApplicationDetailModule", function() { return LoanApplicationDetailModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _loan_application_detail_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loan-application-detail-routing.module */ "./src/app/layout/loanOfficer/loan-application-detail/loan-application-detail-routing.module.ts");
/* harmony import */ var _loan_application_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loan-application-detail.component */ "./src/app/layout/loanOfficer/loan-application-detail/loan-application-detail.component.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");








let LoanApplicationDetailModule = class LoanApplicationDetailModule {
};
LoanApplicationDetailModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _loan_application_detail_component__WEBPACK_IMPORTED_MODULE_4__["LoanApplicationDetailComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModalModule"],
            _loan_application_detail_routing_module__WEBPACK_IMPORTED_MODULE_3__["LoanApplicationDetailRoutingModule"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["ModalModule"].forRoot()
        ],
        exports: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _loan_application_detail_component__WEBPACK_IMPORTED_MODULE_4__["LoanApplicationDetailComponent"]
        ]
    })
], LoanApplicationDetailModule);



/***/ })

}]);
//# sourceMappingURL=loanOfficer-all-applications-all-applications-module-es2015.js.map