import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jenn-nav',
  templateUrl: './jenn-nav.component.html',
  styleUrls: ['./jenn-nav.component.css']
})

export class JennNavComponent implements OnInit {

  title = "Jenn Le";
  // menuOpened: false;

  constructor() { }

  ngOnInit() {
  }

}
