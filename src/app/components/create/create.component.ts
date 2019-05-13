import { Component, OnInit } from '@angular/core';

import { DoodleshareService } from '../../services/doodleshare.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  intitule: string;
  lieu: string;
  resume: string;

  constructor(
   private doodleshare: DoodleshareService
  ) { }

  ngOnInit() {
  }


  load(){
   this.doodleshare.saveSondage(this.intitule,this.lieu,this.resume);
  }
}
