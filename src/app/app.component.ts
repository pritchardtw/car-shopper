import { Component } from '@angular/core';
import { CarService } from './car.service';
import { Car } from './car';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Car Shopper';
  cars: Car[];
  filteredCars: Car[];

  filters = {
    year: {
      enabled: true,
      min: 70,
      max: 85
    },
    make: {
      enabled: true,
      init_name: "",
      name: ""
    },
    mpg: {
      enabled: true,
      min: -1
    }
  }

  constructor(private carService: CarService) { }
 
  ngOnInit() {
    this.getCars();
  }

  filterChange(changedFilter: Object) {
    this.filters[changedFilter.inputId].enabled = changedFilter.checked;
    
    if(!changedFilter.checked) {
      switch(changedFilter.inputId) {
        case "make":
          this.filters.make.name="";
          break;
        case "year":
          this.filters.year.min = 70;
          this.filters.year.max = 85;
          break;
        case "mpg":
          this.filters.mpg.min = -1;
          break;
        default:
      }
    }

    this.filterCars();
  }

  makeChange(name: string) {
    this.filters.make.name = name;
    this.filterCars();
  }

  yearMinChange(year: number) {
    this.filters.year.min = year;
    this.filterCars();
  }

  yearMaxChange(year: number) {
    this.filters.year.max = year;
    this.filterCars();
  }

  mpgChange(mpg: number) {
    this.filters.mpg.min = mpg;
    this.filterCars();
  }
 
  getCars(): void {
    this.carService.getCars()
    .subscribe(cars => {
      this.cars = cars;
      this.filteredCars = [...cars];
    });
  }

  filterCars() {
    this.filteredCars = this.cars.filter(car => {
      let yearOk = car.year <= this.filters.year.max && car.year >= this.filters.year.min;
      let makeOk = car.name.toLowerCase().includes(this.filters.make.name.toLowerCase());
      let mpgOk = car.mpg > this.filters.mpg.min;
      return (yearOk && makeOk && mpgOk);
    });
  }
}
