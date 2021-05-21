import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType ,ChartConfiguration} from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent  {


  public lineChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
  ];
  public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions: (ChartOptions ) = {
    responsive: true,
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType: ChartType="line";
  public lineChartPlugins = [];

  constructor() { }

  ngOnInit() {
  }

  public changeColor(): void {
    this.lineChartColors[0].borderColor = 'green';
    this.lineChartColors[0].backgroundColor = `rgba(0, 255, 0, 0.3)`;
  }
  public changeTypeBar(): void {
       this.lineChartType= 'bar';
     }
  
public changeTypeLine(): void {
  this.lineChartType= 'line';
}


public changeData(): void {
  this.lineChartData=[
    { data: [Math.round(Math.random() * 100),Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100)], label: 'Series B' }
  ];
}






}