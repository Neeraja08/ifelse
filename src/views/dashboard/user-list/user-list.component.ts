import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  standalone: true,
  imports: [CommonModule],
  host: { class: 'flexer' },
})
export class UserListComponent implements OnInit {
  @Input() users:any=[];
  constructor() {}

  ngOnInit() {}
}
