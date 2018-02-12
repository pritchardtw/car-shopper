import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  @Input() filters: Object;
  @Output() updatedFilters = new EventEmitter<Object>();

  constructor() { }

  onChange(inputId, checked) {
    this.updatedFilters.emit({inputId, checked});
  }

  ngOnInit() {}

}
