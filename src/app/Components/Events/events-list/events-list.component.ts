import { Component, OnInit } from '@angular/core';
import { DataReaderService } from 'src/app/Services/data-reader.service';
import { CulturalEvent } from 'src/app/Structures/culturalEvent';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {

  allEvents: CulturalEvent[];
  titleSearchTerm: string;
  dateSearchTerm: string;

  constructor(private dataReaderService: DataReaderService) { }

  ngOnInit() {
    this.dataReaderService.getAllEvents().subscribe((events) => this.allEvents = events);
  }
}
