import { Component, OnInit } from '@angular/core';
import { DataReaderService } from 'src/app/Services/data-reader.service';
import { Place } from 'src/app/Structures/place';

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
  uniqueCities: Set<string>;

  constructor(private _dataReaderService: DataReaderService) { }

  ngOnInit() {
    this._dataReaderService.getAllPlaces()
      .subscribe((data: Place[]) => this.places = data);
  }

  showCityFilter() {
    this.uniqueCities = new Set(this.places.map(place => place.location.city));
  }

}
