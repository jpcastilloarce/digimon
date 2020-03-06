import { Component, OnInit } from '@angular/core';
import { DigimonService } from '../../../services/digimon.service';
import { Digimon } from '../../../interfaces';

@Component({
  selector: 'app-digi-home',
  templateUrl: './digi-home.component.html',
  styleUrls: ['./digi-home.component.css']
})
export class DigiHomeComponent implements OnInit {

  constructor(private digiServicio: DigimonService) { }

  digimones :Digimon[];
  listaDigimones :Digimon[];
  niveles :Array<string>;
  nivelSeleccionado:string;
  
  ngOnInit() {
    this.niveles = [];
    this.digiServicio.obtenerDigimons().subscribe(
      (data: Digimon[])=>{
        this.digimones=data;
        this.listaDigimones=data;
        this.digimones.forEach(digimon => {
          this.niveles.push(digimon.level);
        });
        this.niveles = this.niveles.filter((v, i, a) => a.indexOf(v) === i);
    },
      (error: any) => {
        alert(error.message);
    }
    ); 
  }

  filtrar() {
    let search:string = (<HTMLInputElement>document.getElementById("search")).value;
    let ns:string = this.nivelSeleccionado;
    if (search == "" && ns && ns =="0"){
      this.digimones = this.listaDigimones;
    }
    else {
      this.digimones = this.listaDigimones.filter(function(a,v) {
        if (ns && ns != "0"){
          return (a.id == parseInt(search,10) || a.name.toLowerCase().includes(search.toLowerCase()) && a.level == ns);
        }
        else
          return a.id == parseInt(search,10) || a.name.toLowerCase().includes(search.toLowerCase());
      });
    }
  }

  seleccionaNivel(valor){
    this.nivelSeleccionado = valor;
    this.filtrar();
  }

}
