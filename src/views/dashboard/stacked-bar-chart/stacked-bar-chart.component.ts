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
  host: { class: 'flexer' },
})
export class StackedBarChartComponent implements OnInit {
  public chartOptions: Partial<any>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: 'Income',
          data: [50, 50, 93, 40, 20, 100, 40, 10, 70, 100, 80, 40],
          color: '#506DE2',
        },
        {
          name: 'Borrow',
          data: [30, 100, 52, 15, 10, 95, 20, 5, 50, 90, 70, 30],
          color: '#8EA5FB',
        },
      ],
      chart: {
        toolbar: {
          show: false,
        },
        type: 'bar',
        height: 300,
        stacked: true,
      },
      dataLabels: {
        enabled: false,
      },
      title: {
        text: 'Balance Overview',
        align: 'left',
        style: {
          fontSize:  '15px',
          fontWeight:  'bold',
          color:  '#535866',
          fontFamily: 'sans-serif'
        },
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
    
      fill: {
        opacity: 1,
      },
      legend: {
        position: 'top',
        offsetX: 280,
        offsetY: -28,
      },
    };
  }

  ngOnInit() {}
}