import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { ContentComponent } from './Components/content/content.component';
import { FooterComponent } from './Components/footer/footer.component';
import { PlacesListComponent } from './Components/places-list/places-list.component';
import { PlaceItemComponent } from './Components/place-item/place-item.component';
import { PlaceDetailComponent } from './Components/place-detail/place-detail.component';
import { PlacesMapComponent } from './Components/places-map/places-map.component';

import { PlaceStartYearPipe } from './Pipes/PlaceStartYearPipe';
import { SubstringFilterPipe } from './Pipes/substring-filter.pipe';
import { CitiesFilterPipe } from './Pipes/cities-filter.pipe';
import { CityFilterPipe } from './pipes/city-filter.pipe';
import { CoordinatesPipe } from './Pipes/coordinates.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    PlacesListComponent,
    PlaceItemComponent,
    PlaceStartYearPipe,
    SubstringFilterPipe,
    CitiesFilterPipe,
    CityFilterPipe,
    PlaceDetailComponent,
    PlacesMapComponent,
    CoordinatesPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCc2j377we3MG6RhUWHRebUnapTnaaWbEE'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
