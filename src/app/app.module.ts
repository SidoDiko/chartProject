import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgChartsModule } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyBarChartComponent } from './my-bar-chart/my-bar-chart.component';
import { MyDoughuntChartComponent } from './my-doughunt-chart/my-doughunt-chart.component';
import { MyRaderChartComponent } from './my-rader-chart/my-rader-chart.component';
import { MyPieChartComponent } from './my-pie-chart/my-pie-chart.component';
import { MyLineChartComponent } from './my-line-chart/my-line-chart.component';


@NgModule({
  declarations: [
    AppComponent,
    MyBarChartComponent,
    MyDoughuntChartComponent,
    MyPieChartComponent,
    MyRaderChartComponent,
    MyLineChartComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
