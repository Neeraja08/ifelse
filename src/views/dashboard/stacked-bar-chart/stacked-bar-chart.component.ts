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
const seriesData = [0, 10, 50, 100, 200];
@Component({
  selector: 'app-stacked-bar-chart',
  templateUrl: './stacked-bar-chart.component.html',
  styleUrls: ['./stacked-bar-chart.component.scss'],
  standalone: true,
  imports: [CommonModule, NgApexchartsModule],
  host: { class: 'd-flex flex-grow-1 flex-column' },
})
export class StackedBarChartComponent implements OnInit {
  public chartOptions: Partial<any>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: 'PRODUCT A',
          data: [10, 55, 41, 67, 22, 43, 21, 49, 30, 40, 10, 34],
          color: '#506DE2',
        },
        {
          name: 'PRODUCT B',
          data: [13, 23, 20, 8, 13, 27, 33, 12, 30, 20, 30, 30],
          color: '#8EA5FB',
        },
      ],
      chart: {
        toolbar: {
          show: false,
        },
        type: 'bar',
        stacked: true,
      },
      dataLabels: {
        enabled: false,
      },
      title: {
        text: 'Balance Overview',
        align: 'left',
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: 'bottom',
              offsetX: -10,
              offsetY: 0,
            },
          },
        },
      ],
      xaxis: {
        categories: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ],
        labels: {
          style: {
            fontSize: '12px',
          },
        },
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          columnWidth: '8px',
        },
      },
      yaxis: {
        tickAmount: 6, // Specify the number of y-axis ticks
      },
      fill: {
        opacity: 1,
      },
      legend: {
        position: 'right',
        offsetX: 0,
        offsetY: 50,
      },
    };
  }

  ngOnInit() {}
}
