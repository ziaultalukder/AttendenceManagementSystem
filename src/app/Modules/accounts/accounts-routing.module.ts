import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoryComponent } from './component/history/history.component';
import { EmployeeComponent } from './component/employee/employee.component';
import { ChangePasswordComponent } from './component/change-password/change-password.component';
import { AccountsComponent } from './component/accounts/accounts.component';

const routes: Routes = [
  
  {path:'', component:AccountsComponent, 
  
  children: 
    [
      {path:'history', component:HistoryComponent},
      {path:'employee', component:EmployeeComponent},
      {path:'change-password', component:ChangePasswordComponent},
      {path:'', redirectTo:'/accounts/history', pathMatch:'full'}
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountsRoutingModule { }
