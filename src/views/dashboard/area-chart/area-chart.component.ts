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

@Component({
  selector: 'app-area-chart',
  templateUrl: './area-chart.component.html',
  styleUrls: ['./area-chart.component.scss'],
  standalone: true,
  imports: [CommonModule, NgApexchartsModule],
  host: { class: 'flexer' },
})
export class AreaChartComponent implements OnInit {
  //@ViewChild('chart') chart: ChartComponent;
  public chartOptions: Partial<any>;

  constructor() {
    this.chartOptions = {
      series: [{
        name: 'series1',
        type: 'area',
        color:'#506de2',
        data: [6, 20, 15, 29, 28, 23, 45],
      },
      {
        name: 'series2',
        data: [6,15,9,22,20,15,40],
       color:'#7584a2',
       type:'line'
      },
      ],
      chart: {
        toolbar: {
          show: false,
          background: '#fff'
        },
        height: 300,
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
      annotations: {
        points: [
          {
            x: 'Thu',
            y: 28,
            marker: {
              size: 6,
              fillColor: '#fff',
              strokeColor: '#506de2',
              radius: 2,
              strokeWidth: 5,
            },
            label: {
              borderColor: "#7584a2",
              offsetY: -20,
              textAnchor: 'middle',
              style: {
                color: "#506de2",
                background: "#fff",
                padding: {
                  left: 10,
                  right: 10,
                  top: 10,
                  bottom: 10,
                },
                fontSize: '20px'
              },
              text: "$28.00",
            },
          }
        ],
      },
      title: {
        text: 'Sales Statistics',
        align: 'left',
        style: {
          fontSize:  '15px',
          fontWeight:  'bold',
          color:  '#535866',
          fontFamily: 'sans-serif'
        },
      },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity:1,
          opacityFrom:0.1,
          opacityTo: 0.5,
          stops: [0,90,100]
        }
      },
      subtitle: {
        text: 'Price Movements',
        align: 'left',
      },
      labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      xaxis: {
        type:'string',
      },
      yaxis: {
        opposite: true,
      },
      legend: {
        show: false,
      },
    };
  }
  ngOnInit() {}
}