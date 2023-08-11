import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = "Ezequiel Leandro";
  textPlaceholder = "Escriba su texto aqui..";
  deshabilitado = true;
  img = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png";
  
  constructor(){
    setInterval(()=>this.deshabilitado=false, 3000)
  }
  
  getSuma(n1: number, n2: number){
    return n1 + n2;
  }
}

// Con setInterval(()=>this.deshabilitado=false, 3000), hacemos
// que la variable deshabilitado comience en true, es decir, que 
// el input se encuentre deshabilitado para escribir 
// y a los 3 segundos se encuentre habilitado para escribir





