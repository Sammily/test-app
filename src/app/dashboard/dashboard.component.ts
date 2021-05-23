import { SyncAsync } from '@angular/compiler/src/util';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType ,ChartConfiguration} from 'chart.js';
import { chart } from 'highcharts';
import { Color, BaseChartDirective, Label } from 'ng2-charts';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent  {

  public lineChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Sensor 1' },
    { data: [25, 39, 40, 51, 66, 75, 90], label: 'Sensor 2' },
    { data: [15, 49, 20, 71, 86, 95, 60], label: 'Sensor 3' },
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


  @ViewChild(BaseChartDirective) private chart!: BaseChartDirective;

  constructor() { }
  ngOnInit(): void {
  }

    public changeColor(): void {
    this.lineChartColors[0].borderColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    this.lineChartColors[0].backgroundColor = '#'+Math.floor(Math.random()*16777215).toString(16);
  }

  
public changeType(): void {
  this.lineChartType = this.lineChartType === 'bar' ? 'line' : 'bar';
}


public changeData(): void {
  this.lineChartData=[
    { data: [this.randomNumber(),this.randomNumber(),this.randomNumber(),this.randomNumber(),this.randomNumber(), this.randomNumber(),this.randomNumber()], label: 'Series B' }
  ];
}

public randomNumber(): number{
  return Math.round(Math.random() * 100);
}

public hideOne(): void {
  const isHidden = this.chart.isDatasetHidden(1);
  this.chart.hideDataset(1, !isHidden);
}






}