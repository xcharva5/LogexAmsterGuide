import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { ContentComponent } from './Components/content/content.component';
import { FooterComponent } from './Components/footer/footer.component';
import { PlacesListComponent } from './Components/places-list/places-list.component';
import { HttpClientModule } from '@angular/common/http';
import { PlaceItemComponent } from './Components/place-item/place-item.component';

import { PlaceStartYearPipe } from './Pipes/PlaceStartYearPipe';
import { SubstringFilterPipe } from './Pipes/substring-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    PlacesListComponent,
    PlaceItemComponent,
    PlaceStartYearPipe,
    SubstringFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
