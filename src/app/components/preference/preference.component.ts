import { Component, OnInit } from '@angular/core';

import { DoodleshareService } from '../../services/doodleshare.service';
import { DoodleapiService } from '../../services/doodleapi.service';

import { Preference } from '../../classes/preference';
import { Allergie } from '../../classes/allergie';

@Component({
  selector: 'app-preference',
  templateUrl: './preference.component.html',
  styleUrls: ['./preference.component.css']
})
export class PreferenceComponent implements OnInit {
  preferences: Array<Preference>;
  allergies: Array<Allergie>;

  preference: Array<string>;
  allergie: Array<string>;

  constructor(
   private doodleshare: DoodleshareService,
   private doodleapi: DoodleapiService
  ) { }

  ngOnInit() {
   this.init();
  }

  init(){
   this.doodleapi.getPreferences().subscribe(
    data => {
     this.preferences = data;
    }
   );
   this.doodleapi.getAllergies().subscribe(
    data => {
     this.allergies = data;
    }
   );
  }

  load(){
   this.doodleshare.setPreferences(this.preference);
   this.doodleshare.setAllergies(this.allergie);
  }
}
