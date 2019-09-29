import { Component, OnInit, AfterViewInit } from '@angular/core';
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
  selectedPlace: Place;
  imageUrlArray = [
    '../../../../assets/images/img1.jpg',
    '../../../../assets/images/img2.jpg',
    '../../../../assets/images/img3.jpg',
    '../../../../assets/images/img4.jpg',
  ]
  imagesUrl: Array<string>;

  constructor(
    private route: ActivatedRoute,
    private reader: DataReaderService ) {

    this.route.params.subscribe((params: Params) => {
      this.placeId = params.placeid;
    });

    this.imagesUrl = new Array<string>();
  }

  ngOnInit() {
    /*this.selectedPlace = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.reader.getPlace(params.get('placeid')))
    );*/
    this.reader
      .getPlace(this.placeId)
      .subscribe(
        (place: Place) => {
          this.selectedPlace = place;
          place.media.forEach(media => {
            this.imagesUrl.push(media.url);
            console.log(this.imagesUrl);
          });
        }
      );
  }

  /*
      const myObserver = {
      next: (place: Place) => this.selectedPlace = place,
      error: err => console.error('Observer got an error: ' + err),
      complete: () => {
        this.selectedPlace.media.forEach(media =>
          this.imageSources.push(media.url)
        );
        console.log(this.selectedPlace);
        console.log(this.imageSources);
      }
    };

    this.route.paramMap
    .pipe(switchMap((params: ParamMap) =>
      this.reader.getPlace(params.get('placeid'))))
    .subscribe(myObserver);
  }
  */
}
