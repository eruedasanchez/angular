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

  // consumimos el servicio
  constructor(private _api: NewsService){

  }

  buscarNoticias(parametro:any){
    console.log("Soy el padre");
    console.log(parametro);
    this._api.getNoticias(parametro).subscribe(result => {
      console.log(result)
    })

  }
}
