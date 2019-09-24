import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { parse } from 'querystring';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.component.html',
  styleUrls: ['./place-detail.component.css']
})
export class PlaceDetailComponent implements OnInit {

  PlaceId: string;

  constructor( private route: ActivatedRoute ) {
    this.route.params.subscribe((params: Params) => {
      this.PlaceId = params['placeid'];
    });


  }

  ngOnInit() {
  }

}
