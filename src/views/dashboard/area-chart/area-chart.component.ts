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
      series: [{
        name: 'series1',
        type: 'line',
        color:'#506de2',
        data: [6, 20, 15, 29,  28, 23,45],
      },
      {
        name: 'series2',
        data: [6,15,9,22,20,15,40],
       color:'#edeef6',
       type:'line'
      },
      ],
      chart: {
        toolbar: {
          show: false,
          background: '#fff'
        },
        height: 350,
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth'
      },
      points: [
        {
         y:'Thu',
         x:28,
          marker: {
            size: 6,
            fillColor: "#fff",
            strokeColor: "#2698FF",
            radius: 2
          },
          label: {
            borderColor: "#FF4560",
            offsetY: 0,
            style: {
              color: "#fff",
              background: "#FF4560"
            },
  
            text: "Point Annotation (XY)"
          }
        }
      ],
      title: {
        text: 'Sales Statistics',
        align: 'left',
      },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity:1,
          opacityFrom:0.7,
          opacityTo: 0.9,
          stops: [0,90,100]
        }
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
