import { Routes, RouterModule } from '@angular/router';

import { CreateComponent } from './components/create/create.component';
import { DateComponent } from './components/date/date.component';
import { PreferenceComponent } from './components/preference/preference.component';
import { ParticipantComponent } from './components/participant/participant.component';

const routes: Routes = [
 {
  path: '',
  component: CreateComponent
 },
 {
  path: 'date',
  component: DateComponent
 },
 {
  path: 'preference',
  component: PreferenceComponent
 },
 {
  path: 'participant',
  component: ParticipantComponent
 }
];

export const AppRoutes = RouterModule.forRoot(routes);
