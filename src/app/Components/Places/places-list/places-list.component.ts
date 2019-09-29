import { Component, OnInit } from '@angular/core';
import { DataReaderService } from 'src/app/Services/data-reader.service';
import { Place } from 'src/app/Structures/place';
import { CityFilter } from 'src/app/Structures/cityFilter';
import { Router } from '@angular/router';

@Component({
  selector: 'app-places-list',
  templateUrl: './places-list.component.html',
  styleUrls: ['./places-list.component.css']
})
export class PlacesListComponent implements OnInit {

  places: Place[];
  titleSearchTerm: string;
  zipSearchTerm: string;
  yearSearchTerm: string;
  citiesFilter: Array<CityFilter>;

  constructor(
    private dataReaderService: DataReaderService,
  ) { }

  ngOnInit() {
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

    this.dataReaderService.getAllPlaces().subscribe(myObserver2);
  }

  checked() {
    if (this.citiesFilter) {
      return this.citiesFilter.filter(item => { return item.checked; });
    } else {
      return null;
    }
  }
}
