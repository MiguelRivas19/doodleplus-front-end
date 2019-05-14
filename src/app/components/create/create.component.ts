import { Component, OnInit } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';

import { DoodleshareService } from '../../services/doodleshare.service';
import { DoodleapiService } from '../../services/doodleapi.service';
import { DoodlegeneratorService } from '../../services/doodlegenerator.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  intitule: string;
  lieu: string;
  resume: string;

  departments: any;
  search = (text$: Observable<string>) =>
      text$.pipe(
       debounceTime(200),
       distinctUntilChanged(),
       map(term => term.length < 2 ? []
        : this.departments.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
     )

  constructor(
   private doodleshare: DoodleshareService,
   private doodleapi: DoodleapiService,
   private doodlegenerator: DoodlegeneratorService
  ) { }

  ngOnInit() {
   this.doodleapi.getDepartments().subscribe(
    data => {
     this.departments = this.doodlegenerator.getDepartments(data);
    }
   );
  }
 
  load(){
   this.doodleshare.setSondage(this.intitule, this.lieu, this.resume);
  }
}
