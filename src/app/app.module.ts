import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CreateComponent } from './components/create/create.component';
import { DateComponent } from './components/date/date.component';
import { PreferenceComponent } from './components/preference/preference.component';
import { ParticipantComponent } from './components/participant/participant.component';

import { AppRoutes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    DateComponent,
    PreferenceComponent,
    ParticipantComponent
  ],
  imports: [
    AppRoutes,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
