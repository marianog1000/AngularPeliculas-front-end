import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { parsearErroresAPI } from 'src/app/utilidades/utilidades';
import { actorCreacionDTO } from '../actores';
import { ActoresService } from '../actores.service';

@Component({
  selector: 'app-crear-actor',
  templateUrl: './crear-actor.component.html',
  styleUrls: ['./crear-actor.component.css']
})
export class CrearActorComponent implements OnInit {

  constructor(private actorService: ActoresService, private router: Router) {
    
   }

  ngOnInit(): void {
  }

  errores = [];

  guardarCambios(actor: actorCreacionDTO){
    this.actorService.crear(actor)
      .subscribe(() => {
        this.router.navigate(['/actores']);
      }, errores => this.errores = parsearErroresAPI(errores))
  }

}
