(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{Nisq:function(l,n,u){"use strict";u.r(n);var e=u("8Y7J");class t{}var o=u("pMnS"),i=u("SVse"),a=u("s7LF"),s=u("Tdnt"),r=u("akr8");class b{}class c{constructor(l,n,u,t){this.modalService=l,this.newLoanObj=n,this.httpService=u,this.router=t,this.passEntry=new e.m,this.loanForm=new a.g({firstName:new a.e("")}),this.newLoanObj.apr="",this.newLoanObj.comments=""}ngOnInit(){console.log(this.loanDetail),this.newLoanObj.firstName=this.loanDetail.firstName,this.newLoanObj.lastName=this.loanDetail.lastName,this.newLoanObj.address=this.loanDetail.address,this.newLoanObj.SSN=this.loanDetail.socialSecurityNumber,this.newLoanObj.income=this.loanDetail.income,this.newLoanObj.creditScore=this.loanDetail.creditScore,this.newLoanObj.loanAmount=this.loanDetail.loanAmount,this.newLoanObj.email=this.loanDetail.email}openModal(l){this.modalService.open(l)}closeModal(){this.modalService.dismissAll()}onSubmit(l,n){console.log("form:::",l,n),l.valid&&(this.completeTask=new b,this.completeTask.taskId=this.loanDetail.processInstanceId,this.completeTask.approved="true",this.completeTask.apr=this.newLoanObj.apr,this.completeTask.approvedBy="lurie",this.completeTask.approvedOn=""+Object(i.t)(new Date,"yyyy/MM/dd","en"),this.completeTask.loanAmount=this.newLoanObj.loanAmount,this.completeTask.comments=this.newLoanObj.comments,this.completeApplication(this.completeTask))}rejectApplication(){this.completeTask=new b,this.completeTask.taskId=this.loanDetail.processInstanceId,this.completeTask.approved="false",this.completeTask.apr=this.newLoanObj.apr,this.completeTask.approvedBy="lurie",this.completeTask.approvedOn=""+Object(i.t)(new Date,"yyyy/MM/dd","en"),this.completeTask.loanAmount=this.newLoanObj.loanAmount,this.completeTask.comments=this.newLoanObj.comments,this.completeApplication(this.completeTask)}completeApplication(l){this.httpService.completeLoanApplications(l).subscribe(l=>{console.log("Data",l),this.passEntry.emit("REFRESH"),this.closeModal()},l=>console.log(l))}}class d{constructor(l,n,u){this.httpService=l,this.modalService=u,this.page=1,this.pageSize=4,this.loanApplications=[],this.collectionSize=this.loanApplications.length,this.getAllLoanApplication({processDefinition:"loanApproval"})}ngOnInit(){}getAllLoanApplication(l){this.httpService.getAllLoanApplications(l).subscribe(l=>{console.log("Loan Application Response",l),this.loanApplications=l},l=>console.log("Error:",l))}rowClicked(l){const n=this.modalService.open(c,{size:"lg"});n.componentInstance.loanDetail=l,n.result.then(l=>{},l=>{}),n.componentInstance.passEntry.subscribe(l=>{console.log("Data Received:",l),"REFRESH"===l&&this.getAllLoanApplication({processDefinition:"loanApproval"})})}}var p=u("G0yt"),g=e.ob({encapsulation:0,styles:[[""]],data:{}});function m(l){return e.Jb(0,[(l()(),e.qb(0,0,null,null,13,"tr",[],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.rowClicked(l.context.$implicit)&&e),e},null,null)),(l()(),e.qb(1,0,null,null,1,"th",[["scope","row"]],null,null,null,null,null)),(l()(),e.Hb(2,null,["",""])),(l()(),e.qb(3,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Hb(4,null,[" "," "])),(l()(),e.qb(5,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Hb(6,null,["",""])),(l()(),e.qb(7,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Hb(8,null,["",""])),(l()(),e.qb(9,0,null,null,4,"td",[],null,null,null,null,null)),e.Eb(512,null,i.y,i.z,[e.r,e.s,e.k,e.C]),e.pb(11,278528,null,0,i.j,[i.y],{ngClass:[0,"ngClass"]},null),e.Db(12,{"text-success":0,"text-warning":1,"text-danger":2}),(l()(),e.Hb(13,null,[" ",""]))],function(l,n){var u=l(n,12,0,"Approved"==n.context.$implicit.status,"In Review"==n.context.$implicit.status,"Declined"==n.context.$implicit.status);l(n,11,0,u)},function(l,n){l(n,2,0,n.context.$implicit.userId),l(n,4,0,n.context.$implicit.firstName+" "+n.context.$implicit.lastName),l(n,6,0,n.context.$implicit.loanAmount),l(n,8,0,n.context.$implicit.creditScore),l(n,13,0,n.context.$implicit.income)})}function A(l){return e.Jb(0,[(l()(),e.qb(0,0,null,null,39,"div",[["class","container"]],null,null,null,null,null)),(l()(),e.qb(1,0,null,null,38,"div",[["class","loan-container"]],null,null,null,null,null)),(l()(),e.qb(2,0,null,null,1,"div",[["class","loan-title"]],null,null,null,null,null)),(l()(),e.Hb(-1,null,["List of applications"])),(l()(),e.qb(4,0,null,null,35,"div",[["class","loan-body"]],null,null,null,null,null)),(l()(),e.qb(5,0,null,null,15,"table",[["class","table table-striped"]],null,null,null,null,null)),(l()(),e.qb(6,0,null,null,11,"thead",[],null,null,null,null,null)),(l()(),e.qb(7,0,null,null,10,"tr",[],null,null,null,null,null)),(l()(),e.qb(8,0,null,null,1,"th",[["scope","col"]],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Case Id"])),(l()(),e.qb(10,0,null,null,1,"th",[["scope","col"]],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Name"])),(l()(),e.qb(12,0,null,null,1,"th",[["scope","col"]],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Loan Amount"])),(l()(),e.qb(14,0,null,null,1,"th",[["scope","col"]],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Credit Score"])),(l()(),e.qb(16,0,null,null,1,"th",[["scope","col"]],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Income"])),(l()(),e.qb(18,0,null,null,2,"tbody",[],null,null,null,null,null)),(l()(),e.fb(16777216,null,null,1,null,m)),e.pb(20,278528,null,0,i.k,[e.N,e.K,e.r],{ngForOf:[0,"ngForOf"]},null),(l()(),e.qb(21,0,null,null,18,"div",[["class","d-flex justify-content-between p-2"]],null,null,null,null,null)),(l()(),e.qb(22,0,null,null,17,"select",[["class","custom-select"],["style","width: auto"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"change"],[null,"blur"]],function(l,n,u){var t=!0,o=l.component;return"change"===n&&(t=!1!==e.Ab(l,23).onChange(u.target.value)&&t),"blur"===n&&(t=!1!==e.Ab(l,23).onTouched()&&t),"ngModelChange"===n&&(t=!1!==(o.pageSize=u)&&t),t},null,null)),e.pb(23,16384,null,0,a.v,[e.C,e.k],null,null),e.Eb(1024,null,a.k,function(l){return[l]},[a.v]),e.pb(25,671744,null,0,a.p,[[8,null],[8,null],[8,null],[6,a.k]],{model:[0,"model"]},{update:"ngModelChange"}),e.Eb(2048,null,a.l,null,[a.p]),e.pb(27,16384,null,0,a.m,[[4,a.l]],null,null),(l()(),e.qb(28,0,null,null,3,"option",[],null,null,null,null,null)),e.pb(29,147456,null,0,a.q,[e.k,e.C,[2,a.v]],{ngValue:[0,"ngValue"]},null),e.pb(30,147456,null,0,a.z,[e.k,e.C,[8,null]],{ngValue:[0,"ngValue"]},null),(l()(),e.Hb(-1,null,["2 items per page"])),(l()(),e.qb(32,0,null,null,3,"option",[],null,null,null,null,null)),e.pb(33,147456,null,0,a.q,[e.k,e.C,[2,a.v]],{ngValue:[0,"ngValue"]},null),e.pb(34,147456,null,0,a.z,[e.k,e.C,[8,null]],{ngValue:[0,"ngValue"]},null),(l()(),e.Hb(-1,null,["4 items per page"])),(l()(),e.qb(36,0,null,null,3,"option",[],null,null,null,null,null)),e.pb(37,147456,null,0,a.q,[e.k,e.C,[2,a.v]],{ngValue:[0,"ngValue"]},null),e.pb(38,147456,null,0,a.z,[e.k,e.C,[8,null]],{ngValue:[0,"ngValue"]},null),(l()(),e.Hb(-1,null,["6 items per page"]))],function(l,n){var u=n.component;l(n,20,0,u.loanApplications),l(n,25,0,u.pageSize),l(n,29,0,2),l(n,30,0,2),l(n,33,0,4),l(n,34,0,4),l(n,37,0,6),l(n,38,0,6)},function(l,n){l(n,22,0,e.Ab(n,27).ngClassUntouched,e.Ab(n,27).ngClassTouched,e.Ab(n,27).ngClassPristine,e.Ab(n,27).ngClassDirty,e.Ab(n,27).ngClassValid,e.Ab(n,27).ngClassInvalid,e.Ab(n,27).ngClassPending)})}function h(l){return e.Jb(0,[(l()(),e.qb(0,0,null,null,1,"app-all-applications",[],null,null,null,A,g)),e.pb(1,114688,null,0,d,[s.a,p.E,p.D],null,null)],function(l,n){l(n,1,0)},null)}var f=e.mb("app-all-applications",d,h,{},{},[]),q=u("9AJC"),v=u("iInd"),C=e.ob({encapsulation:0,styles:[[""]],data:{}});function y(l){return e.Jb(0,[(l()(),e.qb(0,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["First name is required"]))],null,null)}function k(l){return e.Jb(0,[(l()(),e.qb(0,0,null,null,2,"div",[["class","text-danger"]],null,null,null,null,null)),(l()(),e.fb(16777216,null,null,1,null,y)),e.pb(2,16384,null,0,i.l,[e.N,e.K],{ngIf:[0,"ngIf"]},null)],function(l,n){l(n,2,0,e.Ab(n.parent,24).errors.required)},null)}function I(l){return e.Jb(0,[(l()(),e.qb(0,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Last name is required"]))],null,null)}function j(l){return e.Jb(0,[(l()(),e.qb(0,0,null,null,2,"div",[["class","text-danger"]],null,null,null,null,null)),(l()(),e.fb(16777216,null,null,1,null,I)),e.pb(2,16384,null,0,i.l,[e.N,e.K],{ngIf:[0,"ngIf"]},null)],function(l,n){l(n,2,0,e.Ab(n.parent,41).errors.required)},null)}function w(l){return e.Jb(0,[(l()(),e.qb(0,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["SSN is required"]))],null,null)}function E(l){return e.Jb(0,[(l()(),e.qb(0,0,null,null,2,"div",[["class","text-danger"]],null,null,null,null,null)),(l()(),e.fb(16777216,null,null,1,null,w)),e.pb(2,16384,null,0,i.l,[e.N,e.K],{ngIf:[0,"ngIf"]},null)],function(l,n){l(n,2,0,e.Ab(n.parent,57).errors.required)},null)}function D(l){return e.Jb(0,[(l()(),e.qb(0,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Income is required"]))],null,null)}function S(l){return e.Jb(0,[(l()(),e.qb(0,0,null,null,2,"div",[["class","text-danger"]],null,null,null,null,null)),(l()(),e.fb(16777216,null,null,1,null,D)),e.pb(2,16384,null,0,i.l,[e.N,e.K],{ngIf:[0,"ngIf"]},null)],function(l,n){l(n,2,0,e.Ab(n.parent,70).errors.required)},null)}function L(l){return e.Jb(0,[(l()(),e.qb(0,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Credit Score is required"]))],null,null)}function N(l){return e.Jb(0,[(l()(),e.qb(0,0,null,null,2,"div",[["class","text-danger"]],null,null,null,null,null)),(l()(),e.fb(16777216,null,null,1,null,L)),e.pb(2,16384,null,0,i.l,[e.N,e.K],{ngIf:[0,"ngIf"]},null)],function(l,n){l(n,2,0,e.Ab(n.parent,83).errors.required)},null)}function H(l){return e.Jb(0,[(l()(),e.qb(0,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Email is required"]))],null,null)}function O(l){return e.Jb(0,[(l()(),e.qb(0,0,null,null,2,"div",[["class","text-danger"]],null,null,null,null,null)),(l()(),e.fb(16777216,null,null,1,null,H)),e.pb(2,16384,null,0,i.l,[e.N,e.K],{ngIf:[0,"ngIf"]},null)],function(l,n){l(n,2,0,e.Ab(n.parent,83).errors.required)},null)}function M(l){return e.Jb(0,[(l()(),e.qb(0,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Loan amount is required"]))],null,null)}function T(l){return e.Jb(0,[(l()(),e.qb(0,0,null,null,2,"div",[["class","text-danger"]],null,null,null,null,null)),(l()(),e.fb(16777216,null,null,1,null,M)),e.pb(2,16384,null,0,i.l,[e.N,e.K],{ngIf:[0,"ngIf"]},null)],function(l,n){l(n,2,0,e.Ab(n.parent,110).errors.required)},null)}function x(l){return e.Jb(0,[(l()(),e.qb(0,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Apr is required"]))],null,null)}function _(l){return e.Jb(0,[(l()(),e.qb(0,0,null,null,2,"div",[["class","text-danger"]],null,null,null,null,null)),(l()(),e.fb(16777216,null,null,1,null,x)),e.pb(2,16384,null,0,i.l,[e.N,e.K],{ngIf:[0,"ngIf"]},null)],function(l,n){l(n,2,0,e.Ab(n.parent,123).errors.required)},null)}function J(l){return e.Jb(0,[(l()(),e.qb(0,0,null,null,5,"div",[["class","modal-header"]],null,null,null,null,null)),(l()(),e.qb(1,0,null,null,1,"h4",[["class","modal-title"]],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Application Detail"])),(l()(),e.qb(3,0,null,null,2,"button",[["aria-label","Close"],["class","close"],["type","button"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.closeModal()&&e),e},null,null)),(l()(),e.qb(4,0,null,null,1,"span",[["aria-hidden","true"]],null,null,null,null,null)),(l()(),e.Hb(-1,null,["\xd7"])),(l()(),e.qb(6,0,null,null,142,"div",[["class","modal-body loan-container"]],null,null,null,null,null)),(l()(),e.qb(7,0,null,null,141,"div",[["class","loan-body p-10"]],null,null,null,null,null)),(l()(),e.qb(8,0,null,null,140,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(l,n,u){var t=!0,o=l.component;return"submit"===n&&(t=!1!==e.Ab(l,10).onSubmit(u)&&t),"reset"===n&&(t=!1!==e.Ab(l,10).onReset()&&t),"ngSubmit"===n&&(t=!1!==o.onSubmit(e.Ab(l,10),u)&&t),t},null,null)),e.pb(9,16384,null,0,a.A,[],null,null),e.pb(10,4210688,[["f",4]],0,a.o,[[8,null],[8,null]],null,{ngSubmit:"ngSubmit"}),e.Eb(2048,null,a.b,null,[a.o]),e.pb(12,16384,null,0,a.n,[[4,a.b]],null,null),(l()(),e.qb(13,0,null,null,135,"div",[["class","row"]],null,null,null,null,null)),(l()(),e.qb(14,0,null,null,73,"div",[["class","col-12 col-md"]],null,null,null,null,null)),(l()(),e.qb(15,0,null,null,13,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),e.qb(16,0,null,null,12,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),e.qb(17,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["First Name"])),(l()(),e.qb(19,0,null,null,7,"input",[["class","form-control"],["name","firstName"],["required",""],["type","text"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var t=!0,o=l.component;return"input"===n&&(t=!1!==e.Ab(l,20)._handleInput(u.target.value)&&t),"blur"===n&&(t=!1!==e.Ab(l,20).onTouched()&&t),"compositionstart"===n&&(t=!1!==e.Ab(l,20)._compositionStart()&&t),"compositionend"===n&&(t=!1!==e.Ab(l,20)._compositionEnd(u.target.value)&&t),"ngModelChange"===n&&(t=!1!==(o.newLoanObj.firstName=u)&&t),t},null,null)),e.pb(20,16384,null,0,a.c,[e.C,e.k,[2,a.a]],null,null),e.pb(21,16384,null,0,a.u,[],{required:[0,"required"]},null),e.Eb(1024,null,a.j,function(l){return[l]},[a.u]),e.Eb(1024,null,a.k,function(l){return[l]},[a.c]),e.pb(24,671744,[["firstName",4]],0,a.p,[[2,a.b],[6,a.j],[8,null],[6,a.k]],{name:[0,"name"],isDisabled:[1,"isDisabled"],model:[2,"model"]},{update:"ngModelChange"}),e.Eb(2048,null,a.l,null,[a.p]),e.pb(26,16384,null,0,a.m,[[4,a.l]],null,null),(l()(),e.fb(16777216,null,null,1,null,k)),e.pb(28,16384,null,0,i.l,[e.N,e.K],{ngIf:[0,"ngIf"]},null),(l()(),e.qb(29,0,null,null,16,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),e.qb(30,0,null,null,15,"div",[["class","form-group"]],null,null,null,null,null)),e.Eb(512,null,i.y,i.z,[e.r,e.s,e.k,e.C]),e.pb(32,278528,null,0,i.j,[i.y],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e.Db(33,{"has-danger":0,"has-success":1}),(l()(),e.qb(34,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Last Name"])),(l()(),e.qb(36,0,null,null,7,"input",[["class","form-control"],["name","lastName"],["required",""],["type","text"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var t=!0,o=l.component;return"input"===n&&(t=!1!==e.Ab(l,37)._handleInput(u.target.value)&&t),"blur"===n&&(t=!1!==e.Ab(l,37).onTouched()&&t),"compositionstart"===n&&(t=!1!==e.Ab(l,37)._compositionStart()&&t),"compositionend"===n&&(t=!1!==e.Ab(l,37)._compositionEnd(u.target.value)&&t),"ngModelChange"===n&&(t=!1!==(o.newLoanObj.lastName=u)&&t),t},null,null)),e.pb(37,16384,null,0,a.c,[e.C,e.k,[2,a.a]],null,null),e.pb(38,16384,null,0,a.u,[],{required:[0,"required"]},null),e.Eb(1024,null,a.j,function(l){return[l]},[a.u]),e.Eb(1024,null,a.k,function(l){return[l]},[a.c]),e.pb(41,671744,[["lastName",4]],0,a.p,[[2,a.b],[6,a.j],[8,null],[6,a.k]],{name:[0,"name"],isDisabled:[1,"isDisabled"],model:[2,"model"]},{update:"ngModelChange"}),e.Eb(2048,null,a.l,null,[a.p]),e.pb(43,16384,null,0,a.m,[[4,a.l]],null,null),(l()(),e.fb(16777216,null,null,1,null,j)),e.pb(45,16384,null,0,i.l,[e.N,e.K],{ngIf:[0,"ngIf"]},null),(l()(),e.qb(46,0,null,null,15,"div",[["class","form-group"]],null,null,null,null,null)),e.Eb(512,null,i.y,i.z,[e.r,e.s,e.k,e.C]),e.pb(48,278528,null,0,i.j,[i.y],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e.Db(49,{"has-danger":0,"has-success":1}),(l()(),e.qb(50,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["SSN"])),(l()(),e.qb(52,0,null,null,7,"input",[["class","form-control"],["name","ssn"],["required",""],["type","text"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var t=!0,o=l.component;return"input"===n&&(t=!1!==e.Ab(l,53)._handleInput(u.target.value)&&t),"blur"===n&&(t=!1!==e.Ab(l,53).onTouched()&&t),"compositionstart"===n&&(t=!1!==e.Ab(l,53)._compositionStart()&&t),"compositionend"===n&&(t=!1!==e.Ab(l,53)._compositionEnd(u.target.value)&&t),"ngModelChange"===n&&(t=!1!==(o.newLoanObj.SSN=u)&&t),t},null,null)),e.pb(53,16384,null,0,a.c,[e.C,e.k,[2,a.a]],null,null),e.pb(54,16384,null,0,a.u,[],{required:[0,"required"]},null),e.Eb(1024,null,a.j,function(l){return[l]},[a.u]),e.Eb(1024,null,a.k,function(l){return[l]},[a.c]),e.pb(57,671744,[["ssn",4]],0,a.p,[[2,a.b],[6,a.j],[8,null],[6,a.k]],{name:[0,"name"],isDisabled:[1,"isDisabled"],model:[2,"model"]},{update:"ngModelChange"}),e.Eb(2048,null,a.l,null,[a.p]),e.pb(59,16384,null,0,a.m,[[4,a.l]],null,null),(l()(),e.fb(16777216,null,null,1,null,E)),e.pb(61,16384,null,0,i.l,[e.N,e.K],{ngIf:[0,"ngIf"]},null),(l()(),e.qb(62,0,null,null,12,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),e.qb(63,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Income"])),(l()(),e.qb(65,0,null,null,7,"input",[["class","form-control"],["name","income"],["required",""],["type","text"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var t=!0,o=l.component;return"input"===n&&(t=!1!==e.Ab(l,66)._handleInput(u.target.value)&&t),"blur"===n&&(t=!1!==e.Ab(l,66).onTouched()&&t),"compositionstart"===n&&(t=!1!==e.Ab(l,66)._compositionStart()&&t),"compositionend"===n&&(t=!1!==e.Ab(l,66)._compositionEnd(u.target.value)&&t),"ngModelChange"===n&&(t=!1!==(o.newLoanObj.income=u)&&t),t},null,null)),e.pb(66,16384,null,0,a.c,[e.C,e.k,[2,a.a]],null,null),e.pb(67,16384,null,0,a.u,[],{required:[0,"required"]},null),e.Eb(1024,null,a.j,function(l){return[l]},[a.u]),e.Eb(1024,null,a.k,function(l){return[l]},[a.c]),e.pb(70,671744,[["income",4]],0,a.p,[[2,a.b],[6,a.j],[8,null],[6,a.k]],{name:[0,"name"],isDisabled:[1,"isDisabled"],model:[2,"model"]},{update:"ngModelChange"}),e.Eb(2048,null,a.l,null,[a.p]),e.pb(72,16384,null,0,a.m,[[4,a.l]],null,null),(l()(),e.fb(16777216,null,null,1,null,S)),e.pb(74,16384,null,0,i.l,[e.N,e.K],{ngIf:[0,"ngIf"]},null),(l()(),e.qb(75,0,null,null,12,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),e.qb(76,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Credit Score"])),(l()(),e.qb(78,0,null,null,7,"input",[["class","form-control"],["name","creditScore"],["required",""],["type","text"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var t=!0,o=l.component;return"input"===n&&(t=!1!==e.Ab(l,79)._handleInput(u.target.value)&&t),"blur"===n&&(t=!1!==e.Ab(l,79).onTouched()&&t),"compositionstart"===n&&(t=!1!==e.Ab(l,79)._compositionStart()&&t),"compositionend"===n&&(t=!1!==e.Ab(l,79)._compositionEnd(u.target.value)&&t),"ngModelChange"===n&&(t=!1!==(o.newLoanObj.creditScore=u)&&t),t},null,null)),e.pb(79,16384,null,0,a.c,[e.C,e.k,[2,a.a]],null,null),e.pb(80,16384,null,0,a.u,[],{required:[0,"required"]},null),e.Eb(1024,null,a.j,function(l){return[l]},[a.u]),e.Eb(1024,null,a.k,function(l){return[l]},[a.c]),e.pb(83,671744,[["creditScore",4]],0,a.p,[[2,a.b],[6,a.j],[8,null],[6,a.k]],{name:[0,"name"],isDisabled:[1,"isDisabled"],model:[2,"model"]},{update:"ngModelChange"}),e.Eb(2048,null,a.l,null,[a.p]),e.pb(85,16384,null,0,a.m,[[4,a.l]],null,null),(l()(),e.fb(16777216,null,null,1,null,N)),e.pb(87,16384,null,0,i.l,[e.N,e.K],{ngIf:[0,"ngIf"]},null),(l()(),e.qb(88,0,null,null,60,"div",[["class","col-12 col-md"]],null,null,null,null,null)),(l()(),e.qb(89,0,null,null,12,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),e.qb(90,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Email"])),(l()(),e.qb(92,0,null,null,7,"input",[["class","form-control"],["name","email"],["required",""],["type","text"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var t=!0,o=l.component;return"input"===n&&(t=!1!==e.Ab(l,93)._handleInput(u.target.value)&&t),"blur"===n&&(t=!1!==e.Ab(l,93).onTouched()&&t),"compositionstart"===n&&(t=!1!==e.Ab(l,93)._compositionStart()&&t),"compositionend"===n&&(t=!1!==e.Ab(l,93)._compositionEnd(u.target.value)&&t),"ngModelChange"===n&&(t=!1!==(o.newLoanObj.email=u)&&t),t},null,null)),e.pb(93,16384,null,0,a.c,[e.C,e.k,[2,a.a]],null,null),e.pb(94,16384,null,0,a.u,[],{required:[0,"required"]},null),e.Eb(1024,null,a.j,function(l){return[l]},[a.u]),e.Eb(1024,null,a.k,function(l){return[l]},[a.c]),e.pb(97,671744,[["email",4]],0,a.p,[[2,a.b],[6,a.j],[8,null],[6,a.k]],{name:[0,"name"],isDisabled:[1,"isDisabled"],model:[2,"model"]},{update:"ngModelChange"}),e.Eb(2048,null,a.l,null,[a.p]),e.pb(99,16384,null,0,a.m,[[4,a.l]],null,null),(l()(),e.fb(16777216,null,null,1,null,O)),e.pb(101,16384,null,0,i.l,[e.N,e.K],{ngIf:[0,"ngIf"]},null),(l()(),e.qb(102,0,null,null,12,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),e.qb(103,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Loan Amount"])),(l()(),e.qb(105,0,null,null,7,"input",[["class","form-control"],["name","loanAmount"],["required",""],["type","text"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var t=!0,o=l.component;return"input"===n&&(t=!1!==e.Ab(l,106)._handleInput(u.target.value)&&t),"blur"===n&&(t=!1!==e.Ab(l,106).onTouched()&&t),"compositionstart"===n&&(t=!1!==e.Ab(l,106)._compositionStart()&&t),"compositionend"===n&&(t=!1!==e.Ab(l,106)._compositionEnd(u.target.value)&&t),"ngModelChange"===n&&(t=!1!==(o.newLoanObj.loanAmount=u)&&t),t},null,null)),e.pb(106,16384,null,0,a.c,[e.C,e.k,[2,a.a]],null,null),e.pb(107,16384,null,0,a.u,[],{required:[0,"required"]},null),e.Eb(1024,null,a.j,function(l){return[l]},[a.u]),e.Eb(1024,null,a.k,function(l){return[l]},[a.c]),e.pb(110,671744,[["loanAmount",4]],0,a.p,[[2,a.b],[6,a.j],[8,null],[6,a.k]],{name:[0,"name"],isDisabled:[1,"isDisabled"],model:[2,"model"]},{update:"ngModelChange"}),e.Eb(2048,null,a.l,null,[a.p]),e.pb(112,16384,null,0,a.m,[[4,a.l]],null,null),(l()(),e.fb(16777216,null,null,1,null,T)),e.pb(114,16384,null,0,i.l,[e.N,e.K],{ngIf:[0,"ngIf"]},null),(l()(),e.qb(115,0,null,null,12,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),e.qb(116,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Apr"])),(l()(),e.qb(118,0,null,null,7,"input",[["class","form-control"],["name","apr"],["required",""],["type","text"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var t=!0,o=l.component;return"input"===n&&(t=!1!==e.Ab(l,119)._handleInput(u.target.value)&&t),"blur"===n&&(t=!1!==e.Ab(l,119).onTouched()&&t),"compositionstart"===n&&(t=!1!==e.Ab(l,119)._compositionStart()&&t),"compositionend"===n&&(t=!1!==e.Ab(l,119)._compositionEnd(u.target.value)&&t),"ngModelChange"===n&&(t=!1!==(o.newLoanObj.apr=u)&&t),t},null,null)),e.pb(119,16384,null,0,a.c,[e.C,e.k,[2,a.a]],null,null),e.pb(120,16384,null,0,a.u,[],{required:[0,"required"]},null),e.Eb(1024,null,a.j,function(l){return[l]},[a.u]),e.Eb(1024,null,a.k,function(l){return[l]},[a.c]),e.pb(123,671744,[["apr",4]],0,a.p,[[2,a.b],[6,a.j],[8,null],[6,a.k]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e.Eb(2048,null,a.l,null,[a.p]),e.pb(125,16384,null,0,a.m,[[4,a.l]],null,null),(l()(),e.fb(16777216,null,null,1,null,_)),e.pb(127,16384,null,0,i.l,[e.N,e.K],{ngIf:[0,"ngIf"]},null),(l()(),e.qb(128,0,null,null,8,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),e.qb(129,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Comments"])),(l()(),e.qb(131,0,null,null,5,"textarea",[["class","form-control"],["name","comments"],["rows","3"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var t=!0,o=l.component;return"input"===n&&(t=!1!==e.Ab(l,132)._handleInput(u.target.value)&&t),"blur"===n&&(t=!1!==e.Ab(l,132).onTouched()&&t),"compositionstart"===n&&(t=!1!==e.Ab(l,132)._compositionStart()&&t),"compositionend"===n&&(t=!1!==e.Ab(l,132)._compositionEnd(u.target.value)&&t),"ngModelChange"===n&&(t=!1!==(o.newLoanObj.comments=u)&&t),t},null,null)),e.pb(132,16384,null,0,a.c,[e.C,e.k,[2,a.a]],null,null),e.Eb(1024,null,a.k,function(l){return[l]},[a.c]),e.pb(134,671744,[["comments",4]],0,a.p,[[2,a.b],[8,null],[8,null],[6,a.k]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e.Eb(2048,null,a.l,null,[a.p]),e.pb(136,16384,null,0,a.m,[[4,a.l]],null,null),(l()(),e.qb(137,0,null,null,11,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),e.qb(138,0,null,null,1,"button",[["class","btn btn-warning"],["type","button"]],null,[[null,"click"]],function(l,n,u){var e=!0,t=l.component;return"click"===n&&(e=0!=(t.isEdit=!t.isEdit)&&e),e},null,null)),(l()(),e.Hb(-1,null,["Edit"])),(l()(),e.Hb(-1,null,[" \xa0 "])),(l()(),e.qb(141,0,null,null,1,"button",[["class","btn btn-primary"],["type","submit"]],[[8,"disabled",0]],null,null,null,null)),(l()(),e.Hb(-1,null,["Approve"])),(l()(),e.Hb(-1,null,[" \xa0 "])),(l()(),e.qb(144,0,null,null,1,"button",[["class","btn btn-danger"],["type","button"]],[[8,"disabled",0]],[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.rejectApplication()&&e),e},null,null)),(l()(),e.Hb(-1,null,["Reject"])),(l()(),e.Hb(-1,null,[" \xa0 "])),(l()(),e.qb(147,0,null,null,1,"button",[["class","btn btn-danger"]],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Reset"])),(l()(),e.qb(149,0,null,null,2,"div",[["class","modal-footer"]],null,null,null,null,null)),(l()(),e.qb(150,0,null,null,1,"button",[["class","btn btn-light"],["type","button"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.closeModal()&&e),e},null,null)),(l()(),e.Hb(-1,null,["Close"]))],function(l,n){var u=n.component;l(n,21,0,""),l(n,24,0,"firstName",1,u.newLoanObj.firstName),l(n,28,0,e.Ab(n,24).errors&&(e.Ab(n,24).dirty||e.Ab(n,24).touched));var t=l(n,33,0,e.Ab(n,41).invalid&&(e.Ab(n,41).dirty||e.Ab(n,41).touched),e.Ab(n,41).valid&&(e.Ab(n,41).dirty||e.Ab(n,41).touched));l(n,32,0,"form-group",t),l(n,38,0,""),l(n,41,0,"lastName",1,u.newLoanObj.lastName),l(n,45,0,e.Ab(n,41).errors&&(e.Ab(n,41).dirty||e.Ab(n,41).touched));var o=l(n,49,0,e.Ab(n,57).invalid&&(e.Ab(n,57).dirty||e.Ab(n,57).touched),e.Ab(n,57).valid&&(e.Ab(n,57).dirty||e.Ab(n,57).touched));l(n,48,0,"form-group",o),l(n,54,0,""),l(n,57,0,"ssn",1,u.newLoanObj.SSN),l(n,61,0,e.Ab(n,57).errors&&(e.Ab(n,57).dirty||e.Ab(n,57).touched)),l(n,67,0,""),l(n,70,0,"income",1,u.newLoanObj.income),l(n,74,0,e.Ab(n,70).errors&&(e.Ab(n,70).dirty||e.Ab(n,70).touched)),l(n,80,0,""),l(n,83,0,"creditScore",1,u.newLoanObj.creditScore),l(n,87,0,e.Ab(n,83).errors&&(e.Ab(n,83).dirty||e.Ab(n,83).touched)),l(n,94,0,""),l(n,97,0,"email",!u.isEdit,u.newLoanObj.email),l(n,101,0,e.Ab(n,97).errors&&(e.Ab(n,97).dirty||e.Ab(n,97).touched)),l(n,107,0,""),l(n,110,0,"loanAmount",!u.isEdit,u.newLoanObj.loanAmount),l(n,114,0,e.Ab(n,110).errors&&(e.Ab(n,110).dirty||e.Ab(n,110).touched)),l(n,120,0,""),l(n,123,0,"apr",u.newLoanObj.apr),l(n,127,0,e.Ab(n,123).errors&&(e.Ab(n,123).dirty||e.Ab(n,123).touched)),l(n,134,0,"comments",u.newLoanObj.comments)},function(l,n){l(n,8,0,e.Ab(n,12).ngClassUntouched,e.Ab(n,12).ngClassTouched,e.Ab(n,12).ngClassPristine,e.Ab(n,12).ngClassDirty,e.Ab(n,12).ngClassValid,e.Ab(n,12).ngClassInvalid,e.Ab(n,12).ngClassPending),l(n,19,0,e.Ab(n,21).required?"":null,e.Ab(n,26).ngClassUntouched,e.Ab(n,26).ngClassTouched,e.Ab(n,26).ngClassPristine,e.Ab(n,26).ngClassDirty,e.Ab(n,26).ngClassValid,e.Ab(n,26).ngClassInvalid,e.Ab(n,26).ngClassPending),l(n,36,0,e.Ab(n,38).required?"":null,e.Ab(n,43).ngClassUntouched,e.Ab(n,43).ngClassTouched,e.Ab(n,43).ngClassPristine,e.Ab(n,43).ngClassDirty,e.Ab(n,43).ngClassValid,e.Ab(n,43).ngClassInvalid,e.Ab(n,43).ngClassPending),l(n,52,0,e.Ab(n,54).required?"":null,e.Ab(n,59).ngClassUntouched,e.Ab(n,59).ngClassTouched,e.Ab(n,59).ngClassPristine,e.Ab(n,59).ngClassDirty,e.Ab(n,59).ngClassValid,e.Ab(n,59).ngClassInvalid,e.Ab(n,59).ngClassPending),l(n,65,0,e.Ab(n,67).required?"":null,e.Ab(n,72).ngClassUntouched,e.Ab(n,72).ngClassTouched,e.Ab(n,72).ngClassPristine,e.Ab(n,72).ngClassDirty,e.Ab(n,72).ngClassValid,e.Ab(n,72).ngClassInvalid,e.Ab(n,72).ngClassPending),l(n,78,0,e.Ab(n,80).required?"":null,e.Ab(n,85).ngClassUntouched,e.Ab(n,85).ngClassTouched,e.Ab(n,85).ngClassPristine,e.Ab(n,85).ngClassDirty,e.Ab(n,85).ngClassValid,e.Ab(n,85).ngClassInvalid,e.Ab(n,85).ngClassPending),l(n,92,0,e.Ab(n,94).required?"":null,e.Ab(n,99).ngClassUntouched,e.Ab(n,99).ngClassTouched,e.Ab(n,99).ngClassPristine,e.Ab(n,99).ngClassDirty,e.Ab(n,99).ngClassValid,e.Ab(n,99).ngClassInvalid,e.Ab(n,99).ngClassPending),l(n,105,0,e.Ab(n,107).required?"":null,e.Ab(n,112).ngClassUntouched,e.Ab(n,112).ngClassTouched,e.Ab(n,112).ngClassPristine,e.Ab(n,112).ngClassDirty,e.Ab(n,112).ngClassValid,e.Ab(n,112).ngClassInvalid,e.Ab(n,112).ngClassPending),l(n,118,0,e.Ab(n,120).required?"":null,e.Ab(n,125).ngClassUntouched,e.Ab(n,125).ngClassTouched,e.Ab(n,125).ngClassPristine,e.Ab(n,125).ngClassDirty,e.Ab(n,125).ngClassValid,e.Ab(n,125).ngClassInvalid,e.Ab(n,125).ngClassPending),l(n,131,0,e.Ab(n,136).ngClassUntouched,e.Ab(n,136).ngClassTouched,e.Ab(n,136).ngClassPristine,e.Ab(n,136).ngClassDirty,e.Ab(n,136).ngClassValid,e.Ab(n,136).ngClassInvalid,e.Ab(n,136).ngClassPending),l(n,141,0,e.Ab(n,10).invalid),l(n,144,0,e.Ab(n,10).invalid)})}function V(l){return e.Jb(0,[(l()(),e.qb(0,0,null,null,1,"app-loan-application-detail",[],null,null,null,J,C)),e.pb(1,114688,null,0,c,[p.D,r.a,s.a,v.l],null,null)],function(l,n){l(n,1,0)},null)}var P=e.mb("app-loan-application-detail",c,V,{loanDetail:"loanDetail"},{passEntry:"passEntry"},[]),K=u("z5nN"),z=u("2uy1"),F=u("z/SZ"),U=u("LqlI");class R{}class ${}class B{}u.d(n,"AllApplicationsModuleNgFactory",function(){return G});var G=e.nb(t,[],function(l){return e.xb([e.yb(512,e.j,e.ab,[[8,[o.a,f,q.r,q.s,P,K.a,K.b]],[3,e.j],e.w]),e.yb(4608,i.n,i.m,[e.t,[2,i.B]]),e.yb(4608,a.x,a.x,[]),e.yb(4608,p.D,p.D,[e.j,e.q,p.xb,p.E]),e.yb(4608,z.a,z.a,[e.D,e.A]),e.yb(4608,F.a,F.a,[e.j,e.y,e.q,z.a,e.g]),e.yb(4608,U.a,U.a,[e.D,F.a]),e.yb(1073742336,i.b,i.b,[]),e.yb(1073742336,v.p,v.p,[[2,v.u],[2,v.l]]),e.yb(1073742336,R,R,[]),e.yb(1073742336,a.w,a.w,[]),e.yb(1073742336,a.i,a.i,[]),e.yb(1073742336,p.F,p.F,[]),e.yb(1073742336,$,$,[]),e.yb(1073742336,U.d,U.d,[]),e.yb(1073742336,B,B,[]),e.yb(1073742336,t,t,[]),e.yb(1024,v.j,function(){return[[{path:"",component:d}],[{path:"",component:c}]]},[])])})}}]);