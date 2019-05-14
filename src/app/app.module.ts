import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { CreateComponent } from './components/create/create.component';
import { DateComponent } from './components/date/date.component';
import { PreferenceComponent } from './components/preference/preference.component';
import { ParticipantComponent } from './components/participant/participant.component';

import { AppRoutes } from './app.routes';

import { DoodleapiService } from './services/doodleapi.service';
import { DoodleshareService } from './services/doodleshare.service';
import { DoodlegeneratorService } from './services/doodlegenerator.service';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { TimepickerComponent } from './components/timepicker/timepicker.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    DateComponent,
    PreferenceComponent,
    ParticipantComponent,
    DatepickerComponent,
    TimepickerComponent
  ],
  imports: [
    NgbModule.forRoot(),
    HttpClientModule,
    FormsModule,
    AppRoutes,
    BrowserModule
  ],
  providers:  [
    DoodlegeneratorService,
    DoodleapiService,
    DoodleshareService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
