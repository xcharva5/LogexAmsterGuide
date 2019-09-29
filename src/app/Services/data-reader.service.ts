import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Place } from 'src/app/Structures/place';
import { CulturalEvent } from 'src/app/Structures/culturalEvent';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { CoordinatesPipe } from '../Pipes/coordinates.pipe';

@Injectable({
  providedIn: 'root'
})
export class DataReaderService {

  private placesUrl = '/assets/data/establishment-data.json';
  private eventsUrl = '/assets/data/events-data.json';

  constructor(
    private http: HttpClient,
    private coord: CoordinatesPipe) { }

  getAllPlaces(): Observable<Place[]> {
    return this.http.get<Place[]>(this.placesUrl);
  }

  getPlace(id: string): Observable<Place> {
    return this.getAllPlaces().pipe(
      map((places: Place[]) => places.find(place => place.trcid === id))
    );
  }

  getAllEvents(): Observable<CulturalEvent[]> {
    return this.http.get<CulturalEvent[]>(this.eventsUrl);
  }

  getNerbyEvents(placeX: string, placeY: string): Observable<CulturalEvent[]> {
    return this.getAllEvents().pipe(map((events: CulturalEvent[]) => events
    .filter((event: CulturalEvent) =>
      this.distance(
        this.coord.transform(event.location.latitude),
        this.coord.transform(placeX),
        this.coord.transform(event.location.longitude),
        this.coord.transform(placeY)) < 1)));
  }

  distance(x2: number, x1: number, y2: number, y1: number): number {
    return Math.abs(Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2))) * 100;
  }
}
