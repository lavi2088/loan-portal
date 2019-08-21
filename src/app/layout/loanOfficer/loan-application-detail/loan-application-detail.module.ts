import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoanApplicationDetailRoutingModule } from './loan-application-detail-routing.module';
import { LoanApplicationDetailComponent } from './loan-application-detail.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoanApplicationDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbModalModule,
    LoanApplicationDetailRoutingModule,
    ModalModule.forRoot()
  ],
  exports: [
    FormsModule,
    LoanApplicationDetailComponent
  ]
})
export class LoanApplicationDetailModule { }
