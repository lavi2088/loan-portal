import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { NewLoanApplicationRoutingModule } from './new-loan-application-routing.module';
import { NewLoanApplicationComponent } from './new-loan-application.component';
import { NewLoan } from 'src/app/shared/models/new-loan';



@NgModule({
  declarations: [
    NewLoanApplicationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NewLoanApplicationRoutingModule
  ],
  providers: [
    NewLoan
  ],
  exports: [
    FormsModule
  ]
})
export class NewLoanApplicationModule { }
