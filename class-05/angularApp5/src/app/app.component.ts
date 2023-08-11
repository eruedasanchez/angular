import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = 'Ezequiel Leandro';

  // La funcion setInterval(()=>this.nombre='Marteeeeennn', 3000) mantiene
// por defecto this.nombre durante 3 segundos y una vez llegados los 3 segundos,
// cambia this.nombre por 'Marteeeeennn'
  
  constructor(){
    setInterval(()=>this.nombre='Marteeeeennn', 3000)
  }

  // Tambien podemos pasar el resultado de una funcion por parametro. Por ejemplo:

getSuma(n1: number, n2: number){
  return n1 + n2;
}
}





