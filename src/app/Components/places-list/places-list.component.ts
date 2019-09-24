import { Component, OnInit } from '@angular/core';
import { DataReaderService } from 'src/app/Services/data-reader.service';
import { Place } from 'src/app/Structures/place';
import { CityFilter } from 'src/app/Structures/cityFilter';
import { of } from 'rxjs/internal/observable/of';

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

  constructor(private _dataReaderService: DataReaderService) { }

  ngOnInit() {
    const myObserver2 = {
      next: (data: Place[]) => this.places = data,
      error: err => console.error('Observer got an error: ' + err),
      complete: () => {
        //console.log('Observer got a complete notification');
        let uniqueCities: Array<string> = Array.from(new Set(this.places.map(place => place.location.city)));
        this.citiesFilter = uniqueCities.map(city => <CityFilter> {
          name: city,
          checked: false
        });
        }
    };

    this._dataReaderService.getAllPlaces().subscribe(myObserver2);

    /*this._dataReaderService.getAllPlaces()
      .subscribe((data: Place[]) => this.places = data);*/
  }

  showCityFilter() {
    /*let uniqueCities: Array<string> = Array.from(new Set(this.places.map(place => place.location.city)));

    this.citiesFilter = uniqueCities.map(city => <CityFilter> {
      name: city,
      checked: false
    });*/
  }

  checked() {
    if (this.citiesFilter) {
      return this.citiesFilter.filter(item => { return item.checked; });
    } else {
      return null;
    }
  }

  showPlace(id: string) {
    const myObserver3 = {
      error: err => console.error('Observer got an error: ' + err),
      complete: () => {
        console.log(this.places.filter((place) => place.trcid === id));
      }
    };

    this._dataReaderService.getAllPlaces().subscribe(myObserver3);
  }

}
