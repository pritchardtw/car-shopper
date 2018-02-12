import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  @Input() filters: Object;
  @Output() makeChange = new EventEmitter<string>();
  @Output() yearMinChange = new EventEmitter<number>();
  @Output() yearMaxChange = new EventEmitter<number>();
  @Output() mpgChange = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  onMakeChange(str: string) {
    this.makeChange.emit(str);
  }

  onYearMinChange(num: number) {
    this.yearMinChange.emit(num);
  }

  onYearMaxChange(num: number) {
    this.yearMaxChange.emit(num);
  }

  onMpgChange(num : number) {
    this.mpgChange.emit(num);
  }
}
