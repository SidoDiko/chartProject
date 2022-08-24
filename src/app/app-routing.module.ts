import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyBarChartComponent } from './my-bar-chart/my-bar-chart.component';
import { MyPieChartComponent } from './my-pie-chart/my-pie-chart.component';
import { MyDoughuntChartComponent } from './my-doughunt-chart/my-doughunt-chart.component';

import { MyRaderChartComponent } from './my-rader-chart/my-rader-chart.component';
import{MyLineChartComponent} from  './my-line-chart/my-line-chart.component'; 

const routes: Routes = [ 
   {path: 'bar-chart', component: MyBarChartComponent},

   {path: 'pie-chart', component: MyPieChartComponent},
   {path: 'doughnut-chart', component: MyDoughuntChartComponent},
   {path: 'radar-chart', component: MyRaderChartComponent },
   {path: 'line-chart', component: MyLineChartComponent },

   {path: '**', component: MyBarChartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
