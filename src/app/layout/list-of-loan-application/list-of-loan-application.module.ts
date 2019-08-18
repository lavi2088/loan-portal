import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListOfLoanApplicationRoutingModule } from './list-of-loan-application-routing.module';
import { ListOfLoanApplicationComponent } from './list-of-loan-application.component';

@NgModule({
  declarations: [
    ListOfLoanApplicationComponent
  ],
  imports: [
    CommonModule,
    ListOfLoanApplicationRoutingModule
  ]
})
export class ListOfLoanApplicationModule { }
