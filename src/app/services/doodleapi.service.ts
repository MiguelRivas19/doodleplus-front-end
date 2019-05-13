import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Createur } from '../classes/createur';

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
   let context: string = url + "/preference"; 
   return this.get(context);
  }
  
  getAllergies(){
   let context: string = url + "/allergie"; 
   return this.get(context);
  }

  post(url:string, test: string){

   let c: Createur = {
    prenom: "miguel",
    nom: "rivas",
    email: "angel.rivas@gmail.com"
   }

   this.http.post(url, c)
   .subscribe(
    res => { console.log(res); },
    err => { console.log("Error ocurrido, " + err)}
   );
  }

  postTest(){
   let context: string = url + "/test";
   return this.post(context, "hola");
  }

}
