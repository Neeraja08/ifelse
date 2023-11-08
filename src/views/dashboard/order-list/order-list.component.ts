import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss'],
  standalone: true,
  imports: [CommonModule],
  host: { class: 'd-flex flex-grow-1 flex-column' },
})
export class OrderListComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
