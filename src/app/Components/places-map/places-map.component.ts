import { Component, OnInit } from '@angular/core';
import { Place } from 'src/app/Structures/place';
import { DataReaderService } from 'src/app/Services/data-reader.service';

@Component({
  selector: 'app-places-map',
  templateUrl: './places-map.component.html',
  styleUrls: ['./places-map.component.css']
})
export class PlacesMapComponent implements OnInit {

  lat = 52.380470;
  lng = 4.902337;
  places: Place[];


  constructor(private _dataReaderService: DataReaderService) { }

  ngOnInit() {
    const myObserver2 = {
      next: (data: Place[]) => this.places = data,
      error: err => console.error('Observer got an error: ' + err)
    };

    this._dataReaderService.getAllPlaces().subscribe(myObserver2);
  }

  selectPosition(event) {
    console.log(typeof(this.places[0].location.latitude));
    console.log(typeof(this.places[0].location.longitude));
    this.lat = event.coords.lat;
    this.lng = event.coords.lng;
  }

}
