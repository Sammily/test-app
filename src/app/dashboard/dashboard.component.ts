import { Component } from '@angular/core';
import { ChartDataSets } from 'chart.js';

import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  dataChart1 = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Temperature (sensor 1)' },
    { data: [25, 39, 40, 51, 66, 75, 90], label: 'Humidity (sensor 1)' },
    { data: [15, 49, 40, 71, 86, 95, 60], label: 'Light (sensor 1)' },
  ];

  dataChart2: ChartDataSets[] = [
    { data: [69, 59, 18, 81, 56, 45, 40], label: 'Temperature (sensor 2)' },
    { data: [21, 39, 24, 51, 66, 75, 90], label: 'Humidity (sensor 2)' },
    { data: [11, 49, 52, 71, 86, 45, 60], label: 'Light (sensor 2)' },
  ];

  dataChart3: ChartDataSets[] = [
    { data: [62, 59, 78, 81, 56, 59, 40], label: 'Temperature (sensor 3)' },
    { data: [12, 39, 43, 51, 66, 53, 90], label: 'Humidity (sensor 3)' },
    { data: [19, 49, 33, 71, 86, 51, 60], label: 'Light (sensor 3)' },
  ];

  allData = [...this.dataChart1, ...this.dataChart2, ...this.dataChart3];

  constructor(public breakpointObserver: BreakpointObserver) {}

  breakpoint: any;
  hideLegend: any;
  ngOnInit() {
    this.breakpointObserver
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge,
      ])
      .subscribe((result) => {
        if (
          result.breakpoints[Breakpoints.XSmall] ||
          result.breakpoints[Breakpoints.Small]
        ) {
          this.breakpoint = 1;
          this.hideLegend = false;
        }

        if (
          result.breakpoints[Breakpoints.Large] ||
          result.breakpoints[Breakpoints.XLarge] ||
          result.breakpoints[Breakpoints.Medium]
        ) {
          this.breakpoint = 2;
          this.hideLegend = true;
        }
      });
  }
}
