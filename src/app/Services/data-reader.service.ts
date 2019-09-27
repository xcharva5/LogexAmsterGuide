import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Place } from 'src/app/Structures/place';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataReaderService {

  private placesUrl = '/assets/data/establishment-data.json';
  private eventsUrl = '/assets/data/events-data.json';

  constructor(private http: HttpClient) { }

  getAllPlaces(): Observable<Place[]> {
    return this.http.get<Place[]>(this.placesUrl);
  }

  getPlace(id: string) {
    return this.getAllPlaces().pipe(
      map((places: Place[]) => places.find(place => place.trcid === id))
    );
  }

  getAllEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(this.eventsUrl);
  }
}
