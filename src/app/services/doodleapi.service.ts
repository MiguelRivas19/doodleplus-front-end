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

  post(url:string, test: string){

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


   this.http.post(url, a)
   .subscribe(
    res => { console.log(res); },
    err => { console.log("Error ocurrido, " + err)}
   );
  }

  postTest(){
   let context: string = url + "/post/test2";
   return this.post(context, "hola");
  }

  postReunion(reunion: Reunion){
   console.log("test de reunion");
   let context: string = url + "/post/reunion";
   this.http.post(context, reunion)
   .subscribe(
    res => { console.log(res); },
    err => { console.log("Error ocurrido, " + err)}
   );
 }

}
