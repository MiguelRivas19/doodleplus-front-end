import { Injectable } from '@angular/core';

import { Createur } from '../classes/createur';
import { Sondage } from '../classes/sondage';
import { Datesondage } from '../classes/datesondage';
import { Heuresondage } from '../classes/heuresondage';
import { Preference } from '../classes/preference';
import { Allergie } from '../classes/allergie';

@Injectable({
  providedIn: 'root'
})
export class DoodleshareService {
  createur: Createur;
  sondage: Sondage;
  date: Datesondage;
  heure1: Heuresondage;
  heure2: Heuresondage;
  preference: Preference;
  allergie: Allergie;

  constructor() {
   this.createur = {
    prenom: "angel",
    nom: "rivas",
    email: "angel.rivas@gmail.com"
   }
  }

  saveSondage(intitule:string, lieu:string, resume: string){
   this.sondage = {
    createur: this.createur,
    intitule: intitule,
    lieu: lieu,
    resume: resume
   };
   console.log(this.sondage); 
  }

  saveDates(date:Datesondage, heure1:Heuresondage, heure2:Heuresondage){
   this.date = date;
   this.heure1 = heure1;
   this.heure2 = heure2;

   console.log("save Dates");
   console.log(this.date);
   console.log(this.heure1);
   console.log(this.heure2);
  }
  
  savePreferences(preference:Preference, allergie: Allergie){
   this.preference = preference;
   this.allergie = allergie;

   console.log("save Preference");
   console.log(this.preference);
   console.log(this.allergie);
 }
}
