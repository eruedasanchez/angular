import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/models/tareas';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})

export class TareasComponent implements OnInit {

  // Luego de definir la clase Tarea en tareas.ts, vamos a definir 
  // una lista de tareas
  listaTareas: Tarea[] = [];
  nombreTarea: string = "";

  constructor(){ }

  ngOnInit(): void { }

  agregarTarea(){
    const tarea:Tarea = {
      nombre: this.nombreTarea,
      estado: false
    }

    // Agrego la tarea a la lista de tareas
    this.listaTareas.push(tarea);

    // una vez que se agrego la tarea a la lista, se resetea el nombre de la tarea a vacio
    this.nombreTarea="";
  }

  eliminar(i:number){
    this.listaTareas.splice(i,1);
  }

  actualizarTarea(tarea:Tarea, i:number){
    this.listaTareas[i].estado = !tarea.estado;
  }

}
