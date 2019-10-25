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
  imagesUrl: string[];
  nearbyEvents: CulturalEvent[];
  previous;

  eventIcon = {
    url: '../../../../assets/images/event-marker.png',
    scaledSize: {
      width: 40,
      height: 40
    }
  };

  placeIcon = {
    url: '../../../../assets/images/place-marker.png',
    scaledSize: {
      width: 40,
      height: 40
    }
  };

  constructor(
    private route: ActivatedRoute,
    private reader: DataReaderService ) {

    this.route.params.subscribe((params: Params) => {
      this.placeId = params.placeid;
    });

    this.imagesUrl = [];
    this.nearbyEvents = [];
  }

  ngOnInit() {
    this.reader
      .getPlace(this.placeId)
      .subscribe(
        (place: Place) => {
          this.selectedPlace = place;
          console.log(this.selectedPlace);
          place.media.forEach(media => {
            this.imagesUrl.push(media.url);
          });
          this.reader.getNerbyEvents(place.location.latitude, place.location.longitude)
          .subscribe((events: CulturalEvent[]) => this.nearbyEvents = events);
        }
      );
    console.log(this.selectedPlace);
  }

  clickedMarker(infowindow) {
    if (this.previous) {
      this.previous.close();
    }
    this.previous = infowindow;
  }
}
