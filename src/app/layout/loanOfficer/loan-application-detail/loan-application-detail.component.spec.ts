import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanApplicationDetailComponent } from './loan-application-detail.component';

describe('LoanApplicationDetailComponent', () => {
  let component: LoanApplicationDetailComponent;
  let fixture: ComponentFixture<LoanApplicationDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanApplicationDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanApplicationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
