import { Component, OnInit } from '@angular/core';
import { Place } from 'src/app/Structures/place';
import { DataReaderService } from 'src/app/Services/data-reader.service';
import { Router } from '@angular/router';
import { CityFilter } from 'src/app/Structures/cityFilter';

@Component({
  selector: 'app-places-map',
  templateUrl: './places-map.component.html',
  styleUrls: ['./places-map.component.css']
})
export class PlacesMapComponent implements OnInit {
  lat: number;
  lng: number;
  places: Place[];
  previous;
  titleSearchTerm: string;
  zipSearchTerm: string;
  yearSearchTerm: string;
  citiesFilter: Array<CityFilter>;

  constructor(
    private dataReaderService: DataReaderService
  ) {
    this.lat = 52.379956;
    this.lng = 4.900384;
  }

  ngOnInit() {
    const myObserver = {
      next: (data: Place[]) => this.places = data,
      error: err => console.error('Observer got an error: ' + err)
    };

    const myObserver2 = {
      next: (data: Place[]) => this.places = data,
      error: err => console.error('Observer got an error: ' + err),
      complete: () => {
        let uniqueCities: Array<string> = Array.from(new Set(this.places.map(place => place.location.city)));
        this.citiesFilter = uniqueCities.map(city => <CityFilter> {
          name: city,
          checked: false
        });
      }
    };

    this.dataReaderService.getAllPlaces().subscribe(myObserver);
    this.dataReaderService.getAllPlaces().subscribe(myObserver2);
  }

  clickedMarker(infowindow) {
    if (this.previous) {
      this.previous.close();
    }
    this.previous = infowindow;
  }

  checked() {
    if (this.citiesFilter) {
      return this.citiesFilter.filter(item => { return item.checked; });
    } else {
      return null;
    }
  }
}
