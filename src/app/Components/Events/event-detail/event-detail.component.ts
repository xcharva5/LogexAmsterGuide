import { Component, OnInit } from '@angular/core';
import { CulturalEvent } from 'src/app/Structures/culturalEvent';
import { Place } from 'src/app/Structures/place';
import { ActivatedRoute, Params } from '@angular/router';
import { DataReaderService } from 'src/app/Services/data-reader.service';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {

  eventId: string;
  selectedEvent: CulturalEvent;
  imagesUrl: string[];
  nearbyPlaces: Place[];
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
    private reader: DataReaderService
  ) {
    this.route.params.subscribe((params: Params) => {
      this.eventId = params.eventid;
    });

    this.imagesUrl = [];
    this.nearbyPlaces = [];
  }

  ngOnInit() {
    this.reader
      .getEvent(this.eventId)
      .subscribe(
        (event: CulturalEvent) => {
          this.selectedEvent = event;
          event.media.forEach(media => {
            this.imagesUrl.push(media.url);
          });
          this.reader.getNerbyPlaces(event.location.latitude, event.location.longitude)
          .subscribe((places: Place[]) => {
            this.nearbyPlaces = places;
            console.log(this.nearbyPlaces);
          });
        }
      );


  }

  clickedMarker(infowindow) {
    if (this.previous) {
      this.previous.close();
    }
    this.previous = infowindow;
  }

}
