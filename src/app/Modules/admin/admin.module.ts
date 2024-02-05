import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ProfileComponent } from './component/profile/profile.component';
import { ProductComponent } from './component/product/product.component';
import { AdminComponent } from './component/admin/admin.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ProfileComponent,
    ProductComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
