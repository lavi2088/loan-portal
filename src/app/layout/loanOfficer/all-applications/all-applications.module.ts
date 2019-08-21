import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllApplicationsRoutingModule } from './all-applications-routing.module';
import { AllApplicationsComponent } from './all-applications.component';
import { FormsModule } from '@angular/forms';
import { LoanApplicationDetailComponent } from '../loan-application-detail/loan-application-detail.component';
import { LoanApplicationDetailModule } from '../loan-application-detail/loan-application-detail.module';

@NgModule({
  declarations: [AllApplicationsComponent],
  imports: [
    CommonModule,
    AllApplicationsRoutingModule,
    FormsModule,
    LoanApplicationDetailModule
  ],
  exports: [
    FormsModule
  ],
  entryComponents: [
    LoanApplicationDetailComponent
  ]
})
export class AllApplicationsModule { }
