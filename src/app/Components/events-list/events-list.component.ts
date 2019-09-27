import { Component, OnInit } from '@angular/core';
import { DataReaderService } from 'src/app/Services/data-reader.service';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {

  events: Event[];
  titleSearchTerm: string;

  constructor(private _dataReaderService: DataReaderService) { }

  ngOnInit() {

    const myObserver = {
      next: (data: Event[]) => this.events = data,
      error: err => console.error('Observer got an error: ' + err)
    };

    this._dataReaderService.getAllEvents().subscribe(myObserver);
  }

}
