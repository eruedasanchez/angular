import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class NewsService {

  constructor(private http: HttpClient){ }

  getNoticias(parametros: any): Observable<any>{
    const URL = 'https://newsapi.org/v2/top-headlines?country='+parametros.pais+'&category='+parametros.categoria+'&apiKey=cb51cb65a84b4d7598cb11b6304fde98'; 
    return this.http.get(URL);
  }



}

// Como queremos que el parametro del pais y de la categoria sean dinamicos, ejecutamos cambiamos country=de por '+parametros.pais+' y 
// category=business por '+parametros.categoria+'
// Recordamos que los parametros se encuentran definidos en el metodo categoria y pais en form.components.ts

// Luego de agregar el metodo en el constructor, vamos a consumir el servicio en app.components.ts