import { Component, OnInit } from '@angular/core';
import { TarjetaCredito } from 'src/app/models/tarjeta';
import { TarjetaService } from 'src/app/services/tarjeta.service';

@Component({
  selector: 'app-listar-tarjeta',
  templateUrl: './listar-tarjeta.component.html',
  styleUrls: ['./listar-tarjeta.component.css']
})
export class ListarTarjetaComponent implements OnInit {

  constructor(private _tarjetaService: TarjetaService){}

  listaTarjetas: TarjetaCredito[] = [];

  ngOnInit(): void {
    this.listarTarjetas(); // solo se ejecuta cuando se inicializa el componente
  }

  listarTarjetas(){
    this._tarjetaService.listarTarjetas().subscribe(res => {
      console.log(res);
      this.listaTarjetas = [];
      res.forEach((element: any) => {
        this.listaTarjetas.push({id: element.payload.doc.id, ...element.payload.doc.data()})
        // con element.payload.doc.id extraemos el id que contiene la info de la tarjeta
      });
      console.log(this.listaTarjetas)
    })
  }

}
