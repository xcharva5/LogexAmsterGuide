// modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';
import { SlideshowModule } from 'ng-simple-slideshow';

// components
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';

import { PlacesComponent } from './Components/Places/places/places.component';
import { PlacesListComponent } from './Components/Places/places-list/places-list.component'; // ok
import { PlaceItemComponent } from './Components/Places/place-item/place-item.component'; // ok
import { PlaceDetailComponent } from './Components/Places/place-detail/place-detail.component'; // ok
import { PlacesMapComponent } from './Components/Places/places-map/places-map.component'; // ok
import { PlacesSwitchComponent } from './Components/Places/places-switch/places-switch.component';

import { EventsComponent } from './Components/Events/events/events.component';
import { EventsListComponent } from './Components/Events/events-list/events-list.component';
import { EventItemComponent } from './Components/Events/event-item/event-item.component';
import { EventDetailComponent } from './Components/Events/event-detail/event-detail.component';
import { EventsMapComponent } from './Components/Events/events-map/events-map.component';
import { EventsSwitchComponent } from './Components/Events/events-switch/events-switch.component';

// pipes
import { PlaceStartYearPipe } from './Pipes/PlaceStartYearPipe';
import { SubstringFilterPipe } from './Pipes/substring-filter.pipe';
import { CitiesFilterPipe } from './Pipes/cities-filter.pipe';
import { CityFilterPipe } from './Pipes/city-filter.pipe';
import { CoordinatesPipe } from './Pipes/coordinates.pipe';
import { EventsTitleFilterPipe } from './Pipes/events-title-filter.pipe';
import { OrderByPipe } from './Pipes/order-by';
import { PagenotfoundComponent } from './Components/pagenotfound/pagenotfound.component';
import { AboutComponent } from './Components/about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PlacesListComponent,
    PlaceItemComponent,
    PlaceStartYearPipe,
    SubstringFilterPipe,
    CitiesFilterPipe,
    CityFilterPipe,
    PlaceDetailComponent,
    PlacesMapComponent,
    CoordinatesPipe,
    EventsListComponent,
    EventItemComponent,
    EventsTitleFilterPipe,
    PlacesComponent,
    PlacesSwitchComponent,
    OrderByPipe,
    EventsComponent,
    EventDetailComponent,
    EventsMapComponent,
    EventsSwitchComponent,
    PagenotfoundComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCc2j377we3MG6RhUWHRebUnapTnaaWbEE'  // API key for Google Maps
    }),
    SlideshowModule
  ],
  providers: [
    CoordinatesPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
