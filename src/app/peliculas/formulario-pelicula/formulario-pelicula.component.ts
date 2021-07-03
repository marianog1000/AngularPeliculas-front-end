import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { EventEmitter, Input } from '@angular/core';
import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { actorPeliculaDTO } from 'src/app/actores/actores';
import { MultipleSelectorModel } from 'src/app/utilidades/selector-multiple/MultipleSelectorModel';
import { CrearPeliculaComponent } from '../crear-pelicula/crear-pelicula.component';
import { PeliculaCreacionDTO, PeliculaDTO } from '../pelicula';

@Component({
  selector: 'app-formulario-pelicula',
  templateUrl: './formulario-pelicula.component.html',
  styleUrls: ['./formulario-pelicula.component.css']
})
export class FormularioPeliculaComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  @Input()
  errores: string[] = [];

  form: FormGroup

  @Input()
  modelo: PeliculaDTO;

  @Output()
  OnSubmit: EventEmitter<PeliculaCreacionDTO> = new EventEmitter<PeliculaCreacionDTO>();

  @Input()
  generosNoSeleccionados: MultipleSelectorModel[];

  generosSeleccionados: MultipleSelectorModel[]=[];

  @Input()
  cinesNoSeleccionados: MultipleSelectorModel[];

  cinesSeleccionados: MultipleSelectorModel[]=[];

  @Input()
  actoresSeleccionados: actorPeliculaDTO[] = [];


  ngOnInit(): void {
    this.form = this.formBuilder.group({
      titulo: [
        '',{validators: [Validators.required]}
      ],
      resumen: '',
      enCines: false,
      trailer: '',
      fechaLanzamiento:'',
      poster:'',
      generoIds: '',
      cineIds: '',
      actores: ''
    });

    if (this.modelo !== undefined){
      this.form.patchValue(this.modelo);
    }
  }

  guardarCambios(){
    console.log(this.generosSeleccionados);
    const generoIds = this.generosSeleccionados.map(val =>  val.llave);
    this.form.get('generoIds').setValue(generoIds);
    
    const cinesIds = this.cinesSeleccionados.map(val =>  val.llave);
    this.form.get('cineIds').setValue(cinesIds);
    
    const actores = this.actoresSeleccionados.map(val => {
      return {id: val.id, personaje: val.personaje}
    });
    this.form.get('actores').setValue(actores);
    
    this.OnSubmit.emit(this.form.value);
  }

  archivoSeleccionado(archivo: File){
    this.form.get('poster').setValue(archivo);
  }

  changeMarkdown(texto){
    this.form.get('resumen').setValue(texto);
  }

}
