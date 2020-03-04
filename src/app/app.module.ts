import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DigiHeaderComponent } from './components/digi-header/digi-header.component';
import { DigiHomeComponent } from './components/digi-home/digi-home.component';
import { DigiVersusComponent } from './components/digi-versus/digi-versus.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DigimonService } from '../services/digimon.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DigiHeaderComponent,
    DigiHomeComponent,
    DigiVersusComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [DigimonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
