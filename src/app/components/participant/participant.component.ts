import { Component, OnInit } from '@angular/core';

import { DoodleshareService } from '../../services/doodleshare.service';

@Component({
  selector: 'app-participant',
  templateUrl: './participant.component.html',
  styleUrls: ['./participant.component.css']
})
export class ParticipantComponent implements OnInit {

  constructor(
   private doodleshare: DoodleshareService
  ) { }

  ngOnInit() {
  }

}
