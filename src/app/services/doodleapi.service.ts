import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgbDateStruct,NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';

import { Createur } from '../classes/createur';
import { Sondage } from '../classes/sondage';
import { Reunion } from '../classes/reunion';

let url = "http://localhost:4200/api";

@Injectable({
  providedIn: 'root'
})
export class DoodleapiService {

  constructor(private http: HttpClient) { }

  get(url: string): any {
   return this.http.get(url);
  }

  getPreferences(){
   let context: string = url + "/get/preference"; 
   return this.get(context);
  }
  
  getAllergies(){
   let context: string = url + "/get/allergie"; 
   return this.get(context);
  }

  getDepartments(){
   let context: string = "https://geo.api.gouv.fr/departements?fields=nom";
   return this.get(context);
  }

  post(url: string, data: any){
   this.http.post(url, data)
   .subscribe(
    res => { console.log(res); },
    err => { console.log("Error ocurrido, " + err)}
   );
  }

  postReunion(reunion: Reunion){
   let context: string = url + "/post/reunion";
   return this.post(context, reunion);
  }

  postTest(){
   let context: string = url + "/post/test2";
   let c1: Createur = {
    prenom: "miguel",
    nom: "rivas",
    email: "angel.rivas@gmail.com"
   }

   let c2: Createur = {
    prenom: "luz",
    nom: "rivas",
    email: "angel.rivas@gmail.com"
   }

   let a: Array<Createur> = [];
   a.push(c1);
   a.push(c2);

   this.http.post(context,"salut!")
   .subscribe(
    res => { console.log(res); },
    err => { console.log("Error ocurrido, " + err)}
   );
  }

  postReuniontest(reunion: Reunion){
   console.log("test de reunion");
   let context: string = url + "/post/reunion";
   let time: NgbTimeStruct = {hour:1, minute:1, second:1};
   this.http.post(context, time)
   .subscribe(
    res => { console.log(res); },
    err => { console.log("Error ocurrido, " + err)}
   );
  }

}
