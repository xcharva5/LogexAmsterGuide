import { Component, OnInit, Input } from '@angular/core';
import { CulturalEvent } from 'src/app/Structures/culturalEvent';

@Component({
  selector: 'app-event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.css']
})
export class EventItemComponent implements OnInit {

  @Input() event: CulturalEvent;

  constructor() { }

  ngOnInit() {
  }

}
