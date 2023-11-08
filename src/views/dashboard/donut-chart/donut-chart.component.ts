import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.scss'],
  standalone: true,
  imports: [CommonModule, NgApexchartsModule],
  host: { class: 'd-flex flex-grow-1 flex-column' },
})
export class DonutChartComponent implements OnInit {
  public chartOptions: Partial<any>;

  constructor() {
    this.chartOptions = {
      series: [15, 35, 50],
      chart: {
        type: 'donut',
      },
      colors: ['#3d5acf','#8fa4fb','#7b94f5'],
      labels: ['Men', 'Electronics', 'Women'],
      dataLabels: {
        enabled: false,
        
      },
      legend: {
        position: 'bottom',
      },
      title: {
        text: 'Top Products',
        align: 'left',
      },
      plotOptions: {
        pie: {
    
          customScale: 1,
          donut: {
            labels: {
              show: true,
              value:{
                fontSize:'14',
                offsetY: -4, 
                color:'#a4a4a4'
              },
              total: {
                show: true,
                showAlways: true,
                label: '50%',
                fontSize: '32',
                formatter: function (w:any) {
                    return 'Popular Items'
                }
            }
            },
          },
        },
      },
    };
  }

  ngOnInit() {}
}
