import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listados-peliculas',
  templateUrl: './listados-peliculas.component.html',
  styleUrls: ['./listados-peliculas.component.css']
})
export class ListadosPeliculasComponent implements OnInit {

  constructor() { }
  @Input()
  peliculas;

  ngOnInit(): void {
        
   
  }

  remover(indicePeliculas : number): void{
    this.peliculas.splice(indicePeliculas, 1);
  }

  //peliculas: { titulo: string; fechaLanzamiento: Date; precio: number; }[];  

}


