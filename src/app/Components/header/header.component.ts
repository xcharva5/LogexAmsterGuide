import { Component, OnInit, HostListener } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  prevScrollPos = window.pageYOffset;

  @HostListener("window:scroll", [])
  onWindowScroll() {
    // navigation logic
    let currentScrollPos = window.pageYOffset;

    if (this.prevScrollPos > currentScrollPos) { 
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-60px";
    }
    this.prevScrollPos = currentScrollPos;

    // go top button logic
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("goTopBtn").style.display = "block";
    } else {
      document.getElementById("goTopBtn").style.display = "none";
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
}
