import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { HeaderComponent } from './header/header.component';

import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';
import { MapDetailComponent } from './map-detail/map-detail.component';

import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    HeaderComponent,
    MapDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBpRtP8tNUx7k0oROtPEnsVfroGgWZFyxg'
    }),
    AgmDirectionModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
