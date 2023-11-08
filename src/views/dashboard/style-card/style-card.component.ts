import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { asyncScheduler, map } from 'rxjs';
// import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-style-card',
  templateUrl: './style-card.component.html',
  styleUrls: ['./style-card.component.scss'],
  standalone: true,
  imports: [CommonModule],
  host: { class: 'flexer' },
})
export class StyleCardComponent implements OnInit {
  @Input() active: boolean = false;
  @Input() obj: any = {};
  topcards: any;
  constructor() {}

  ngOnInit() {}
  
}
