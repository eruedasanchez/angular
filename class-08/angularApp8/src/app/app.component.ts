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
}

// Ahora, el objetivo es imprimir el listado dentro de app.component.html.
// Esto lo logramos gracias a la directiva ngFor