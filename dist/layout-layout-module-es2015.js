(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layout-layout-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/layout/components/header/header.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layout/components/header/header.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg fixed-top\">\n    <a class=\"navbar-brand\" href=\"#\">Loan Application Process </a>\n    <button class=\"navbar-toggler\" type=\"button\" (click)=\"toggleSidebar()\">\n        <!-- <span class=\"navbar-toggler-icon\"></span> -->\n        <i class=\"fa fa-bars text-muted\" aria-hidden=\"true\"></i>\n    </button>\n    <div class=\"collapse navbar-collapse\">\n        <form class=\"form-inline my-2 my-lg-0\">\n            <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"{{ 'Search' | translate }}\" >\n        </form>\n        <ul class=\"navbar-nav ml-auto\">\n            <!-- <li class=\"nav-item d-none d-xl-block\">\n                <a\n                    href=\"https://github.com/start-angular/SB-Admin-BS4-Angular-7/archive/master.zip\"\n                    class=\"nav-link btn mt-1\" role=\"button\"\n                    style=\"padding: .375rem 1rem !important;border-color: #999;\"\n                >\n                    {{ 'Download Now' | translate }}\n                </a>\n            </li> &nbsp; -->\n            <!-- <li class=\"nav-item\">\n                <a href=\"javascript:void(0)\" class=\"nav-link mt-1\"\n                    style=\"padding: 0.375rem 1rem !important; border-color: #999;\"\n                    (click)=\"rltAndLtr()\"\n                >\n                    RTL/LTR\n                </a>\n            </li> &nbsp; -->\n            <!-- <li class=\"nav-item dropdown\" ngbDropdown>\n                <a class=\"nav-link\" href=\"javascript:void(0)\" ngbDropdownToggle>\n                    <i class=\"fa fa-envelope\"></i> <b class=\"caret\"></b><span class=\"sr-only\">(current)</span>\n                </a>\n                <ul class=\"dropdown-menu-right messages\" ngbDropdownMenu>\n                    <li class=\"media\">\n                        <img class=\"d-flex align-self-center mr-3\"\n                            src=\"http://i.huffpost.com/gadgets/slideshows/461162/slide_461162_6224974_sq50.jpg\" alt=\"Generic placeholder image\"\n                        >\n                        <div class=\"media-body\">\n                            <h5 class=\"mt-0 mb-1\">John Smith</h5>\n                            <p class=\"small text-muted\"><i class=\"fa fa-clock-o\"></i> Yesterday at 4:32 PM</p>\n                            <p class=\"last\"> Lorem ipsum dolor sit amet, consectetur...</p>\n                        </div>\n                    </li>\n                    <li class=\"media\">\n                        <img class=\"d-flex align-self-center mr-3\"\n                            src=\"http://i.huffpost.com/gadgets/slideshows/461162/slide_461162_6224974_sq50.jpg\"\n                            alt=\"Generic placeholder image\"\n                        >\n                        <div class=\"media-body\">\n                            <h5 class=\"mt-0 mb-1\">John Smith</h5>\n                            <p class=\"small text-muted\"><i class=\"fa fa-clock-o\"></i> Yesterday at 4:32 PM</p>\n                            <p class=\"last\"> Lorem ipsum dolor sit amet, consectetur...</p>\n                        </div>\n                    </li>\n                    <li class=\"media\">\n                        <img class=\"d-flex align-self-center mr-3\"\n                            src=\"http://i.huffpost.com/gadgets/slideshows/461162/slide_461162_6224974_sq50.jpg\"\n                            alt=\"Generic placeholder image\"\n                        />\n                        <div class=\"media-body\">\n                            <h5 class=\"mt-0 mb-1\">John Smith</h5>\n                            <p class=\"small text-muted\"><i class=\"fa fa-clock-o\"></i> Yesterday at 4:32 PM</p>\n                            <p class=\"last\"> Lorem ipsum dolor sit amet, consectetur...</p>\n                        </div>\n                    </li>\n                </ul>\n            </li> -->\n            <!-- <li class=\"nav-item dropdown\" ngbDropdown>\n                <a href=\"javascript:void(0)\" class=\"nav-link\" ngbDropdownToggle>\n                    <i class=\"fa fa-bell\"></i> <b class=\"caret\"></b><span class=\"sr-only\">(current)</span>\n                </a>\n                <div class=\"dropdown-menu-right\" ngbDropdownMenu>\n                    <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n                        {{ 'Pending Task' | translate }} <span class=\"badge badge-info\">6</span>\n                    </a>\n                    <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n                        {{ 'In queue' | translate }} <span class=\"badge badge-info\"> 13</span>\n                    </a>\n                    <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n                        {{ 'Mail' | translate }} <span class=\"badge badge-info\"> 45</span>\n                    </a>\n                    <li class=\"dropdown-divider\"></li>\n                    <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n                        {{ 'View All' | translate }}\n                    </a>\n                </div>\n            </li> -->\n            <!-- <li class=\"nav-item dropdown\" ngbDropdown>\n                <a href=\"javascript:void(0)\" class=\"nav-link\" ngbDropdownToggle>\n                    <i class=\"fa fa-language\"></i> {{ 'Language' | translate }} <b class=\"caret\"></b>\n                </a>\n                <div class=\"dropdown-menu-right\" ngbDropdownMenu>\n                    <a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"changeLang('en')\">\n                        {{ 'English' | translate }}\n                    </a>\n                    <a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"changeLang('fr')\">\n                        {{ 'French' | translate }}\n                    </a>\n                    <a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"changeLang('ur')\">\n                        {{ 'Urdu' | translate }}\n                    </a>\n                    <a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"changeLang('es')\">\n                        {{ 'Spanish' | translate }}\n                    </a>\n                    <a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"changeLang('it')\">\n                        {{ 'Italian' | translate }}\n                    </a>\n                    <a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"changeLang('fa')\">\n                        {{ 'Farsi' | translate }}\n                    </a>\n                    <a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"changeLang('de')\">\n                        {{ 'German' | translate }}\n                    </a>\n                    <a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"changeLang('zh-CHS')\">\n                        {{ 'Simplified Chinese' | translate }}\n                    </a>\n                </div>\n            </li> -->\n            <li class=\"nav-item dropdown\" ngbDropdown>\n                <a href=\"javascript:void(0)\" class=\"nav-link\" ngbDropdownToggle>\n                    <i class=\"fa fa-user\"></i> User00 <b class=\"caret\"></b>\n                </a>\n                <div class=\"dropdown-menu-right\" ngbDropdownMenu>\n                    <a class=\"dropdown-item\" href=\"javascript:void(0)\">\n                        <i class=\"fa fa-fw fa-user\"></i> {{ 'Profile' | translate }}\n                    </a>\n                    <a class=\"dropdown-item\" href=\"javascript:void(0)\">\n                        <i class=\"fa fa-fw fa-envelope\"></i> {{ 'Inbox' | translate }}\n                    </a>\n                    <a class=\"dropdown-item\" href=\"javascript:void(0)\">\n                        <i class=\"fa fa-fw fa-gear\"></i> {{ 'Settings' | translate }}\n                    </a>\n                    <a class=\"dropdown-item\" [routerLink]=\"['/login']\" (click)=\"onLoggedout()\">\n                        <i class=\"fa fa-fw fa-power-off\"></i> {{ 'Log Out' | translate }}\n                    </a>\n                </div>\n            </li>\n        </ul>\n    </div>\n</nav>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layout/components/sidebar/sidebar.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layout/components/sidebar/sidebar.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"sidebar\" [ngClass]=\"{sidebarPushRight: isActive, collapsed: collapsed}\">\n    <div class=\"list-group\">\n        <!-- Start of User Naviagtion -->\n        <div class=\"naviationItem\" *ngIf=\"loginType ==='1'\">\n            <div class=\"nested-menu\">\n                <a class=\"list-group-item\" (click)=\"addExpandClass('pages')\">\n                    <i class=\"fa fa-plus\"></i>&nbsp;\n                    <span>{{ 'Loan Process' | translate }}</span>\n                </a>\n                <li class=\"nested\" [class.expand]=\"showMenu === 'pages'\">\n                    <ul class=\"submenu\">\n                        <li>\n                            <a [routerLink]=\"['/newloan']\">\n                                <i class=\"fa fa-monument\"></i>&nbsp;\n                                <span>{{ 'New Application' | translate }}</span>\n                            </a>\n                        </li>\n                        <li>\n                            <a [routerLink]=\"['/loanlist']\">\n                                <i class=\"fa fa-monument\"></i>&nbsp;\n                                <span>{{ 'Loan Applications' | translate }}</span>\n                            </a>\n                        </li>\n                    </ul>\n                </li>\n            </div>\n            <a [routerLink]=\"['/blank-page']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n                <i class=\"fa fa-file-o\"></i>&nbsp;\n                <span>{{ 'Morgage' | translate }}</span>\n            </a>\n        </div>\n        <!-- End of Loan Officer Naviagtion -->\n        <!-- Start of Loan Officer Naviagtion -->\n        <div class=\"naviationItem\" *ngIf=\"loginType ==='2'\">\n            <div class=\"nested-menu\">\n                <a class=\"list-group-item current\" [routerLink]=\"['/allapplications']\">\n                    <i class=\"fa fa-bars\"></i>&nbsp;\n                    <span>{{ 'All Loan Applications'}}</span>\n                </a>\n            </div>\n            <a [routerLink]=\"['/blank-page']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n                <i class=\"fa fa-file-o\"></i>&nbsp;\n                <span>{{ 'Morgage Applications' }}</span>\n            </a>\n        </div>\n        <!-- End of Loan Officer Naviagtion -->\n\n        <div class=\"header-fields\">\n            <div class=\"nested-menu\">\n                <a class=\"list-group-item\" (click)=\"addExpandClass('profile')\">\n                    <span><i class=\"fa fa-user\"></i>&nbsp; User00</span>\n                </a>\n                <li class=\"nested\" [class.expand]=\"showMenu === 'profile'\">\n                    <ul class=\"submenu\">\n                        <li>\n                            <a href=\"javascript:void(0)\">\n                                <span><i class=\"fa fa-fw fa-user\"></i> {{ 'Profile' | translate }}</span>\n                            </a>\n                        </li>\n                        <li>\n                            <a href=\"javascript:void(0)\">\n                                <span><i class=\"fa fa-fw fa-gear\"></i> {{ 'Settings' | translate }}</span>\n                            </a>\n                        </li>\n                        <li>\n                            <a [routerLink]=\"['/login']\" (click)=\"onLoggedout()\">\n                                <span><i class=\"fa fa-fw fa-power-off\"></i> {{ 'Log Out' | translate }}</span>\n                            </a>\n                        </li>\n                    </ul>\n                </li>\n            </div>\n        </div>\n    </div>\n    <div class=\"toggle-button\" [ngClass]=\"{collapsed: collapsed}\" (click)=\"toggleCollapsed()\">\n        <i class=\"fa fa-fw fa-angle-double-{{collapsed?'right':'left'}}\"></i>&nbsp;\n        <span>{{ '' }}</span>\n    </div>\n</nav>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layout/layout.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layout/layout.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<app-sidebar (collapsedEvent)=\"receiveCollapsed($event)\"></app-sidebar>\n<section class=\"main-container\" [ngClass]=\"{collapsed: collapedSideBar}\">\n    <router-outlet></router-outlet>\n</section>\n"

/***/ }),

/***/ "./src/app/layout/components/header/header.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/layout/components/header/header.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .navbar {\n  background-color: #222;\n}\n:host .navbar .navbar-brand {\n  color: #fff;\n}\n:host .navbar .nav-item > a {\n  color: #504d4d;\n}\n:host .navbar .nav-item > a:hover {\n  color: #fff;\n}\n:host .messages {\n  width: 300px;\n}\n:host .messages .media {\n  border-bottom: 1px solid #ddd;\n  padding: 5px 10px;\n}\n:host .messages .media:last-child {\n  border-bottom: none;\n}\n:host .messages .media-body h5 {\n  font-size: 13px;\n  font-weight: 600;\n}\n:host .messages .media-body .small {\n  margin: 0;\n}\n:host .messages .media-body .last {\n  font-size: 12px;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sYXZpa3VtYXIvbXlzdG9yZS9wcm9qZWN0L2NnaS9sb2FuYWRtaW4vbG9hbi1wb3J0YWwvc3JjL2FwcC9sYXlvdXQvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sYXlvdXQvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0ksc0JBSGtCO0FDRTFCO0FERVE7RUFDSSxXQUFBO0FDQVo7QURFUTtFQUNJLGNBQUE7QUNBWjtBRENZO0VBQ0ksV0FBQTtBQ0NoQjtBREdJO0VBQ0ksWUFBQTtBQ0RSO0FERVE7RUFDSSw2QkFBQTtFQUNBLGlCQUFBO0FDQVo7QURDWTtFQUNJLG1CQUFBO0FDQ2hCO0FER1k7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUNEaEI7QURHWTtFQUNJLFNBQUE7QUNEaEI7QURHWTtFQUNJLGVBQUE7RUFDQSxTQUFBO0FDRGhCIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiR0b3BuYXYtYmFja2dyb3VuZC1jb2xvcjogIzIyMjtcbjpob3N0IHtcbiAgICAubmF2YmFyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRvcG5hdi1iYWNrZ3JvdW5kLWNvbG9yO1xuICAgICAgICAubmF2YmFyLWJyYW5kIHtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICB9XG4gICAgICAgIC5uYXYtaXRlbSA+IGEge1xuICAgICAgICAgICAgY29sb3I6IHJnYig4MCwgNzcsIDc3KTtcbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC5tZXNzYWdlcyB7XG4gICAgICAgIHdpZHRoOiAzMDBweDtcbiAgICAgICAgLm1lZGlhIHtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xuICAgICAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLm1lZGlhLWJvZHkge1xuICAgICAgICAgICAgaDUge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnNtYWxsIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubGFzdCB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIjpob3N0IC5uYXZiYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyO1xufVxuOmhvc3QgLm5hdmJhciAubmF2YmFyLWJyYW5kIHtcbiAgY29sb3I6ICNmZmY7XG59XG46aG9zdCAubmF2YmFyIC5uYXYtaXRlbSA+IGEge1xuICBjb2xvcjogIzUwNGQ0ZDtcbn1cbjpob3N0IC5uYXZiYXIgLm5hdi1pdGVtID4gYTpob3ZlciB7XG4gIGNvbG9yOiAjZmZmO1xufVxuOmhvc3QgLm1lc3NhZ2VzIHtcbiAgd2lkdGg6IDMwMHB4O1xufVxuOmhvc3QgLm1lc3NhZ2VzIC5tZWRpYSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xuICBwYWRkaW5nOiA1cHggMTBweDtcbn1cbjpob3N0IC5tZXNzYWdlcyAubWVkaWE6bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG46aG9zdCAubWVzc2FnZXMgLm1lZGlhLWJvZHkgaDUge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG46aG9zdCAubWVzc2FnZXMgLm1lZGlhLWJvZHkgLnNtYWxsIHtcbiAgbWFyZ2luOiAwO1xufVxuOmhvc3QgLm1lc3NhZ2VzIC5tZWRpYS1ib2R5IC5sYXN0IHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW46IDA7XG59Il19 */"

/***/ }),

/***/ "./src/app/layout/components/header/header.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/layout/components/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");




let HeaderComponent = class HeaderComponent {
    constructor(translate, router) {
        this.translate = translate;
        this.router = router;
        this.router.events.subscribe(val => {
            if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"] &&
                window.innerWidth <= 992 &&
                this.isToggled()) {
                this.toggleSidebar();
            }
        });
    }
    ngOnInit() {
        this.pushRightClass = 'push-right';
    }
    isToggled() {
        const dom = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    }
    toggleSidebar() {
        const dom = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    }
    rltAndLtr() {
        const dom = document.querySelector('body');
        dom.classList.toggle('rtl');
    }
    onLoggedout() {
        localStorage.removeItem('isLoggedin');
    }
    changeLang(language) {
        this.translate.use(language);
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/layout/components/header/header.component.html"),
        styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/layout/components/header/header.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], HeaderComponent);



/***/ }),

/***/ "./src/app/layout/components/sidebar/sidebar.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/layout/components/sidebar/sidebar.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidebar {\n  border-radius: 0;\n  position: fixed;\n  z-index: 1000;\n  top: 56px;\n  left: 235px;\n  width: 235px;\n  margin-left: -235px;\n  margin-bottom: 48px;\n  border: none;\n  border-radius: 0;\n  overflow-y: auto;\n  background-color: #222;\n  bottom: 0;\n  overflow-x: hidden;\n  padding-bottom: 40px;\n  white-space: nowrap;\n  transition: all 0.2s ease-in-out;\n}\n.sidebar .list-group a.list-group-item {\n  background: #222;\n  border: 0;\n  border-radius: 0;\n  color: #5c5b5b;\n  text-decoration: none;\n}\n.sidebar .list-group a.list-group-item .fa {\n  margin-right: 10px;\n}\n.sidebar .list-group a:hover {\n  background: #151515;\n  color: #fff;\n}\n.sidebar .list-group a.router-link-active {\n  background: #151515;\n  color: #fff;\n}\n.sidebar .list-group .header-fields {\n  padding-top: 10px;\n}\n.sidebar .list-group .header-fields > .list-group-item:first-child {\n  border-top: 1px solid rgba(255, 255, 255, 0.2);\n}\n.sidebar .sidebar-dropdown *:focus {\n  border-radius: none;\n  border: none;\n}\n.sidebar .sidebar-dropdown .panel-title {\n  font-size: 1rem;\n  height: 50px;\n  margin-bottom: 0;\n}\n.sidebar .sidebar-dropdown .panel-title a {\n  color: #999;\n  text-decoration: none;\n  font-weight: 400;\n  background: #222;\n}\n.sidebar .sidebar-dropdown .panel-title a span {\n  position: relative;\n  display: block;\n  padding: 0.75rem 1.5rem;\n  padding-top: 1rem;\n}\n.sidebar .sidebar-dropdown .panel-title a:hover,\n.sidebar .sidebar-dropdown .panel-title a:focus {\n  color: #fff;\n  outline: none;\n  outline-offset: -2px;\n}\n.sidebar .sidebar-dropdown .panel-title:hover {\n  background: #151515;\n}\n.sidebar .sidebar-dropdown .panel-collapse {\n  border-radious: 0;\n  border: none;\n}\n.sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item {\n  border-radius: 0;\n  background-color: #222;\n  border: 0 solid transparent;\n}\n.sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item a {\n  color: #999;\n}\n.sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item a:hover {\n  color: #fff;\n}\n.sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item:hover {\n  background: #151515;\n}\n.nested-menu .list-group-item {\n  cursor: pointer;\n}\n.nested-menu .nested {\n  list-style-type: none;\n}\n.nested-menu ul.submenu {\n  display: none;\n  height: 0;\n}\n.nested-menu .expand ul.submenu {\n  display: block;\n  list-style-type: none;\n  height: auto;\n}\n.nested-menu .expand ul.submenu li a {\n  color: #fff;\n  padding: 10px;\n  display: block;\n}\n@media screen and (max-width: 992px) {\n  .sidebar {\n    top: 54px;\n    left: 0px;\n  }\n}\n@media print {\n  .sidebar {\n    display: none !important;\n  }\n}\n@media (min-width: 992px) {\n  .header-fields {\n    display: none;\n  }\n}\n::-webkit-scrollbar {\n  width: 8px;\n}\n::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 0px white;\n  border-radius: 3px;\n}\n::-webkit-scrollbar-thumb {\n  border-radius: 3px;\n  -webkit-box-shadow: inset 0 0 3px white;\n}\n.toggle-button {\n  position: fixed;\n  width: 236px;\n  cursor: pointer;\n  padding: 12px;\n  bottom: 0;\n  color: #999;\n  background: #212529;\n  border-top: 1px solid #999;\n  transition: all 0.2s ease-in-out;\n}\n.toggle-button i {\n  font-size: 23px;\n}\n.toggle-button:hover {\n  background: #151515;\n  color: #fff;\n}\n.collapsed {\n  width: 60px;\n}\n.collapsed span {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sYXZpa3VtYXIvbXlzdG9yZS9wcm9qZWN0L2NnaS9sb2FuYWRtaW4vbG9hbi1wb3J0YWwvc3JjL2FwcC9sYXlvdXQvY29tcG9uZW50cy9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xheW91dC9jb21wb25lbnRzL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFic0I7RUFjdEIsU0FBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUtBLGdDQUFBO0FDQUo7QURHUTtFQUNJLGdCQTFCYztFQTJCZCxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUNEWjtBREVZO0VBQ0ksa0JBQUE7QUNBaEI7QURHUTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtBQ0RaO0FER1E7RUFDSSxtQkFBQTtFQUNBLFdBQUE7QUNEWjtBREdRO0VBQ0ksaUJBQUE7QUNEWjtBREdZO0VBQ0ksOENBQUE7QUNEaEI7QURNUTtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtBQ0paO0FETVE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDSlo7QURLWTtFQUNJLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBaEVVO0FDNkQxQjtBRElnQjtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7QUNGcEI7QURLWTs7RUFFSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0FDSGhCO0FETVE7RUFDSSxtQkFBQTtBQ0paO0FETVE7RUFDSSxpQkFBQTtFQUNBLFlBQUE7QUNKWjtBRE1nQjtFQUNJLGdCQUFBO0VBQ0Esc0JBeEZNO0VBeUZOLDJCQUFBO0FDSnBCO0FES29CO0VBQ0ksV0FBQTtBQ0h4QjtBREtvQjtFQUNJLFdBQUE7QUNIeEI7QURNZ0I7RUFDSSxtQkFBQTtBQ0pwQjtBRFlJO0VBQ0ksZUFBQTtBQ1RSO0FEV0k7RUFDSSxxQkFBQTtBQ1RSO0FEV0k7RUFDSSxhQUFBO0VBQ0EsU0FBQTtBQ1RSO0FEWVE7RUFDSSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0FDVlo7QURZZ0I7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7QUNWcEI7QURnQkE7RUFDSTtJQUNJLFNBQUE7SUFDQSxTQUFBO0VDYk47QUFDRjtBRGVBO0VBQ0k7SUFDSSx3QkFBQTtFQ2JOO0FBQ0Y7QURlQTtFQUNJO0lBQ0ksYUFBQTtFQ2JOO0FBQ0Y7QURnQkE7RUFDSSxVQUFBO0FDZEo7QURpQkE7RUFDSSx1Q0FBQTtFQUNBLGtCQUFBO0FDZEo7QURpQkE7RUFDSSxrQkFBQTtFQUNBLHVDQUFBO0FDZEo7QURpQkE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQVFBLDBCQUFBO0VBS0EsZ0NBQUE7QUNyQko7QURTSTtFQUNJLGVBQUE7QUNQUjtBRFNJO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0FDUFI7QURpQkE7RUFDSSxXQUFBO0FDZEo7QURlSTtFQUNJLGFBQUE7QUNiUiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9jb21wb25lbnRzL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiR0b3BuYXYtYmFja2dyb3VuZC1jb2xvcjogIzIyMjtcbi5zaWRlYmFyIHtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB6LWluZGV4OiAxMDAwO1xuICAgIHRvcDogNTZweDtcbiAgICBsZWZ0OiAyMzVweDtcbiAgICB3aWR0aDogMjM1cHg7XG4gICAgbWFyZ2luLWxlZnQ6IC0yMzVweDtcbiAgICBtYXJnaW4tYm90dG9tOiA0OHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHRvcG5hdi1iYWNrZ3JvdW5kLWNvbG9yO1xuICAgIGJvdHRvbTogMDtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgcGFkZGluZy1ib3R0b206IDQwcHg7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICAgIC8vIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMyk7XG4gICAgLmxpc3QtZ3JvdXAge1xuICAgICAgICBhLmxpc3QtZ3JvdXAtaXRlbSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkdG9wbmF2LWJhY2tncm91bmQtY29sb3I7XG4gICAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICAgICAgY29sb3I6IHJnYig5MiwgOTEsIDkxKTtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIC5mYSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGE6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogZGFya2VuKCR0b3BuYXYtYmFja2dyb3VuZC1jb2xvciwgNSUpO1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIH1cbiAgICAgICAgYS5yb3V0ZXItbGluay1hY3RpdmUge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogZGFya2VuKCR0b3BuYXYtYmFja2dyb3VuZC1jb2xvciwgNSUpO1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIH1cbiAgICAgICAgLmhlYWRlci1maWVsZHMge1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG5cbiAgICAgICAgICAgID4gLmxpc3QtZ3JvdXAtaXRlbTpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAuc2lkZWJhci1kcm9wZG93biB7XG4gICAgICAgICo6Zm9jdXMge1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogbm9uZTtcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICAucGFuZWwtdGl0bGUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjOTk5O1xuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICR0b3BuYXYtYmFja2dyb3VuZC1jb2xvcjtcbiAgICAgICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMC43NXJlbSAxLjVyZW07XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxcmVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGE6aG92ZXIsXG4gICAgICAgICAgICBhOmZvY3VzIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgICAgIG91dGxpbmUtb2Zmc2V0OiAtMnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5wYW5lbC10aXRsZTpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBkYXJrZW4oJHRvcG5hdi1iYWNrZ3JvdW5kLWNvbG9yLCA1JSk7XG4gICAgICAgIH1cbiAgICAgICAgLnBhbmVsLWNvbGxhcHNlIHtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpb3VzOiAwO1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgLnBhbmVsLWJvZHkge1xuICAgICAgICAgICAgICAgIC5saXN0LWdyb3VwLWl0ZW0ge1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdG9wbmF2LWJhY2tncm91bmQtY29sb3I7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzk5OTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBhOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5saXN0LWdyb3VwLWl0ZW06aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBkYXJrZW4oJHRvcG5hdi1iYWNrZ3JvdW5kLWNvbG9yLCA1JSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4ubmVzdGVkLW1lbnUge1xuICAgIC5saXN0LWdyb3VwLWl0ZW0ge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICAgIC5uZXN0ZWQge1xuICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgfVxuICAgIHVsLnN1Ym1lbnUge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICBoZWlnaHQ6IDA7XG4gICAgfVxuICAgICYgLmV4cGFuZCB7XG4gICAgICAgIHVsLnN1Ym1lbnUge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICAgICBsaSB7XG4gICAgICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAgIC5zaWRlYmFyIHtcbiAgICAgICAgdG9wOiA1NHB4O1xuICAgICAgICBsZWZ0OiAwcHg7XG4gICAgfVxufVxuQG1lZGlhIHByaW50IHtcbiAgICAuc2lkZWJhciB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgICAuaGVhZGVyLWZpZWxkcyB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICB3aWR0aDogOHB4O1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCAwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCAzcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcbn1cblxuLnRvZ2dsZS1idXR0b24ge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB3aWR0aDogMjM2cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBhZGRpbmc6IDEycHg7XG4gICAgYm90dG9tOiAwO1xuICAgIGNvbG9yOiAjOTk5O1xuICAgIGJhY2tncm91bmQ6ICMyMTI1Mjk7XG4gICAgaSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjNweDtcbiAgICB9XG4gICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6IGRhcmtlbigkdG9wbmF2LWJhY2tncm91bmQtY29sb3IsIDUlKTtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgfVxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjOTk5O1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG59XG5cbi5jb2xsYXBzZWQge1xuICAgIHdpZHRoOiA2MHB4O1xuICAgIHNwYW4ge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbn1cbiIsIi5zaWRlYmFyIHtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAxMDAwO1xuICB0b3A6IDU2cHg7XG4gIGxlZnQ6IDIzNXB4O1xuICB3aWR0aDogMjM1cHg7XG4gIG1hcmdpbi1sZWZ0OiAtMjM1cHg7XG4gIG1hcmdpbi1ib3R0b206IDQ4cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjtcbiAgYm90dG9tOiAwO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIHBhZGRpbmctYm90dG9tOiA0MHB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbn1cbi5zaWRlYmFyIC5saXN0LWdyb3VwIGEubGlzdC1ncm91cC1pdGVtIHtcbiAgYmFja2dyb3VuZDogIzIyMjtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBjb2xvcjogIzVjNWI1YjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLnNpZGViYXIgLmxpc3QtZ3JvdXAgYS5saXN0LWdyb3VwLWl0ZW0gLmZhIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLnNpZGViYXIgLmxpc3QtZ3JvdXAgYTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMxNTE1MTU7XG4gIGNvbG9yOiAjZmZmO1xufVxuLnNpZGViYXIgLmxpc3QtZ3JvdXAgYS5yb3V0ZXItbGluay1hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiAjMTUxNTE1O1xuICBjb2xvcjogI2ZmZjtcbn1cbi5zaWRlYmFyIC5saXN0LWdyb3VwIC5oZWFkZXItZmllbGRzIHtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG4uc2lkZWJhciAubGlzdC1ncm91cCAuaGVhZGVyLWZpZWxkcyA+IC5saXN0LWdyb3VwLWl0ZW06Zmlyc3QtY2hpbGQge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xufVxuLnNpZGViYXIgLnNpZGViYXItZHJvcGRvd24gKjpmb2N1cyB7XG4gIGJvcmRlci1yYWRpdXM6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbn1cbi5zaWRlYmFyIC5zaWRlYmFyLWRyb3Bkb3duIC5wYW5lbC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgaGVpZ2h0OiA1MHB4O1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuLnNpZGViYXIgLnNpZGViYXItZHJvcGRvd24gLnBhbmVsLXRpdGxlIGEge1xuICBjb2xvcjogIzk5OTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXdlaWdodDogNDAwO1xuICBiYWNrZ3JvdW5kOiAjMjIyO1xufVxuLnNpZGViYXIgLnNpZGViYXItZHJvcGRvd24gLnBhbmVsLXRpdGxlIGEgc3BhbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDAuNzVyZW0gMS41cmVtO1xuICBwYWRkaW5nLXRvcDogMXJlbTtcbn1cbi5zaWRlYmFyIC5zaWRlYmFyLWRyb3Bkb3duIC5wYW5lbC10aXRsZSBhOmhvdmVyLFxuLnNpZGViYXIgLnNpZGViYXItZHJvcGRvd24gLnBhbmVsLXRpdGxlIGE6Zm9jdXMge1xuICBjb2xvcjogI2ZmZjtcbiAgb3V0bGluZTogbm9uZTtcbiAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7XG59XG4uc2lkZWJhciAuc2lkZWJhci1kcm9wZG93biAucGFuZWwtdGl0bGU6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjMTUxNTE1O1xufVxuLnNpZGViYXIgLnNpZGViYXItZHJvcGRvd24gLnBhbmVsLWNvbGxhcHNlIHtcbiAgYm9yZGVyLXJhZGlvdXM6IDA7XG4gIGJvcmRlcjogbm9uZTtcbn1cbi5zaWRlYmFyIC5zaWRlYmFyLWRyb3Bkb3duIC5wYW5lbC1jb2xsYXBzZSAucGFuZWwtYm9keSAubGlzdC1ncm91cC1pdGVtIHtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjtcbiAgYm9yZGVyOiAwIHNvbGlkIHRyYW5zcGFyZW50O1xufVxuLnNpZGViYXIgLnNpZGViYXItZHJvcGRvd24gLnBhbmVsLWNvbGxhcHNlIC5wYW5lbC1ib2R5IC5saXN0LWdyb3VwLWl0ZW0gYSB7XG4gIGNvbG9yOiAjOTk5O1xufVxuLnNpZGViYXIgLnNpZGViYXItZHJvcGRvd24gLnBhbmVsLWNvbGxhcHNlIC5wYW5lbC1ib2R5IC5saXN0LWdyb3VwLWl0ZW0gYTpob3ZlciB7XG4gIGNvbG9yOiAjZmZmO1xufVxuLnNpZGViYXIgLnNpZGViYXItZHJvcGRvd24gLnBhbmVsLWNvbGxhcHNlIC5wYW5lbC1ib2R5IC5saXN0LWdyb3VwLWl0ZW06aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjMTUxNTE1O1xufVxuXG4ubmVzdGVkLW1lbnUgLmxpc3QtZ3JvdXAtaXRlbSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5uZXN0ZWQtbWVudSAubmVzdGVkIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuLm5lc3RlZC1tZW51IHVsLnN1Ym1lbnUge1xuICBkaXNwbGF5OiBub25lO1xuICBoZWlnaHQ6IDA7XG59XG4ubmVzdGVkLW1lbnUgLmV4cGFuZCB1bC5zdWJtZW51IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuLm5lc3RlZC1tZW51IC5leHBhbmQgdWwuc3VibWVudSBsaSBhIHtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAuc2lkZWJhciB7XG4gICAgdG9wOiA1NHB4O1xuICAgIGxlZnQ6IDBweDtcbiAgfVxufVxuQG1lZGlhIHByaW50IHtcbiAgLnNpZGViYXIge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIC5oZWFkZXItZmllbGRzIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDhweDtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDBweCB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCAzcHggd2hpdGU7XG59XG5cbi50b2dnbGUtYnV0dG9uIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMjM2cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZzogMTJweDtcbiAgYm90dG9tOiAwO1xuICBjb2xvcjogIzk5OTtcbiAgYmFja2dyb3VuZDogIzIxMjUyOTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM5OTk7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xufVxuLnRvZ2dsZS1idXR0b24gaSB7XG4gIGZvbnQtc2l6ZTogMjNweDtcbn1cbi50b2dnbGUtYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzE1MTUxNTtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5jb2xsYXBzZWQge1xuICB3aWR0aDogNjBweDtcbn1cbi5jb2xsYXBzZWQgc3BhbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59Il19 */"

/***/ }),

/***/ "./src/app/layout/components/sidebar/sidebar.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/layout/components/sidebar/sidebar.component.ts ***!
  \****************************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");




let SidebarComponent = class SidebarComponent {
    constructor(translate, router) {
        this.translate = translate;
        this.router = router;
        this.collapsedEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.router.events.subscribe(val => {
            if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"] &&
                window.innerWidth <= 992 &&
                this.isToggled()) {
                this.toggleSidebar();
            }
        });
        this.loginType = localStorage.getItem('loginType');
    }
    ngOnInit() {
        this.isActive = false;
        this.collapsed = false;
        this.showMenu = '';
        this.pushRightClass = 'push-right';
    }
    eventCalled() {
        this.isActive = !this.isActive;
    }
    addExpandClass(element) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        }
        else {
            this.showMenu = element;
        }
    }
    toggleCollapsed() {
        this.collapsed = !this.collapsed;
        this.collapsedEvent.emit(this.collapsed);
    }
    isToggled() {
        const dom = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    }
    toggleSidebar() {
        const dom = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    }
    rltAndLtr() {
        const dom = document.querySelector('body');
        dom.classList.toggle('rtl');
    }
    changeLang(language) {
        this.translate.use(language);
    }
    onLoggedout() {
        localStorage.removeItem('isLoggedin');
    }
};
SidebarComponent.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SidebarComponent.prototype, "collapsedEvent", void 0);
SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sidebar',
        template: __webpack_require__(/*! raw-loader!./sidebar.component.html */ "./node_modules/raw-loader/index.js!./src/app/layout/components/sidebar/sidebar.component.html"),
        styles: [__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/layout/components/sidebar/sidebar.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], SidebarComponent);



/***/ }),

/***/ "./src/app/layout/layout-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/layout/layout-routing.module.ts ***!
  \*************************************************/
/*! exports provided: LayoutRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutRoutingModule", function() { return LayoutRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout.component */ "./src/app/layout/layout.component.ts");




const routes = [
    {
        path: '',
        component: _layout_component__WEBPACK_IMPORTED_MODULE_3__["LayoutComponent"],
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
            { path: 'dashboard', loadChildren: () => Promise.all(/*! import() | dashboard-dashboard-module */[__webpack_require__.e("common"), __webpack_require__.e("dashboard-dashboard-module")]).then(__webpack_require__.bind(null, /*! ./dashboard/dashboard.module */ "./src/app/layout/dashboard/dashboard.module.ts")).then(m => m.DashboardModule) },
            { path: 'charts', loadChildren: () => Promise.all(/*! import() | charts-charts-module */[__webpack_require__.e("common"), __webpack_require__.e("charts-charts-module")]).then(__webpack_require__.bind(null, /*! ./charts/charts.module */ "./src/app/layout/charts/charts.module.ts")).then(m => m.ChartsModule) },
            { path: 'tables', loadChildren: () => Promise.all(/*! import() | tables-tables-module */[__webpack_require__.e("common"), __webpack_require__.e("tables-tables-module")]).then(__webpack_require__.bind(null, /*! ./tables/tables.module */ "./src/app/layout/tables/tables.module.ts")).then(m => m.TablesModule) },
            { path: 'bs-element', loadChildren: () => Promise.all(/*! import() | bs-element-bs-element-module */[__webpack_require__.e("common"), __webpack_require__.e("bs-element-bs-element-module")]).then(__webpack_require__.bind(null, /*! ./bs-element/bs-element.module */ "./src/app/layout/bs-element/bs-element.module.ts")).then(m => m.BsElementModule) },
            { path: 'grid', loadChildren: () => Promise.all(/*! import() | grid-grid-module */[__webpack_require__.e("common"), __webpack_require__.e("grid-grid-module")]).then(__webpack_require__.bind(null, /*! ./grid/grid.module */ "./src/app/layout/grid/grid.module.ts")).then(m => m.GridModule) },
            { path: 'components', loadChildren: () => __webpack_require__.e(/*! import() | bs-component-bs-component-module */ "bs-component-bs-component-module").then(__webpack_require__.bind(null, /*! ./bs-component/bs-component.module */ "./src/app/layout/bs-component/bs-component.module.ts")).then(m => m.BsComponentModule) },
            { path: 'blank-page', loadChildren: () => __webpack_require__.e(/*! import() | blank-page-blank-page-module */ "blank-page-blank-page-module").then(__webpack_require__.bind(null, /*! ./blank-page/blank-page.module */ "./src/app/layout/blank-page/blank-page.module.ts")).then(m => m.BlankPageModule) },
            // tslint:disable-next-line: max-line-length
            { path: 'newloan', loadChildren: () => __webpack_require__.e(/*! import() | new-loan-application-new-loan-application-module */ "new-loan-application-new-loan-application-module").then(__webpack_require__.bind(null, /*! ./new-loan-application/new-loan-application.module */ "./src/app/layout/new-loan-application/new-loan-application.module.ts")).then(m => m.NewLoanApplicationModule) },
            // tslint:disable-next-line: max-line-length
            { path: 'loanlist', loadChildren: () => Promise.all(/*! import() | list-of-loan-application-list-of-loan-application-module */[__webpack_require__.e("default~list-of-loan-application-list-of-loan-application-module~loanOfficer-all-applications-all-ap~e6de4687"), __webpack_require__.e("list-of-loan-application-list-of-loan-application-module")]).then(__webpack_require__.bind(null, /*! ./list-of-loan-application/list-of-loan-application.module */ "./src/app/layout/list-of-loan-application/list-of-loan-application.module.ts")).then(m => m.ListOfLoanApplicationModule) },
            { path: 'loanstatus', loadChildren: () => __webpack_require__.e(/*! import() | loan-status-loan-status-module */ "loan-status-loan-status-module").then(__webpack_require__.bind(null, /*! ./loan-status/loan-status.module */ "./src/app/layout/loan-status/loan-status.module.ts")).then(m => m.LoanStatusModule) },
            // tslint:disable-next-line: max-line-length
            //{ path: 'applicationdetail', loadChildren: () => import('./application-details/application-details.module').then(m => m.ApplicationDetailsModule)}
            // tslint:disable-next-line: max-line-length
            { path: 'allapplications', loadChildren: () => Promise.all(/*! import() | loanOfficer-all-applications-all-applications-module */[__webpack_require__.e("default~list-of-loan-application-list-of-loan-application-module~loanOfficer-all-applications-all-ap~e6de4687"), __webpack_require__.e("loanOfficer-all-applications-all-applications-module")]).then(__webpack_require__.bind(null, /*! ./loanOfficer/all-applications/all-applications.module */ "./src/app/layout/loanOfficer/all-applications/all-applications.module.ts")).then(m => m.AllApplicationsModule) },
        ]
    }
];
let LayoutRoutingModule = class LayoutRoutingModule {
};
LayoutRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], LayoutRoutingModule);



/***/ }),

/***/ "./src/app/layout/layout.component.scss":
/*!**********************************************!*\
  !*** ./src/app/layout/layout.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  transition: margin-left 0.2s ease-in-out;\n}\n\n.main-container {\n  margin-top: 56px;\n  margin-left: 235px;\n  padding: 15px;\n  -ms-overflow-x: hidden;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  position: relative;\n  overflow: hidden;\n}\n\n.collapsed {\n  margin-left: 60px;\n}\n\n@media screen and (max-width: 992px) {\n  .main-container {\n    margin-left: 0px !important;\n  }\n}\n\n@media print {\n  .main-container {\n    margin-top: 0px !important;\n    margin-left: 0px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sYXZpa3VtYXIvbXlzdG9yZS9wcm9qZWN0L2NnaS9sb2FuYWRtaW4vbG9hbi1wb3J0YWwvc3JjL2FwcC9sYXlvdXQvbGF5b3V0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sYXlvdXQvbGF5b3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBS0ksd0NBQUE7QUNDSjs7QURDQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0VKOztBREFBO0VBQ0ksaUJBQUE7QUNHSjs7QUREQTtFQUNJO0lBQ0ksMkJBQUE7RUNJTjtBQUNGOztBREZBO0VBQ0k7SUFDSSwwQkFBQTtJQUNBLDJCQUFBO0VDSU47QUFDRiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9sYXlvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IG1hcmdpbi1sZWZ0IDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgLW1vei10cmFuc2l0aW9uOiBtYXJnaW4tbGVmdCAwLjJzIGVhc2UtaW4tb3V0O1xuICAgIC1tcy10cmFuc2l0aW9uOiBtYXJnaW4tbGVmdCAwLjJzIGVhc2UtaW4tb3V0O1xuICAgIC1vLXRyYW5zaXRpb246IG1hcmdpbi1sZWZ0IDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgdHJhbnNpdGlvbjogbWFyZ2luLWxlZnQgMC4ycyBlYXNlLWluLW91dDtcbn1cbi5tYWluLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luLXRvcDogNTZweDtcbiAgICBtYXJnaW4tbGVmdDogMjM1cHg7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICAtbXMtb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG4uY29sbGFwc2VkIHtcbiAgICBtYXJnaW4tbGVmdDogNjBweDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gICAgLm1haW4tY29udGFpbmVyIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xuICAgIH1cbn1cbkBtZWRpYSBwcmludCB7XG4gICAgLm1haW4tY29udGFpbmVyIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwcHggIWltcG9ydGFudDtcbiAgICB9XG59XG4iLCIqIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBtYXJnaW4tbGVmdCAwLjJzIGVhc2UtaW4tb3V0O1xuICAtbW96LXRyYW5zaXRpb246IG1hcmdpbi1sZWZ0IDAuMnMgZWFzZS1pbi1vdXQ7XG4gIC1tcy10cmFuc2l0aW9uOiBtYXJnaW4tbGVmdCAwLjJzIGVhc2UtaW4tb3V0O1xuICAtby10cmFuc2l0aW9uOiBtYXJnaW4tbGVmdCAwLjJzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiBtYXJnaW4tbGVmdCAwLjJzIGVhc2UtaW4tb3V0O1xufVxuXG4ubWFpbi1jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiA1NnB4O1xuICBtYXJnaW4tbGVmdDogMjM1cHg7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIC1tcy1vdmVyZmxvdy14OiBoaWRkZW47XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5jb2xsYXBzZWQge1xuICBtYXJnaW4tbGVmdDogNjBweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLm1haW4tY29udGFpbmVyIHtcbiAgICBtYXJnaW4tbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSBwcmludCB7XG4gIC5tYWluLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/layout/layout.component.ts":
/*!********************************************!*\
  !*** ./src/app/layout/layout.component.ts ***!
  \********************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LayoutComponent = class LayoutComponent {
    constructor() { }
    ngOnInit() { }
    receiveCollapsed($event) {
        this.collapedSideBar = $event;
    }
};
LayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-layout',
        template: __webpack_require__(/*! raw-loader!./layout.component.html */ "./node_modules/raw-loader/index.js!./src/app/layout/layout.component.html"),
        styles: [__webpack_require__(/*! ./layout.component.scss */ "./src/app/layout/layout.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], LayoutComponent);



/***/ }),

/***/ "./src/app/layout/layout.module.ts":
/*!*****************************************!*\
  !*** ./src/app/layout/layout.module.ts ***!
  \*****************************************/
/*! exports provided: LayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _layout_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layout-routing.module */ "./src/app/layout/layout-routing.module.ts");
/* harmony import */ var _layout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layout.component */ "./src/app/layout/layout.component.ts");
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/sidebar/sidebar.component */ "./src/app/layout/components/sidebar/sidebar.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/layout/components/header/header.component.ts");
/* harmony import */ var _shared_models_new_loan__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/models/new-loan */ "./src/app/shared/models/new-loan.ts");











let LayoutModule = class LayoutModule {
};
LayoutModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _layout_routing_module__WEBPACK_IMPORTED_MODULE_6__["LayoutRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDropdownModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
        ],
        declarations: [_layout_component__WEBPACK_IMPORTED_MODULE_7__["LayoutComponent"], _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_8__["SidebarComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"]],
        exports: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]],
        providers: [
            _shared_models_new_loan__WEBPACK_IMPORTED_MODULE_10__["NewLoan"]
        ]
    })
], LayoutModule);



/***/ }),

/***/ "./src/app/shared/models/new-loan.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/models/new-loan.ts ***!
  \*******************************************/
/*! exports provided: NewLoan */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewLoan", function() { return NewLoan; });
class NewLoan {
}


/***/ })

}]);
//# sourceMappingURL=layout-layout-module-es2015.js.map