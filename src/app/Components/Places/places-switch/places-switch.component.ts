import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-places-switch',
  templateUrl: './places-switch.component.html',
  styleUrls: ['./places-switch.component.css']
})
export class PlacesSwitchComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const switchElement: HTMLInputElement = document.getElementById('view-switch') as HTMLInputElement;

    if (this.router.url === '/places/list') {
      switchElement.checked = false;
    } else {
      switchElement.checked = true;
    }
  }

  checkChange(event) {
    if (event.currentTarget.checked) {
      this.router.navigate(['map'], { relativeTo: this.route });
    } else {
      this.router.navigate(['list'], { relativeTo: this.route });
    }
  }

}
