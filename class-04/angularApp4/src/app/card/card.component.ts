import { Component, OnInit, Input } from '@angular/core';

// Los decoradores Input Y Output sirven para intercambiar datos entre componentes.
// Input se usa para recibir datos en un componente  
// Output se usa para enviar datos fuera de un componente 


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  public image?:string;
  public Titulo:string = "Curso de angular con Interpolacion";
  @Input() dataEntry:any;
  constructor(){

  }


  ngOnInit(): void {
    this.image = "https://i.postimg.cc/Px12C0wk/product-07b.jpg";
    
  }

}