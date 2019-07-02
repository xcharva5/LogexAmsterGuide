import { Component, OnInit } from '@angular/core';
import { DataReaderService } from 'src/app/Services/data-reader.service';
import { IPlace } from 'src/app/Structures/place';

@Component({
  selector: 'app-places-list',
  templateUrl: './places-list.component.html',
  styleUrls: ['./places-list.component.css']
})
export class PlacesListComponent implements OnInit {

  places: IPlace[];
  //filteredPlaces: IPlace[];
  titleSearchTerm: string;
  zipSearchTerm: string;
  /*get searchTerm(): string {
    return this._searchTerm;
  }
  set searchTerm(value: string) {
    console.log('change:' + this.searchTerm);
    this._searchTerm = value;
    this.filteredPlaces = this.filterPlaces(value);
  }*/

  /*filterPlaces(searchString: string) {
    return this.filteredPlaces.filter(place =>
      place.title.toLowerCase().indexOf(searchString.toLowerCase()) !== -1);
  }*/

  constructor(private _dataReaderService: DataReaderService) { }

  ngOnInit() {
    this._dataReaderService.getPlaces()
      .subscribe(data => this.places = data);
    //this.filteredPlaces = this.places;
  }

}
