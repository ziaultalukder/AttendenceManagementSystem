import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { NotfountComponent } from './notfount/notfount.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'forgot-password', component:ForgotPasswordComponent},
  {
    path: 'accounts', loadChildren: () => import('./Modules/accounts/accounts.module').then((m) => m.AccountsModule)
  },
  {
    path: 'admin', loadChildren: () => import('./Modules/admin/admin.module').then((m) => m.AdminModule)
  },
  {
    path: 'sales', loadChildren: () => import('./Modules/sales/sales.module').then((m) => m.SalesModule)
  },
  {path:'', redirectTo:'/login', pathMatch:'full'},
  {path:'**', component:NotfountComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }