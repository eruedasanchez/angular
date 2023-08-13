import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Output() parametrosSeleccionados = new EventEmitter<any>();
  categoriaSeleccionada = "general";
  paisSeleccionado = "ar";

  categorias: any[] = [
    {value:"general", nombre:"General"},
    {value:"business", nombre:"Negocios"},
    {value:"entertaiment", nombre:"Entretenimientos"},
    {value:"health", nombre:"Salud"},
    {value:"science", nombre:"Ciencia"},
    {value:"sports", nombre:"Deportes"},
    {value:"technology", nombre:"Tecnologia"}
  ]

  paises: any[] = [
    {value:"ar", nombre:"Argentina"},
    {value:"br", nombre:"Brazil"},
    {value:"fr", nombre:"Francia"},
    {value:"hu", nombre:"Hungria"},
    {value:"mx", nombre:"Mexico"},
    {value:"gb", nombre:"Reino Unido"}
  ]

  constructor(){

  }

  ngOnInit(): void {
    
  }

  buscarNoticia(){
    // console.log(this.categoriaSeleccionada);
    // console.log(this.paisSeleccionado);
    const PARAMETROS = {
      categoria: this.categoriaSeleccionada,
      pais: this.paisSeleccionado
    }

    this.parametrosSeleccionados.emit(PARAMETROS); // se pasa la informacion a donde uno quiera
    

  }

}
