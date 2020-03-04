import { Component, OnInit } from '@angular/core';
import { DigimonService } from '../../../services/digimon.service';

@Component({
  selector: 'app-digi-home',
  templateUrl: './digi-home.component.html',
  styleUrls: ['./digi-home.component.css']
})
export class DigiHomeComponent implements OnInit {

  constructor(private digiServicio: DigimonService) { }

  digimones :any;
  ngOnInit() {
    this.digiServicio.obtenerDigimons().subscribe(
      (data: any[])=>{
        this.digimones=data;
    },
      (error: any) => {
        console.log(error)
    }
    ); 
  }

}
