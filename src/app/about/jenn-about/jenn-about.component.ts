import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jenn-about',
  templateUrl: './jenn-about.component.html',
  styleUrls: ['./jenn-about.component.scss']
})
export class JennAboutComponent implements OnInit {
  isMeExpanded: boolean;
  isWorkExpanded: boolean;
  isSkillsExpanded: boolean;
  isAccompExpanded: boolean;

  constructor() {
  }

  ngOnInit() {
    this.isMeExpanded = true;
    this.isWorkExpanded = false;
    this.isSkillsExpanded = false;
    this.isAccompExpanded = false;
  }

  collapseOthers(toOpen: number): void {
    let statuses = [false, false, false, false];
    statuses[toOpen] = true;

    this.isMeExpanded = statuses[0];
    this.isWorkExpanded = statuses[1];
    this.isSkillsExpanded = statuses[2];
    this.isAccompExpanded = statuses[3];
  }

}
