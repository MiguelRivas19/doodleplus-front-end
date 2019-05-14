import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DoodlegeneratorService {

  constructor() { }

  getDepartments(data: any): Array<string> {
   let departments: Array<string> = [];

   for(var i = 0; i < data.length; i++){
    departments.push(data[i].nom);
   }
   return departments;
  }
}
