import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './component/profile/profile.component';
import { ProductComponent } from './component/product/product.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { AdminComponent } from './component/admin/admin.component';

const routes: Routes = [
  {path:'', component:AdminComponent, 
    children :
    [
      {path:'dashboard', component:DashboardComponent},
      {path:'product', component:ProductComponent},
      {path:'profile', component:ProfileComponent},
      {path:'', redirectTo:'/admin/dashboard', pathMatch:'full'}
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
