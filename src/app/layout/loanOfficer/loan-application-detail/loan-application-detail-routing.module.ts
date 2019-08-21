import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoanApplicationDetailComponent } from './loan-application-detail.component';

const routes: Routes = [
    {path: '', component: LoanApplicationDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoanApplicationDetailRoutingModule { }
