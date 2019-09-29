import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-events-switch',
  templateUrl: './events-switch.component.html',
  styleUrls: ['./events-switch.component.css']
})
export class EventsSwitchComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const switchElement: HTMLInputElement = document.getElementById('view-switch') as HTMLInputElement;

    if (this.router.url === '/events/list') {
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
