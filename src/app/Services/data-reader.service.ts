import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Place } from 'src/app/Structures/place';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataReaderService {

  private placesUrl: string = '/assets/data/establishment-data.json';
  private eventsUrl: string = '/assets/data/events-data.json';

  constructor(private http: HttpClient) { }

  getAllPlaces(): Observable<Place[]> {
    return this.http.get<Place[]>(this.placesUrl);
  }
}
