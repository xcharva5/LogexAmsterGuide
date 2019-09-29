import { Component, OnInit } from '@angular/core';
import { Place } from 'src/app/Structures/place';
import { DataReaderService } from 'src/app/Services/data-reader.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-places-map',
  templateUrl: './places-map.component.html',
  styleUrls: ['./places-map.component.css']
})
export class PlacesMapComponent implements OnInit {

  lat = 52.380470;
  lng = 4.902337;
  places: Place[];
  previous;


  constructor(
    private _dataReaderService: DataReaderService,
    private router: Router
  ) { }

  ngOnInit() {
    const myObserver2 = {
      next: (data: Place[]) => this.places = data,
      error: err => console.error('Observer got an error: ' + err)
    };

    this._dataReaderService.getAllPlaces().subscribe(myObserver2);
  }

  clickedMarker(infowindow) {
    if (this.previous) {
      this.previous.close();
    }
    this.previous = infowindow;
  }

  goToDetails(trcid) {
    //this.router.navigate(['map'], { relativeTo: this.route });
    //[routerLink]="['/detail', place.trcid]
  }

}
