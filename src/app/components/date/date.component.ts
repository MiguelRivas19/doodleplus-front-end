import { Component, OnInit } from '@angular/core';
import { NgbDateStruct, NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';

import { DoodleshareService } from '../../services/doodleshare.service';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {
  dates: Array<NgbDateStruct> = [];
  departs: Array<NgbTimeStruct> = [];
  fins: Array<NgbTimeStruct> = [];
  pause: Array<string> = [];

  constructor(
   private doodleshare: DoodleshareService
  ) { }

  ngOnInit() {
  }

  load(){
   this.doodleshare.setDates(this.dates,this.departs, this.fins, this.pause);
  }
}
