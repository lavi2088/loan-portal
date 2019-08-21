import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListOfLoanApplicationRoutingModule } from './list-of-loan-application-routing.module';
import { ListOfLoanApplicationComponent } from './list-of-loan-application.component';
import { FormsModule } from '@angular/forms';
import { ApplicationDetailsComponent } from '../application-details/application-details.component';
import { ApplicationDetailsModule } from '../application-details/application-details.module';

@NgModule({
  declarations: [
    ListOfLoanApplicationComponent
  ],
  imports: [
    CommonModule,
    ListOfLoanApplicationRoutingModule,
    FormsModule,
    ApplicationDetailsModule
  ],
  exports: [
    FormsModule,
    ApplicationDetailsComponent
  ],
  entryComponents: [
    ApplicationDetailsComponent
  ]
})
export class ListOfLoanApplicationModule { }
