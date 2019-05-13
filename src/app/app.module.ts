import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CreateComponent } from './components/create/create.component';
import { DateComponent } from './components/date/date.component';
import { PreferenceComponent } from './components/preference/preference.component';
import { ParticipantComponent } from './components/participant/participant.component';

import { AppRoutes } from './app.routes';

import { DoodleapiService } from './services/doodleapi.service';
import { DoodleshareService } from './services/doodleshare.service';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    DateComponent,
    PreferenceComponent,
    ParticipantComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    AppRoutes,
    BrowserModule
  ],
  providers:  [
    DoodleapiService,
    DoodleshareService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
