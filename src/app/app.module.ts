import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { TeamComponent } from './team/team.component';
import { NavComponent } from './nav/nav.component';
import { RadarComponent } from './radar/radar.component';

import { ParticlesModule } from 'angular-particle';
import { EaCrumbComponent } from './ea-crumb/ea-crumb.component';
import { EaAboutComponent } from './ea-about/ea-about.component';
import { EaCardComponent } from './ea-card/ea-card.component';
import { EaServicesComponent } from './ea-services/ea-services.component';
import { EaIndustriesComponent } from './ea-industries/ea-industries.component';
import { EaOpenComponent } from './ea-open/ea-open.component';

@NgModule({
  declarations: [
    AppComponent,
    MainContainerComponent,
    TeamComponent,
    NavComponent,
    RadarComponent,
    EaCrumbComponent,
    EaAboutComponent,
    EaCardComponent,
    EaServicesComponent,
    EaIndustriesComponent,
    EaOpenComponent
    ],
  imports: [
    BrowserModule,
    ParticlesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
