import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-news',
  templateUrl: './list-news.component.html',
  styleUrls: ['./list-news.component.css']
})
export class ListNewsComponent implements OnInit {

  @Input() listadoNoticias: any;

  constructor(){}

  ngOnInit(): void {
    
  }

}
