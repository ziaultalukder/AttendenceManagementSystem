import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StockComponent } from './component/stock/stock.component';
import { ExpenseComponent } from './component/expense/expense.component';
import { SalesHistoryComponent } from './component/sales-history/sales-history.component';
import { SalesComponent } from './component/sales/sales.component';

const routes: Routes = [
  {path: '', component: SalesComponent, 
    children: 
    [
      {path:'history', component:SalesHistoryComponent},
      {path:'expense', component:ExpenseComponent},
      {path:'stock', component:StockComponent},
      {path:'', redirectTo:'/sales/history', pathMatch:'full'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesRoutingModule { }
