import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsRoutingModule } from './accounts-routing.module';
import { EmployeeComponent } from './component/employee/employee.component';
import { ChangePasswordComponent } from './component/change-password/change-password.component';
import { HistoryComponent } from './component/history/history.component';
import { AccountsComponent } from './component/accounts/accounts.component';


@NgModule({
  declarations: [
    EmployeeComponent,
    ChangePasswordComponent,
    HistoryComponent,
    AccountsComponent
  ],
  imports: [
    CommonModule,
    AccountsRoutingModule
  ]
})
export class AccountsModule { }
