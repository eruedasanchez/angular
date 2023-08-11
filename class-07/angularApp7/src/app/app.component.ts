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
  tamaño = "20%";

  texto: string = "Este es un ejemplo de event binding";
  textoDos: string = "";
  
  constructor(){
    setInterval(()=>this.deshabilitado=false, 3000)
  }
  
  getSuma(n1: number, n2: number){
    return n1 + n2;
  }

  cambiarTexto():void{
    this.texto = "El texto cambio";
  }
}