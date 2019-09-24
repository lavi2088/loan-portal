(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["loan-status-loan-status-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/layout/loan-status/loan-status.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layout/loan-status/loan-status.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <ul class=\"progressbar\" *ngIf=\"customerInfo ? customerInfo.loanDecision == 'APPROVED': 0\">\n        <li class=\"active\" >Loan Application</li>\n        <li class=\"active\">Validated by the System</li>\n        <li class=\"active\">Approved</li>\n    </ul>\n\n    <ul class=\"progressbar\" *ngIf=\"customerInfo ? customerInfo.loanDecision == 'REJECTED': 0\">\n        <li class=\"active\" >Loan Application</li>\n        <li class=\"active\">Validated by the System</li>\n        <li >Under Review with the Loan Officer</li>\n        <li >Status</li>\n    </ul>\n\n    <!-- <ul class=\"progressbar\" *ngIf=\"customerInfo ? customerInfo.loanDecision == 'REJECTED': 0\">\n        <li class=\"active\" >Loan Application</li>\n        <li class=\"active\">Validated by the System</li>\n        <li class=\"active\">Reviwed by the Loan Officer</li>\n        <li class=\"denied\">REJECTED</li>\n    </ul> -->\n    <br />\n    <br />\n    <label class=\"msgLbl\" *ngIf=\"customerInfo ? customerInfo.loanDecision == 'APPROVED': 0\">Congratulations!! Your application is approved.</label>\n    <label class=\"msgLbl\" *ngIf=\"customerInfo ? customerInfo.loanDecision == 'REJECTED': 0\"> Your application is under review. Please call 1-XXX-XXX-XXXX for the more details.</label>\n</div>\n"

/***/ }),

/***/ "./src/app/layout/loan-status/loan-status-routing.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/layout/loan-status/loan-status-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: LoanStatusRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoanStatusRoutingModule", function() { return LoanStatusRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _loan_status_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loan-status.component */ "./src/app/layout/loan-status/loan-status.component.ts");




var routes = [
    { path: '', component: _loan_status_component__WEBPACK_IMPORTED_MODULE_3__["LoanStatusComponent"] }
];
var LoanStatusRoutingModule = /** @class */ (function () {
    function LoanStatusRoutingModule() {
    }
    LoanStatusRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], LoanStatusRoutingModule);
    return LoanStatusRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/loan-status/loan-status.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/layout/loan-status/loan-status.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  width: 100%;\n  margin-top: 100px;\n}\n\n.progressbar {\n  counter-reset: step;\n}\n\n.progressbar li {\n  list-style-type: none;\n  width: 25%;\n  float: left;\n  font-size: 12px;\n  position: relative;\n  text-align: center;\n  text-transform: uppercase;\n  color: #7d7d7d;\n}\n\n.progressbar li:before {\n  width: 30px;\n  height: 30px;\n  content: counter(step);\n  counter-increment: step;\n  line-height: 30px;\n  border: 2px solid #7d7d7d;\n  display: block;\n  text-align: center;\n  margin: 0 auto 10px auto;\n  border-radius: 50%;\n  background-color: white;\n}\n\n.progressbar li:after {\n  width: 100%;\n  height: 2px;\n  content: \"\";\n  position: absolute;\n  background-color: #7d7d7d;\n  top: 15px;\n  left: -50%;\n  z-index: -1;\n}\n\n.progressbar li:first-child:after {\n  content: none;\n}\n\n.progressbar li.active {\n  color: green;\n}\n\n.progressbar li.denied {\n  color: red;\n}\n\n.progressbar li.denied:before {\n  border-color: red;\n}\n\n.progressbar li.active:before {\n  border-color: #55b776;\n}\n\n.progressbar li.active + li:after {\n  background-color: #55b776;\n}\n\n.msgLbl {\n  font-size: 16px;\n  color: #7d7d7d;\n  font-weight: bold;\n  text-align: center;\n  position: relative;\n  left: 100px;\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sYXZpa3VtYXIvbXlzdG9yZS9wcm9qZWN0L2NnaS9sb2FuYWRtaW4vbG9hbi1wb3J0YWwvc3JjL2FwcC9sYXlvdXQvbG9hbi1zdGF0dXMvbG9hbi1zdGF0dXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xheW91dC9sb2FuLXN0YXR1cy9sb2FuLXN0YXR1cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtBQ0NKOztBRENBO0VBQ0ksbUJBQUE7QUNFSjs7QURBQTtFQUNJLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBQ0dKOztBRERBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtBQ0lKOztBREZBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQ0tKOztBREhBO0VBQ0ksYUFBQTtBQ01KOztBREpBO0VBQ0ksWUFBQTtBQ09KOztBRExBO0VBQ0ksVUFBQTtBQ1FKOztBRE5BO0VBQ0ksaUJBQUE7QUNTSjs7QURQQTtFQUNJLHFCQUFBO0FDVUo7O0FEUkE7RUFDSSx5QkFBQTtBQ1dKOztBRFJBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNXSiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9sb2FuLXN0YXR1cy9sb2FuLXN0YXR1cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDEwMHB4IDtcbn1cbi5wcm9ncmVzc2JhciB7XG4gICAgY291bnRlci1yZXNldDogc3RlcDtcbn1cbi5wcm9ncmVzc2JhciBsaSB7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIHdpZHRoOiAyNSU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBjb2xvcjogIzdkN2Q3ZDtcbn1cbi5wcm9ncmVzc2JhciBsaTpiZWZvcmUge1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBjb250ZW50OiBjb3VudGVyKHN0ZXApO1xuICAgIGNvdW50ZXItaW5jcmVtZW50OiBzdGVwO1xuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICM3ZDdkN2Q7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogMCBhdXRvIDEwcHggYXV0bztcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4ucHJvZ3Jlc3NiYXIgbGk6YWZ0ZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMnB4O1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2Q3ZDdkO1xuICAgIHRvcDogMTVweDtcbiAgICBsZWZ0OiAtNTAlO1xuICAgIHotaW5kZXg6IC0xO1xufVxuLnByb2dyZXNzYmFyIGxpOmZpcnN0LWNoaWxkOmFmdGVyIHtcbiAgICBjb250ZW50OiBub25lO1xufVxuLnByb2dyZXNzYmFyIGxpLmFjdGl2ZSB7XG4gICAgY29sb3I6IGdyZWVuO1xufVxuLnByb2dyZXNzYmFyIGxpLmRlbmllZCB7XG4gICAgY29sb3I6IHJlZDtcbn1cbi5wcm9ncmVzc2JhciBsaS5kZW5pZWQ6YmVmb3JlIHtcbiAgICBib3JkZXItY29sb3I6IHJlZDtcbn1cbi5wcm9ncmVzc2JhciBsaS5hY3RpdmU6YmVmb3JlIHtcbiAgICBib3JkZXItY29sb3I6ICM1NWI3NzY7XG59XG4ucHJvZ3Jlc3NiYXIgbGkuYWN0aXZlICsgbGk6YWZ0ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NWI3NzY7XG59XG5cbi5tc2dMYmwge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBjb2xvcjogIzdkN2Q3ZDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxlZnQ6IDEwMHB4O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG59XG4iLCIuY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDEwMHB4O1xufVxuXG4ucHJvZ3Jlc3NiYXIge1xuICBjb3VudGVyLXJlc2V0OiBzdGVwO1xufVxuXG4ucHJvZ3Jlc3NiYXIgbGkge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIHdpZHRoOiAyNSU7XG4gIGZsb2F0OiBsZWZ0O1xuICBmb250LXNpemU6IDEycHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogIzdkN2Q3ZDtcbn1cblxuLnByb2dyZXNzYmFyIGxpOmJlZm9yZSB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGNvbnRlbnQ6IGNvdW50ZXIoc3RlcCk7XG4gIGNvdW50ZXItaW5jcmVtZW50OiBzdGVwO1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgYm9yZGVyOiAycHggc29saWQgIzdkN2Q3ZDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAwIGF1dG8gMTBweCBhdXRvO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4ucHJvZ3Jlc3NiYXIgbGk6YWZ0ZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAycHg7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdkN2Q3ZDtcbiAgdG9wOiAxNXB4O1xuICBsZWZ0OiAtNTAlO1xuICB6LWluZGV4OiAtMTtcbn1cblxuLnByb2dyZXNzYmFyIGxpOmZpcnN0LWNoaWxkOmFmdGVyIHtcbiAgY29udGVudDogbm9uZTtcbn1cblxuLnByb2dyZXNzYmFyIGxpLmFjdGl2ZSB7XG4gIGNvbG9yOiBncmVlbjtcbn1cblxuLnByb2dyZXNzYmFyIGxpLmRlbmllZCB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5wcm9ncmVzc2JhciBsaS5kZW5pZWQ6YmVmb3JlIHtcbiAgYm9yZGVyLWNvbG9yOiByZWQ7XG59XG5cbi5wcm9ncmVzc2JhciBsaS5hY3RpdmU6YmVmb3JlIHtcbiAgYm9yZGVyLWNvbG9yOiAjNTViNzc2O1xufVxuXG4ucHJvZ3Jlc3NiYXIgbGkuYWN0aXZlICsgbGk6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTViNzc2O1xufVxuXG4ubXNnTGJsIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzdkN2Q3ZDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAxMDBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/layout/loan-status/loan-status.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/layout/loan-status/loan-status.component.ts ***!
  \*************************************************************/
/*! exports provided: LoanStatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoanStatusComponent", function() { return LoanStatusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var LoanStatusComponent = /** @class */ (function () {
    function LoanStatusComponent(route, router) {
        this.route = route;
        this.router = router;
        var navigation = this.router.getCurrentNavigation();
        if (navigation.extras.queryParams) {
            this.customerInfo = navigation.extras.queryParams.data;
            console.log('Data:', this.customerInfo);
            //this.customerInfo.loanDecision = 'INPROGRESS';
        }
    }
    LoanStatusComponent.prototype.ngOnInit = function () {
    };
    LoanStatusComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    LoanStatusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-loan-status',
            template: __webpack_require__(/*! raw-loader!./loan-status.component.html */ "./node_modules/raw-loader/index.js!./src/app/layout/loan-status/loan-status.component.html"),
            styles: [__webpack_require__(/*! ./loan-status.component.scss */ "./src/app/layout/loan-status/loan-status.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoanStatusComponent);
    return LoanStatusComponent;
}());



/***/ }),

/***/ "./src/app/layout/loan-status/loan-status.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/layout/loan-status/loan-status.module.ts ***!
  \**********************************************************/
/*! exports provided: LoanStatusModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoanStatusModule", function() { return LoanStatusModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _loan_status_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loan-status-routing.module */ "./src/app/layout/loan-status/loan-status-routing.module.ts");
/* harmony import */ var _loan_status_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loan-status.component */ "./src/app/layout/loan-status/loan-status.component.ts");





var LoanStatusModule = /** @class */ (function () {
    function LoanStatusModule() {
    }
    LoanStatusModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_loan_status_component__WEBPACK_IMPORTED_MODULE_4__["LoanStatusComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _loan_status_routing_module__WEBPACK_IMPORTED_MODULE_3__["LoanStatusRoutingModule"]
            ]
        })
    ], LoanStatusModule);
    return LoanStatusModule;
}());



/***/ })

}]);
//# sourceMappingURL=loan-status-loan-status-module-es5.js.map