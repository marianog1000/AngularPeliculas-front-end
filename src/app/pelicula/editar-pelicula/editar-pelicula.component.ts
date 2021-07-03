import { Component, OnInit } from '@angular/core';
import { PeliculaCreacionDTO, PeliculaDTO } from 'src/app/peliculas/pelicula';

@Component({
  selector: 'app-editar-pelicula',
  templateUrl: './editar-pelicula.component.html',
  styleUrls: ['./editar-pelicula.component.css']
})
export class EditarPeliculaComponent implements OnInit {

  constructor() { }

  modelo: PeliculaDTO = {titulo: 'Spider-man', 'trailer': 'abc', enCines: true, 
    resumen: 'cualquier cosa', fechaLanzamiento: new Date(), 
    poster: 'https://m.media-amazon.com/images/M/MV5BZTE2YTY3YTMtM2FlMS00YmI3LTgyMWUtM2FhMWIyZWRmMDk5XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UY268_CR16,0,182,268_AL_.jpg'}

  ngOnInit(): void {
  }

  guardarCambios(pelicula: PeliculaCreacionDTO){
    console.log(pelicula);
  }

}
