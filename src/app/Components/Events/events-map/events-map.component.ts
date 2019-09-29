import { Component, OnInit } from '@angular/core';
import { CulturalEvent } from 'src/app/Structures/culturalEvent';
import { DataReaderService } from 'src/app/Services/data-reader.service';

@Component({
  selector: 'app-events-map',
  templateUrl: './events-map.component.html',
  styleUrls: ['./events-map.component.css']
})
export class EventsMapComponent implements OnInit {

  lat: number;
  lng: number;
  events: CulturalEvent[];
  previous;
  titleSearchTerm: string;

  constructor(private reader: DataReaderService) {
    this.lat = 52.379956;
    this.lng = 4.900384;
  }

  ngOnInit() {
    const myObserver = {
      next: (data: CulturalEvent[]) => this.events = data,
      error: err => console.error('Observer got an error: ' + err)
    };

    this.reader.getAllEvents().subscribe(myObserver);
  }

  clickedMarker(infowindow) {
    if (this.previous) {
      this.previous.close();
    }
    this.previous = infowindow;
  }
}
