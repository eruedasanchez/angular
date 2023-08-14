import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TarjetaCredito } from 'src/app/models/tarjeta';
import { TarjetaService } from 'src/app/services/tarjeta.service';

@Component({
  selector: 'app-listar-tarjeta',
  templateUrl: './listar-tarjeta.component.html',
  styleUrls: ['./listar-tarjeta.component.css']
})
export class ListarTarjetaComponent implements OnInit {

  constructor(private _tarjetaService: TarjetaService, private toast: ToastrService){}

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

  eliminarTarjeta(id:any){
    // id pasa a ser de tipo any y no string porque puede ser undefined
    this._tarjetaService.eliminarTarjeta(id)
      .then(() => {
        this.toast.error("Tarjeta eliminada de la DB", "Registro eliminado");
      }, error => {
        this.toast.error("Opss, ocurrio un error", "Error");
        console.log(error)
      })
  }

  editarTarjeta(tarjeta:TarjetaCredito){
    this._tarjetaService.addTarjetaEdit(tarjeta);

  }

}
