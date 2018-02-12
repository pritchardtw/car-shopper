import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { FiltersComponent } from './filters/filters.component';
import { CategoriesComponent } from './categories/categories.component';
import { ItemListComponent } from './item-list/item-list.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { CarService } from './car.service';


@NgModule({
  declarations: [
    AppComponent,
    FiltersComponent,
    CategoriesComponent,
    ItemListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [ 
    CarService, 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
