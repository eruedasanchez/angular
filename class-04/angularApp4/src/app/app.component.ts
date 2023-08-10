import { Component, OnInit } from '@angular/core';

// Agregamos la interface Tarjeta para luego utilizarla como una clase 

interface Tarjeta{
  titulo:string;
  subtitulo:string;
  // nro?:number; // el ? denota que la propiedad es opcional (puede estar o no definida)
  image: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  title = 'appAngular3';
  public ArregloTarjetas: Tarjeta[] = [];

  ngOnInit(): void {
    // La funcion ngOnInit carga todo el contenido de la pagina html solo cuando se inicializa
    this.ArregloTarjetas = [
      {titulo:'Video 1', subtitulo: 'Subtitulo Video 1', image: 'https://i.postimg.cc/nrZTBT49/product-08b.jpg'}, 
      {titulo:'Video 2', subtitulo: 'Subtitulo Video 2', image: 'https://i.postimg.cc/g2BMQVW1/product-06b.jpg'},
      {titulo:'Video 3', subtitulo: 'Subtitulo Video 3', image: 'https://i.postimg.cc/jdc3QVkx/product-05.jpg'}
    ]
  }
}

// En este caso, declaramos la propiedad nro en el primer video pero no en el 2do y en el 3er video.