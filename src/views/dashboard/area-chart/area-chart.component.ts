import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexChart,
  ApexGrid,
  ApexAnnotations,
} from 'ng-apexcharts';
import { NgApexchartsModule } from 'ng-apexcharts';

import { series } from './data';
export type ChartOptions = {
  series: ApexAxisChartSeries;
  annotations: ApexAnnotations;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  labels: string[];
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-area-chart',
  templateUrl: './area-chart.component.html',
  styleUrls: ['./area-chart.component.scss'],
  standalone: true,
  imports: [CommonModule, NgApexchartsModule],
  host: { class: 'd-flex flex-grow-1 flex-column' },
})
export class AreaChartComponent implements OnInit {
  //@ViewChild('chart') chart: ChartComponent;
  public chartOptions: Partial<any>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: 'STOCK ABC',
          data: series.monthDataSeries1.prices,
        },
      ],
      chart: {
        toolbar: {
          show: false
        },
        type: 'area',
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'straight',
      },

      title: {
        text: 'Sales Statistics',
        align: 'left',
      },
      subtitle: {
        text: 'Price Movements',
        align: 'left',
      },
      labels: series.monthDataSeries1.dates,
      xaxis: {
        type:'string',
      },
      yaxis: {
        opposite: true,
      },
      legend: {
        horizontalAlign: 'left',
      },
    };
  }
  ngOnInit() {}
}
