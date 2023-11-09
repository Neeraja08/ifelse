import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss'],
  standalone: true,
  imports: [CommonModule],
  host: { class: 'flexer' },
})
export class OrderListComponent implements OnInit {
  @Input() orders:any=[];
  constructor() {}
  show(e:any){
    console.log(e)
    Swal.fire({
      html:
      '<h4>'+'Customer: <b style="color:#506de2">'+e.name+'</b></h4>' +
      '<h4>'+'Product: <b style="color:#506de2">'+e.product+'</b></h4>',
      confirmButtonText: 'OK'
    });
  }

  ngOnInit() {}
}
