import { NgbDateStruct,NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';
import { Createur } from './createur';
import { Sondage } from './sondage';
 
export class Reunion {
   createur: Createur;
   sondage: Sondage;
   dates: Array<NgbDateStruct>;
   departs: Array<NgbTimeStruct>;
   fins: Array<NgbTimeStruct>;
   pause: Array<string>;
   preferences: Array<string>;
   allergies: Array<string>;
   participants: Array<string>;
}
