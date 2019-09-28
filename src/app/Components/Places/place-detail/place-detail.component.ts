import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router, ParamMap } from '@angular/router';
import { parse } from 'querystring';
import { DataReaderService } from 'src/app/Services/data-reader.service';
import { Place } from 'src/app/Structures/place';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.component.html',
  styleUrls: ['./place-detail.component.css']
})
export class PlaceDetailComponent implements OnInit {

  placeId: string;
  selectedPlace: Observable<Place>;

  constructor(
    private route: ActivatedRoute,
    private reader: DataReaderService ) {

    this.route.params.subscribe((params: Params) => {
      this.placeId = params.placeid;
    });
  }

  ngOnInit() {
    this.selectedPlace = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.reader.getPlace(params.get('placeid')))
    );
  }

}
