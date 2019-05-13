import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

}
