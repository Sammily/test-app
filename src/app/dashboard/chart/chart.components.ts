import { Component, Input, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
})
export class ChartComponent {
  @Input() data: ChartDataSets[] = [];

  public colors: Color[] = [
    {
      borderColor: '#008000',
      backgroundColor: 'rgba(0,128,0,0.3)',
    },
    {
      borderColor: '#e71837',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
    {
      borderColor: '#0e4bef',
      backgroundColor: 'rgba(0,0,255,0.3)',
    },
    {
      borderColor: '#008000',
      backgroundColor: 'rgba(0,128,0,0.3)',
    },
    {
      borderColor: '#e71837',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
    {
      borderColor: '#0e4bef',
      backgroundColor: 'rgba(0,0,255,0.3)',
    },
    {
      borderColor: '#008000',
      backgroundColor: 'rgba(0,128,0,0.3)',
    },
    {
      borderColor: '#e71837',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
    {
      borderColor: '#0e4bef',
      backgroundColor: 'rgba(0,0,255,0.3)',
    },
  ];
  public lineChartLabels: Label[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
  ];

  public lineChartOptions: ChartOptions = {
    responsive: true,
    legend: { position: 'right' },
  };

  @Input() lineChartLegend = true;
  public lineChartType: ChartType = 'line';
  public lineChartPlugins = [];

  @ViewChild(BaseChartDirective) private chart!: BaseChartDirective;

  public changeColor(): void {
    for (let i = 0; i < this.colors.length; i++) {
      this.colors[i].borderColor! = '#' + this.random1();
      this.colors[i].backgroundColor! =
        'rgb(' +
        this.random2() +
        ',' +
        this.random2() +
        ',' +
        this.random2() +
        ',0.3)';
    }
    this.chart.update();
  }
  //random #color
  public random1(): string {
    return Math.floor(Math.random() * 16777215).toString(16);
  }
  //random rgb(color)
  public random2(): number {
    return Math.floor(Math.random() * 256);
  }

  public changeType(): void {
    this.lineChartType = this.lineChartType === 'bar' ? 'line' : 'bar';
  }

  public changeData(): void {
    for (let i = 0; i < this.data.length; i++) {
      for (let j = 0; j < this.data[i].data!.length; j++) {
        this.data[i].data![j] = this.randomNumber();
      }
    }
    this.chart.update();
  }

  public randomNumber(): number {
    return Math.round(Math.random() * 100);
  }

  /*
  public hideOne(num: number): void {
    const isHidden = this.chart.isDatasetHidden(num);
    this.chart.hideDataset(num, !isHidden);
  }

  public sortChart(): void {
    for (let i = 0; i < this.data.length; i++) {
      this.data[i].data! = this.data[i].data!.sort(function (a: any, b: any) {
        return a - b;
      });
    }
    this.chart.update();
  }
  */
}
