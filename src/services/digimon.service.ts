import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Digimon } from 'src/interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DigimonService {

  private DigiApi:string = "https://digimon-api.herokuapp.com/api/digimon";
  constructor(private http :HttpClient) { }
  obtenerDigimons(): Observable<Digimon[]> {
    return this.http.get<Digimon[]>(this.DigiApi).pipe();
  }
}
