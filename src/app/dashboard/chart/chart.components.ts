import { SyncAsync } from '@angular/compiler/src/util';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType ,ChartConfiguration} from 'chart.js';
import { chart } from 'highcharts';
import { Color, BaseChartDirective, Label } from 'ng2-charts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: [ './chart.component.css' ]
})
export class ChartComponent  {

  public lineChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Sensor 1' },
    { data: [25, 39, 40, 51, 66, 75, 90], label: 'Sensor 2' },
    { data: [15, 49, 20, 71, 86, 95, 60], label: 'Sensor 3' }
  ];

  public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions: (ChartOptions ) = {
    responsive: true,
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'green',
      backgroundColor: 'rgba(0,128,0,0.3)',
    },
    {
      borderColor: 'red',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
    {
      borderColor: 'blue',
      backgroundColor: 'rgba(0,0,255,0.3)',
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

    /*this.lineChartColors[0].borderColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    //this.lineChartColors[0].backgroundColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    this.lineChartColors[1].borderColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    this.lineChartColors[1].backgroundColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    this.lineChartColors[2].borderColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    this.lineChartColors[2].backgroundColor = '#'+Math.floor(Math.random()*16777215).toString(16);
*/
  this.lineChartColors[0].borderColor = '#'+this.random1();
  this.lineChartColors[0].backgroundColor="rgb(" + this.random2() + "," + this.random2() + "," + this.random2() + ",0.3)";
  this.lineChartColors[1].borderColor = '#'+this.random1();
  this.lineChartColors[1].backgroundColor="rgb(" + this.random2() + "," + this.random2() + "," + this.random2() + ",0.3)";
  this.lineChartColors[2].borderColor = '#'+this.random1();
  this.lineChartColors[2].backgroundColor="rgb(" + this.random2() + "," + this.random2() + "," + this.random2() + ",0.3)";
   
  }
  public random1(): string{
    return Math.floor(Math.random()*16777215).toString(16);
  }
  public random2(): number{
    return Math.floor(Math.random() * 256);
  }
  
public changeType(): void {
  this.lineChartType = this.lineChartType === 'bar' ? 'line' : 'bar';
}

public changeData(): void {
  this.lineChartData=[
    { data: [this.randomNumber(),this.randomNumber(),this.randomNumber(),this.randomNumber(),this.randomNumber(), this.randomNumber(),this.randomNumber()], label: 'Series A' },
    { data: [this.randomNumber(),this.randomNumber(),this.randomNumber(),this.randomNumber(),this.randomNumber(), this.randomNumber(),this.randomNumber()], label: 'Series B' },
    { data: [this.randomNumber(),this.randomNumber(),this.randomNumber(),this.randomNumber(),this.randomNumber(), this.randomNumber(),this.randomNumber()], label: 'Series C' }
  ];
}

public randomNumber(): number{
  return Math.round(Math.random() * 100);
}

public hideOne(num:number): void {
  const isHidden = this.chart.isDatasetHidden(num);
  this.chart.hideDataset(num, !isHidden);
}

}