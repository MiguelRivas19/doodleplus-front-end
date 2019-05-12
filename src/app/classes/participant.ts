import { Sondage } from './sondage';
import { Datesondage } from './datesondage';
import { Heuresondage } from './heuresondage';
import { Allergie } from './allergie';
import { Preference } from './preference';

export class Participant {
 id: number;
 prenom: string;
 nom: string;
 email: string;
 sondage: Sondage;
 date: Datesondage;
 heure: Heuresondage;
 allergie: Allergie;
 preference: Preference;
}
