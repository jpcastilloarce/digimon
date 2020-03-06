import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DigiHeaderComponent } from './components/digi-header/digi-header.component';
import { DigiHomeComponent } from './components/digi-home/digi-home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DigimonService } from '../services/digimon.service';
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    DigiHeaderComponent,
    DigiHomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  providers: [DigimonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
