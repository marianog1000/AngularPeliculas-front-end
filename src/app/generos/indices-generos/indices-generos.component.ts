import { Component, OnInit } from '@angular/core';
import { GenerosService } from '../generos.service';
import { generoDTO } from '../genero';
import { HttpResponse } from '@angular/common/http';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-indices-generos',
  templateUrl: './indices-generos.component.html',
  styleUrls: ['./indices-generos.component.css'],
})
export class IndicesGenerosComponent implements OnInit {
  constructor(private generosService: GenerosService) {}

  generos: generoDTO[];
  columnasAMostrar = ['id', 'nombre', 'acciones'];
  cantidadTotalRegistros;
  paginaActual = 1;
  cantidadRegistrosAMostrar = 10;

  ngOnInit(): void {
    this.cargarRegistros(this.paginaActual, this.cantidadRegistrosAMostrar);
  }

  cargarRegistros(pagina: number, cantidadElementosAMostrar) {
    this.generosService.obtenerTodos(pagina, cantidadElementosAMostrar).subscribe(
      (respuesta: HttpResponse<generoDTO[]>) => {
        this.generos = respuesta.body;
        this.cantidadTotalRegistros = respuesta.headers.get(
          'cantidadTotalRegistros'
        );
        console.log(this.cantidadTotalRegistros.toString() );
      },
      (error) => console.error(error)
    );
  }


  actualizarPaginacion(datos: PageEvent){
    this.paginaActual = datos.pageIndex + 1;
    this.cantidadRegistrosAMostrar = datos.pageSize;
    this.cargarRegistros(this.paginaActual, this.cantidadRegistrosAMostrar);
  }

  borrar(id: number){
    this.generosService.borrar(id)
      .subscribe(() => {
        this.cargarRegistros(this.paginaActual, this.cantidadRegistrosAMostrar);
      }, error => console.error(error));
  }
}
