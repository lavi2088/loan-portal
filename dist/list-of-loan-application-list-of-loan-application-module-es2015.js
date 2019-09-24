(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["list-of-loan-application-list-of-loan-application-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/layout/application-details/application-details.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layout/application-details/application-details.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n        <h4 class=\"modal-title\">Application Detail</h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"closeModal()\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body loan-container\">\n        <!-- <form (ngSubmit)=\"f.form.valid && submitBtn(f)\" #f=\"ngForm\" autocomplete=\"off\" novalidate> -->\n                <div class=\"loan-body p-10\">\n            <form novalidate (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\">\n            <div class=\"row\">\n                <div class=\"col-12 col-md\">\n                    <div class=\"form-group\">\n                        <!-- <label>First Name</label>\n                      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"newLoanObj.firstName\" name=\"firstName\" #firsName=\"ngModel\" placeholder=\"Enter First Name\" [ngClass]=\"{'is-invalid': f.submitted && firstName.invalid}\" autocomplete=\"off\" required>\n                      <div *ngIf=\"firstName.touched\" class=\"invalidInput\">\n                        <div *ngIf=\"firstName.errors?.required\">FirstName is required</div>\n                      </div> -->\n\n                        <div\n                            class=\"form-group\"\n                            [ngClass]=\"{\n                                'has-danger': firstName.invalid && (firstName.dirty || firstName.touched),\n                                'has-success': firstName.valid && (firstName.dirty || firstName.touched)\n                            }\"\n                        >\n                            <label>First Name</label>\n                            <input\n                                type=\"text\"\n                                class=\"form-control\"\n                                name=\"firstName\"\n                                [(ngModel)]=\"newLoanObj.firstName\"\n                                required\n                                #firstName=\"ngModel\"\n                                [disabled]=\"!isEdit\"\n                            />\n                            <div\n                                class=\"list-group-item list-group-item-danger\"\n                                *ngIf=\"firstName.errors && (firstName.dirty || firstName.touched)\"\n                            >\n                                <p *ngIf=\"firstName.errors.required\">First name is required</p>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <div\n                            class=\"form-group\"\n                            [ngClass]=\"{\n                                'has-danger': lastName.invalid && (lastName.dirty || lastName.touched),\n                                'has-success': lastName.valid && (lastName.dirty || lastName.touched)\n                            }\"\n                        >\n                            <label>Last Name</label>\n                            <input\n                                type=\"text\"\n                                class=\"form-control\"\n                                name=\"lastName\"\n                                [(ngModel)]=\"newLoanObj.lastName\"\n                                required\n                                #lastName=\"ngModel\"\n                                [disabled]=\"!isEdit\"\n                            />\n                            <div class=\"list-group-item list-group-item-danger\" *ngIf=\"lastName.errors && (lastName.dirty || lastName.touched)\">\n                                <p *ngIf=\"lastName.errors.required\">Last name is required</p>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div\n                        class=\"form-group\"\n                        [ngClass]=\"{\n                            'has-danger': ssn.invalid && (ssn.dirty || ssn.touched),\n                            'has-success': ssn.valid && (ssn.dirty || ssn.touched)\n                        }\"\n                    >\n                        <label>SSN</label>\n                        <input type=\"text\" class=\"form-control\" name=\"ssn\" [(ngModel)]=\"newLoanObj.SSN\" required #ssn=\"ngModel\" [disabled]=\"!isEdit\"/>\n                        <div class=\"list-group-item list-group-item-danger\" *ngIf=\"ssn.errors && (ssn.dirty || ssn.touched)\">\n                            <p *ngIf=\"ssn.errors.required\">SSN is required</p>\n                        </div>\n                    </div>\n\n                    <div\n                        class=\"form-group\"\n                        [ngClass]=\"{\n                            'has-danger': age.invalid && (age.dirty || age.touched),\n                            'has-success': age.valid && (age.dirty || age.touched)\n                        }\"\n                    >\n                        <label>Age</label>\n                        <input type=\"text\" class=\"form-control\" name=\"age\" [(ngModel)]=\"newLoanObj.age\" required #age=\"ngModel\" [disabled]=\"!isEdit\"/>\n                        <div class=\"list-group-item list-group-item-danger\" *ngIf=\"age.errors && (age.dirty || age.touched)\">\n                            <p *ngIf=\"age.errors.required\">Age is required</p>\n                        </div>\n                    </div>\n                    <div\n                        class=\"form-group\"\n                        [ngClass]=\"{\n                            'has-danger': address.invalid && (address.dirty || address.touched),\n                            'has-success': address.valid && (address.dirty || address.touched)\n                        }\"\n                    >\n                        <label>Address</label>\n                        <input type=\"text\" class=\"form-control\" name=\"address\" [(ngModel)]=\"newLoanObj.address\" required #address=\"ngModel\" [disabled]=\"!isEdit\"/>\n                        <div class=\"list-group-item list-group-item-danger\" *ngIf=\"address.errors && (address.dirty || address.touched)\">\n                            <p *ngIf=\"address.errors.required\">Address is required</p>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-12 col-md\">\n                    <div\n                        class=\"form-group\"\n                        [ngClass]=\"{\n                            'has-danger': income.invalid && (income.dirty || income.touched),\n                            'has-success': income.valid && (income.dirty || income.touched)\n                        }\"\n                    >\n                        <label>Income</label>\n                        <input type=\"text\" class=\"form-control\" name=\"income\" [(ngModel)]=\"newLoanObj.income\" required #income=\"ngModel\" [disabled]=\"!isEdit\"/>\n                        <div class=\"list-group-item list-group-item-danger\" *ngIf=\"income.errors && (income.dirty || income.touched)\">\n                            <p *ngIf=\"income.errors.required\">Income is required</p>\n                        </div>\n                    </div>\n                    <div\n                        class=\"form-group\"\n                        [ngClass]=\"{\n                            'has-danger': income.invalid && (income.dirty || income.touched),\n                            'has-success': income.valid && (income.dirty || income.touched)\n                        }\"\n                    >\n                        <label>Loan Amount</label>\n                        <input\n                            type=\"text\"\n                            class=\"form-control\"\n                            name=\"loanAmount\"\n                            [(ngModel)]=\"newLoanObj.loanAmount\"\n                            required\n                            #loanAmount=\"ngModel\"\n                            [disabled]=\"!isEdit\"\n                        />\n                        <div\n                            class=\"list-group-item list-group-item-danger\"\n                            *ngIf=\"loanAmount.errors && (loanAmount.dirty || loanAmount.touched)\"\n                        >\n                            <p *ngIf=\"loanAmount.errors.required\">Loan amount is required</p>\n                        </div>\n                    </div>\n                    <div\n                        class=\"form-group\"\n                        [ngClass]=\"{\n                            'has-danger': creditScore.invalid && (creditScore.dirty || creditScore.touched),\n                            'has-success': creditScore.valid && (creditScore.dirty || creditScore.touched)\n                        }\"\n                    >\n                        <label>Credit Score</label>\n                        <input\n                            type=\"text\"\n                            class=\"form-control\"\n                            name=\"creditScore\"\n                            [(ngModel)]=\"newLoanObj.creditScore\"\n                            required\n                            #creditScore=\"ngModel\"\n                            [disabled]=\"!isEdit\"\n                        />\n                        <div\n                            class=\"list-group-item list-group-item-danger\"\n                            *ngIf=\"creditScore.errors && (creditScore.dirty || creditScore.touched)\"\n                        >\n                            <p *ngIf=\"creditScore.errors.required\">Credit Score is required</p>\n                        </div>\n                    </div>\n                    <div\n                        class=\"form-group\"\n                        [ngClass]=\"{\n                            'has-danger': creditScore.invalid && (creditScore.dirty || creditScore.touched),\n                            'has-success': creditScore.valid && (creditScore.dirty || creditScore.touched)\n                        }\"\n                    >\n                        <label>Email</label>\n                        <input type=\"text\" class=\"form-control\" name=\"email\" [(ngModel)]=\"newLoanObj.email\" required #email=\"ngModel\" [disabled]=\"!isEdit\"/>\n                        <div class=\"list-group-item list-group-item-danger\" *ngIf=\"email.errors && (email.dirty || email.touched)\">\n                            <p *ngIf=\"creditScore.errors.required\">Email is required</p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </form>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-light\" (click)=\"closeModal()\">Close</button>\n    </div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layout/list-of-loan-application/list-of-loan-application.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layout/list-of-loan-application/list-of-loan-application.component.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"loan-container\">\n  <div class=\"loan-title\">List of applications</div>\n  <div class=\"loan-body\">\n    <table class=\"table table-striped\">\n      <thead>\n        <tr>\n          <th scope=\"col\">User Id</th>\n          <th scope=\"col\">Name</th>\n          <th scope=\"col\">Loan Amount</th>\n          <th scope=\"col\">Credit Score</th>\n          <th scope=\"col\">Email</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let loanApp of getLoanApp\" (click)=\"rowClicked(loanApp)\">\n          <th scope=\"row\">{{ loanApp.userId }}</th>\n          <td>\n            {{ loanApp.firstName + ' ' + loanApp.lastName }}\n          </td>\n          <td>{{ loanApp.loanAmount}}</td>\n          <td>{{ loanApp.creditScore }}</td>\n          <td\n            [ngClass]=\"{'text-success': loanApp.status == 'Approved', 'text-warning': loanApp.status == 'In Review', 'text-danger': loanApp.status == 'Declined'}\">\n            {{ loanApp.email }}</td>\n        </tr>\n      </tbody>\n    </table>\n\n    <div class=\"d-flex justify-content-between p-2\">\n      <!-- <ngb-pagination [collectionSize]=\"collectionSize\" [(page)]=\"page\" [pageSize]=\"pageSize\">\n  </ngb-pagination> -->\n\n      <select class=\"custom-select\" style=\"width: auto\" [(ngModel)]=\"pageSize\">\n        <option [ngValue]=\"2\">2 items per page</option>\n        <option [ngValue]=\"4\">4 items per page</option>\n        <option [ngValue]=\"6\">6 items per page</option>\n      </select>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/layout/application-details/application-details-routing.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/layout/application-details/application-details-routing.module.ts ***!
  \**********************************************************************************/
/*! exports provided: ApplicationDetailsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationDetailsRoutingModule", function() { return ApplicationDetailsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _application_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./application-details.component */ "./src/app/layout/application-details/application-details.component.ts");




const routes = [
    { path: '', component: _application_details_component__WEBPACK_IMPORTED_MODULE_3__["ApplicationDetailsComponent"] }
];
let ApplicationDetailsRoutingModule = class ApplicationDetailsRoutingModule {
};
ApplicationDetailsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ApplicationDetailsRoutingModule);



/***/ }),

/***/ "./src/app/layout/application-details/application-details.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/layout/application-details/application-details.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9hcHBsaWNhdGlvbi1kZXRhaWxzL2FwcGxpY2F0aW9uLWRldGFpbHMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/layout/application-details/application-details.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/layout/application-details/application-details.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ApplicationDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationDetailsComponent", function() { return ApplicationDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_shared_models_new_loan__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/models/new-loan */ "./src/app/shared/models/new-loan.ts");
/* harmony import */ var src_app_shared_services_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/http.service */ "./src/app/shared/services/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







let ApplicationDetailsComponent = class ApplicationDetailsComponent {
    constructor(modalService, newLoanObj, httpService, router) {
        this.modalService = modalService;
        this.newLoanObj = newLoanObj;
        this.httpService = httpService;
        this.router = router;
        this.passEntry = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        //this.newLoanObj.firstName = "";
        this.newLoanObj.userId = 'test123';
        this.loanForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('')
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
            this.httpService.getDecision(this.newLoanObj).subscribe(data => {
                console.log('Loan Approval Response', data);
                this.decisonResponse = data;
                this.router.navigate(['loanstatus'], { queryParams: { data: this.decisonResponse } });
            }, error => console.log('Error:', error));
        }
    }
};
ApplicationDetailsComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] },
    { type: src_app_shared_models_new_loan__WEBPACK_IMPORTED_MODULE_4__["NewLoan"] },
    { type: src_app_shared_services_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ApplicationDetailsComponent.prototype, "loanDetail", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], ApplicationDetailsComponent.prototype, "passEntry", void 0);
ApplicationDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-application-details',
        template: __webpack_require__(/*! raw-loader!./application-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/layout/application-details/application-details.component.html"),
        providers: [],
        styles: [__webpack_require__(/*! ./application-details.component.scss */ "./src/app/layout/application-details/application-details.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"], src_app_shared_models_new_loan__WEBPACK_IMPORTED_MODULE_4__["NewLoan"], src_app_shared_services_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
], ApplicationDetailsComponent);



/***/ }),

/***/ "./src/app/layout/application-details/application-details.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/layout/application-details/application-details.module.ts ***!
  \**************************************************************************/
/*! exports provided: ApplicationDetailsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationDetailsModule", function() { return ApplicationDetailsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _application_details_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./application-details-routing.module */ "./src/app/layout/application-details/application-details-routing.module.ts");
/* harmony import */ var _application_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./application-details.component */ "./src/app/layout/application-details/application-details.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var ngx_bootstrap_modal___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/modal/ */ "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");








let ApplicationDetailsModule = class ApplicationDetailsModule {
};
ApplicationDetailsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _application_details_component__WEBPACK_IMPORTED_MODULE_4__["ApplicationDetailsComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModalModule"],
            _application_details_routing_module__WEBPACK_IMPORTED_MODULE_3__["ApplicationDetailsRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            ngx_bootstrap_modal___WEBPACK_IMPORTED_MODULE_6__["ModalModule"].forRoot()
        ],
        exports: [
            _application_details_component__WEBPACK_IMPORTED_MODULE_4__["ApplicationDetailsComponent"]
        ]
    })
], ApplicationDetailsModule);



/***/ }),

/***/ "./src/app/layout/list-of-loan-application/list-of-loan-application-routing.module.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/layout/list-of-loan-application/list-of-loan-application-routing.module.ts ***!
  \********************************************************************************************/
/*! exports provided: ListOfLoanApplicationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListOfLoanApplicationRoutingModule", function() { return ListOfLoanApplicationRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _list_of_loan_application_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-of-loan-application.component */ "./src/app/layout/list-of-loan-application/list-of-loan-application.component.ts");




const routes = [
    { path: '', component: _list_of_loan_application_component__WEBPACK_IMPORTED_MODULE_3__["ListOfLoanApplicationComponent"] }
];
let ListOfLoanApplicationRoutingModule = class ListOfLoanApplicationRoutingModule {
};
ListOfLoanApplicationRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ListOfLoanApplicationRoutingModule);



/***/ }),

/***/ "./src/app/layout/list-of-loan-application/list-of-loan-application.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/layout/list-of-loan-application/list-of-loan-application.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9saXN0LW9mLWxvYW4tYXBwbGljYXRpb24vbGlzdC1vZi1sb2FuLWFwcGxpY2F0aW9uLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/layout/list-of-loan-application/list-of-loan-application.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/layout/list-of-loan-application/list-of-loan-application.component.ts ***!
  \***************************************************************************************/
/*! exports provided: ListOfLoanApplicationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListOfLoanApplicationComponent", function() { return ListOfLoanApplicationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _application_details_application_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../application-details/application-details.component */ "./src/app/layout/application-details/application-details.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var src_app_shared_services_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/http.service */ "./src/app/shared/services/http.service.ts");





let LOANAPPLICATIONS = [
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
let ListOfLoanApplicationComponent = class ListOfLoanApplicationComponent {
    constructor(config, modalService, httpService) {
        this.modalService = modalService;
        this.httpService = httpService;
        this.page = 1;
        this.pageSize = 4;
        this.collectionSize = LOANAPPLICATIONS.length;
        this.loanApplications = [];
        this.getAllLoanApplication("test123");
    }
    ngOnInit() { }
    get getLoanApp() {
        return this.loanApplications.map((loanapp, i) => (Object.assign({ id: '' + i + 1 }, loanapp))).slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
    }
    getAllLoanApplication(inputParam) {
        this.httpService.getAllLoanApplicationsForUser(inputParam).subscribe(data => {
            console.log('Loan Application Response', data);
            this.loanApplications = data;
        }, error => console.log('Error:', error));
    }
    rowClicked(rowData) {
        const modalRef = this.modalService.open(_application_details_application_details_component__WEBPACK_IMPORTED_MODULE_2__["ApplicationDetailsComponent"], { size: 'lg' });
        modalRef.componentInstance.loanDetail = rowData;
        modalRef.result.then((data) => { }, (reason) => { });
        modalRef.componentInstance.passEntry.subscribe((receivedEntry) => {
            console.log(receivedEntry);
        });
    }
};
ListOfLoanApplicationComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModalConfig"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] },
    { type: src_app_shared_services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"] }
];
ListOfLoanApplicationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list-of-loan-application',
        template: __webpack_require__(/*! raw-loader!./list-of-loan-application.component.html */ "./node_modules/raw-loader/index.js!./src/app/layout/list-of-loan-application/list-of-loan-application.component.html"),
        styles: [__webpack_require__(/*! ./list-of-loan-application.component.scss */ "./src/app/layout/list-of-loan-application/list-of-loan-application.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModalConfig"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"], src_app_shared_services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"]])
], ListOfLoanApplicationComponent);



/***/ }),

/***/ "./src/app/layout/list-of-loan-application/list-of-loan-application.module.ts":
/*!************************************************************************************!*\
  !*** ./src/app/layout/list-of-loan-application/list-of-loan-application.module.ts ***!
  \************************************************************************************/
/*! exports provided: ListOfLoanApplicationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListOfLoanApplicationModule", function() { return ListOfLoanApplicationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _list_of_loan_application_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-of-loan-application-routing.module */ "./src/app/layout/list-of-loan-application/list-of-loan-application-routing.module.ts");
/* harmony import */ var _list_of_loan_application_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list-of-loan-application.component */ "./src/app/layout/list-of-loan-application/list-of-loan-application.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _application_details_application_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../application-details/application-details.component */ "./src/app/layout/application-details/application-details.component.ts");
/* harmony import */ var _application_details_application_details_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../application-details/application-details.module */ "./src/app/layout/application-details/application-details.module.ts");








let ListOfLoanApplicationModule = class ListOfLoanApplicationModule {
};
ListOfLoanApplicationModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _list_of_loan_application_component__WEBPACK_IMPORTED_MODULE_4__["ListOfLoanApplicationComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _list_of_loan_application_routing_module__WEBPACK_IMPORTED_MODULE_3__["ListOfLoanApplicationRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _application_details_application_details_module__WEBPACK_IMPORTED_MODULE_7__["ApplicationDetailsModule"]
        ],
        exports: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _application_details_application_details_component__WEBPACK_IMPORTED_MODULE_6__["ApplicationDetailsComponent"]
        ],
        entryComponents: [
            _application_details_application_details_component__WEBPACK_IMPORTED_MODULE_6__["ApplicationDetailsComponent"]
        ]
    })
], ListOfLoanApplicationModule);



/***/ })

}]);
//# sourceMappingURL=list-of-loan-application-list-of-loan-application-module-es2015.js.map