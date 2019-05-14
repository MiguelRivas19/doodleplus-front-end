import { Injectable } from '@angular/core';
import { NgbDateStruct,NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';

import { DoodleapiService } from './doodleapi.service';

import { Createur } from '../classes/createur';
import { Sondage } from '../classes/sondage';
import { Datesondage } from '../classes/datesondage';
import { Heuresondage } from '../classes/heuresondage';
import { Preference } from '../classes/preference';
import { Allergie } from '../classes/allergie';
import { Reunion } from '../classes/reunion';

@Injectable({
  providedIn: 'root'
})
export class DoodleshareService {
  intitule: string;
  lieu: string;
  resume: string;
  
  createur: Createur;
  sondage: Sondage;
  dates: Array<NgbDateStruct>;
  departs: Array<NgbTimeStruct>;
  fins: Array<NgbTimeStruct>;
  pause: Array<string>;
  preferences: Array<string>;
  allergies: Array<string>;
  participants: Array<string>;

  constructor(
   private doodleapi: DoodleapiService
  ) {}

  setCreateur(createur: Createur){
   this.createur = createur;
   this.sondage = {createur: createur,intitule: this.intitule, lieu: this.lieu, resume: this.resume};
   let reunion: Reunion = {
    createur: this.createur,
    sondage: this.sondage,
    dates: this.dates,
    departs: this.departs,
    fins: this.fins,
    pause: this.pause,
    preferences: this.preferences,
    allergies: this.allergies,
    participants: this.participants
   };
   this.doodleapi.postReunion(reunion);
  }

  setSondage(intitule:string, lieu:string, resume:string){
   this.intitule = intitule;
   this.lieu = lieu;
   this.resume = resume;
  }

  setDates(dates: Array<NgbDateStruct>, departs: Array<NgbTimeStruct>, fins: Array<NgbTimeStruct>, pause: Array<string>){
   this.dates = dates;
   this.departs = departs;
   this.fins = fins;
   this.pause = pause;
  }

  setPreferences(preferences: Array<string>){
   this.preferences = preferences;
  }

  setAllergies(allergies: Array<string>){
   this.allergies = allergies;
  }

  setParticipants(participants: Array<string>){
   this.participants = participants;
   console.log(participants);
  }
}
