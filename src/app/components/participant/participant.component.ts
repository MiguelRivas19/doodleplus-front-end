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
  participants: string;
 
  constructor(
   private doodleshare: DoodleshareService
  ) { }

  ngOnInit() {
  }

  load(){
   let participants: Array<string> = this.participants.replace(/\s/g, "").split(',');
   let createur = {prenom: this.prenom, nom: this.nom, email: this.email};
   this.doodleshare.setCreateur(createur);
   this.doodleshare.setParticipants(participants);
  }

}
