import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AreaChartComponent } from './area-chart/area-chart.component';
import { DonutChartComponent } from './donut-chart/donut-chart.component';
import { OrderListComponent } from './order-list/order-list.component';
import { StackedBarChartComponent } from './stacked-bar-chart/stacked-bar-chart.component';
import { StyleCardComponent } from './style-card/style-card.component';
import { UserListComponent } from './user-list/user-list.component';
import { ApiService } from 'src/shared/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    StyleCardComponent,
    AreaChartComponent,
    DonutChartComponent,
    OrderListComponent,
    StackedBarChartComponent,
    UserListComponent,
  ],
  host: { class: 'flexer' },
})
export class DashboardComponent implements OnInit {
  constructor(private service: ApiService) {}
  cards:any = [];
  orders:any = [];
  users:any = [];

  ngOnInit() {
    this.getData();
  }

  getData(){
    this.service.getDashboardData().subscribe((res:any)=>{
      if(res){
        this.cards = res?.top_cards||[];
        this.orders = res?.recent_orders||[];
        this.users = res?.new_users||[];
      }
    },(err:any)=>console.log(err))
  }
}
