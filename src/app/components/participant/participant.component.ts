import { Component, OnInit } from '@angular/core';

import { DoodleshareService } from '../../services/doodleshare.service';
import { DoodleapiService } from '../../services/doodleapi.service';

@Component({
  selector: 'app-participant',
  templateUrl: './participant.component.html',
  styleUrls: ['./participant.component.css']
})
export class ParticipantComponent implements OnInit {
  prenom: string;
  nom: string;
  email: string;
  emails: Array<string>;
 
  constructor(
   private doodleshare: DoodleshareService,
   private doodleapi: DoodleapiService
  ) { }

  ngOnInit() {
  }

  load(){
   let c: any = this.doodleapi.postTest();
  }

}
