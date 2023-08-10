import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  public image2:string="https://i.postimg.cc/Px12C0wk/product-07b.jpg";
  public Titulo:string = "Curso de angular con Interpolacion";

  ngOnInit(): void {
    
  }

}
