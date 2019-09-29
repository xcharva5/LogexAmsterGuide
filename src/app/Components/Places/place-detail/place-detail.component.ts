import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Params, Router, ParamMap } from '@angular/router';
import { DataReaderService } from 'src/app/Services/data-reader.service';
import { Place } from 'src/app/Structures/place';
import { CulturalEvent } from 'src/app/Structures/culturalEvent';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.component.html',
  styleUrls: ['./place-detail.component.css']
})
export class PlaceDetailComponent implements OnInit {

  placeId: string;
  selectedPlace: Place;
  imagesUrl: Array<string>;
  nearbyEvents: CulturalEvent[];

  constructor(
    private route: ActivatedRoute,
    private reader: DataReaderService ) {

    this.route.params.subscribe((params: Params) => {
      this.placeId = params.placeid;
    });

    this.imagesUrl = new Array<string>();
  }

  ngOnInit() {
    this.reader
      .getPlace(this.placeId)
      .subscribe(
        (place: Place) => {
          this.selectedPlace = place;
          place.media.forEach(media => {
            this.imagesUrl.push(media.url);
          });
          this.reader.getNerbyEvents(place.location.latitude, place.location.longitude)
          .subscribe((events: CulturalEvent[]) => this.nearbyEvents = events);
        }
      );


  }
}
