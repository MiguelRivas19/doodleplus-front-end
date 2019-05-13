import { Component, OnInit } from '@angular/core';

import { DoodleshareService } from '../../services/doodleshare.service';

import { Datesondage } from '../../classes/datesondage';
import { Heuresondage } from '../../classes/heuresondage';


@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {
  jour:string;
  pause: any;

  depart1: string;
  depart2: string;
  fin1: string;
  fin2: string;

  date: Datesondage;
  heure1: Heuresondage;
  heure2: Heuresondage;

  constructor(
   private doodleshare: DoodleshareService
  ) { }

  ngOnInit() {
  }

  load(){
   this.date = {
    sondage: this.doodleshare.sondage,
    jour: this.jour,
    pause: this.pause,
   }

   this.heure1 = {
    date: this.date,
    depart: this.depart1,
    fin: this.fin1
   }
   
   this.heure2 = {
    date: this.date,
    depart: this.depart2,
    fin: this.fin2
   }
   this.doodleshare.saveDates(this.date,this.heure1,this.heure2);
  }
}
