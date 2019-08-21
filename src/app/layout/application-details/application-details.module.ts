import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicationDetailsRoutingModule } from './application-details-routing.module';
import { ApplicationDetailsComponent } from './application-details.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalModule } from 'ngx-bootstrap/modal/';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
      ApplicationDetailsComponent
  ],
  imports: [
    CommonModule,
    NgbModalModule,
    ApplicationDetailsRoutingModule,
    FormsModule,
    ModalModule.forRoot()
  ],
  exports: [
    ApplicationDetailsComponent
  ]
})
export class ApplicationDetailsModule { }
