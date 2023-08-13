import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { NewsService } from './services/news.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'api-noticias';
  listaDeNoticias: any[] = [];
  loading: boolean = false;

  // consumimos el servicio
  constructor(private _api: NewsService){

  }

  buscarNoticias(parametro:any){
    this.loading = true;  //  mientras se carga todo el contenido, el spinner esta activo
    this.listaDeNoticias = [];

    setTimeout(() => {
      this._api.getNoticias(parametro).subscribe(result => {
        console.log(result);
        this.loading = false; // una vez que se cargo todo el contenido el spinner se desactiva 
        this.listaDeNoticias = result.articles;
      })
    }, 1000);
  }
}
