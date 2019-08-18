import { NgModule } from '@angular/core';
import {FormGroup, ReactiveFormsModule, FormsModule} from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NewLoanApplicationComponent } from './new-loan-application.component';

const routes: Routes = [
  {
    path: '', component: NewLoanApplicationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), FormsModule],
  exports: [ RouterModule]
})
export class NewLoanApplicationRoutingModule { }
