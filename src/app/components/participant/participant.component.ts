import { Component, OnInit } from '@angular/core';
import {Subject} from 'rxjs';
import {debounceTime} from 'rxjs/operators';

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
  private _success = new Subject<string>(); 
  successMessage: string;

  constructor(
   private doodleshare: DoodleshareService
  ) { }

  ngOnInit() {
    this._success.subscribe((message) => this.successMessage = message);
    this._success.pipe(
      debounceTime(5000)
    ).subscribe(() => this.successMessage = null);
  }

  load(){
   this._success.next(`Merci pour votre preference`);
   let participants: Array<string> = this.participants.replace(/\s/g, "").split(',');
   let createur = {prenom: this.prenom, nom: this.nom, email: this.email};
   this.doodleshare.setCreateur(createur);
   this.doodleshare.setParticipants(participants);
  }

}
