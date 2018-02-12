import { Component, OnInit, Input } from '@angular/core';
import { Car } from '../car';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  @Input() cars: Car[];

  constructor() { }

  ngOnInit() {
  }

}
