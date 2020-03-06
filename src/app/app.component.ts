import { Component } from '@angular/core';
import { Digimon } from "../interfaces";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Digimon';
  public digimons: Array<Digimon>;


  exportDigimons(digimon: Array<Digimon>): void {
    if (this.digimons !== digimon) {
      this.digimons = digimon;
    }
  }
}
