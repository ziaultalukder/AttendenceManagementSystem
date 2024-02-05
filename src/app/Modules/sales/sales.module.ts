import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesRoutingModule } from './sales-routing.module';
import { SalesHistoryComponent } from './component/sales-history/sales-history.component';
import { ExpenseComponent } from './component/expense/expense.component';
import { StockComponent } from './component/stock/stock.component';
import { SalesComponent } from './component/sales/sales.component';


@NgModule({
  declarations: [
    SalesHistoryComponent,
    ExpenseComponent,
    StockComponent,
    SalesComponent
  ],
  imports: [
    CommonModule,
    SalesRoutingModule
  ]
})
export class SalesModule { }
