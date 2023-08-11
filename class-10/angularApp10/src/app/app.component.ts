import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listadoDeEstudiantes:any[] = [
    {nombre:"Gabriel Chavez", estado:"Promocionado"},
    {nombre:"Juan Chavez", estado:"Regular"},
    {nombre:"Ana Chavez", estado:"Regular"},
    {nombre:"MariaChavez", estado:"Recursante"}
  ];

  mostrar: boolean = true;

  mostrarOcultar(){
    this.mostrar = !this.mostrar;
  }
}

