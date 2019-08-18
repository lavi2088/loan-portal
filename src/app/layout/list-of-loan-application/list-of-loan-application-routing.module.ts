import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListOfLoanApplicationComponent } from './list-of-loan-application.component';

const routes: Routes = [
  {path: "", component: ListOfLoanApplicationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListOfLoanApplicationRoutingModule { }
