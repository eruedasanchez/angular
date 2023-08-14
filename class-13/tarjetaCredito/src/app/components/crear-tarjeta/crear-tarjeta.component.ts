import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { TarjetaCredito } from 'src/app/models/tarjeta';
import { TarjetaService } from 'src/app/services/tarjeta.service';

@Component({
  selector: 'app-crear-tarjeta',
  templateUrl: './crear-tarjeta.component.html',
  styleUrls: ['./crear-tarjeta.component.css']
})
export class CrearTarjetaComponent implements OnInit {

  forms:FormGroup; // importada de la clase ReactiveFormsModule en app.module.ts
  loading: boolean = false;
  titulo:string = "Agregar Tarjeta";
  id:string | undefined; // mientras no pido los datos para editar es undefined. Luego, es string 

  constructor(private fb:FormBuilder, private _tarjetaService: TarjetaService, private toastr: ToastrService){
    this.forms = this.fb.group({
      // elegimos .group porque el componente tiene un grupo de datos que queremos agrupar
      titular:['', Validators.required],
      nroTarjeta:['', [Validators.required, Validators.minLength(16), Validators.maxLength(16)]],
      fechaExpiracion:['', [Validators.required, Validators.minLength(5), Validators.maxLength(5)]],
      cvv:['', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]]
    })
  }

  ngOnInit(): void {
    this._tarjetaService.getTarjeta().subscribe(res => {
      this.titulo = "Editar tarjeta";
      this.id = res.id
      this.forms.patchValue({
        titular: res.titular,
        nroTarjeta: res.numeroDeTarjeta,
        fechaExpiracion: res.fechaExpiracion,
        cvv: res.cvv
      })
      console.log(res);
    })
  }

  guardarTarjeta(){
    if(this.id === undefined){
      // crear tarjeta
      this.crearTarjeta();
    } else {
      // editando tarjeta
      this.editarTarjeta(this.id);
    }
  }

  crearTarjeta(){
    const TARJETA: TarjetaCredito = {
      titular: this.forms.value.titular,
      numeroDeTarjeta: this.forms.value.nroTarjeta,
      fechaExpiracion: this.forms.value.fechaExpiracion,
      cvv: this.forms.value.cvv,
      fechaCreacion: new Date(),
      fechaActualizacion: new Date()
    }
    // console.log(TARJETA);
    this.loading = true;
    this._tarjetaService.guardarTarjeta(TARJETA)
      .then(() => {
        this.loading = false;
        this.toastr.success("Tarjeta registrada con exito", "Tarjeta registrada");
        this.forms.reset();
      }, error => {
        this.loading = false;
        this.toastr.error("Ocurrio un error", "Error");
        console.log(error);
      })
  }

  editarTarjeta(id:string){
    const TARJETA: any = {
      titular: this.forms.value.titular,
      numeroDeTarjeta: this.forms.value.nroTarjeta,
      fechaExpiracion: this.forms.value.fechaExpiracion,
      cvv: this.forms.value.cvv,
      fechaActualizacion: new Date()
    }

    this.loading = true;
    this._tarjetaService.editarTarjeta(id, TARJETA)
      .then(() => {
        this.loading = false;
        this.toastr.info("El registro fue actualizado con exito", "Registro actualizado")
        this.forms.reset()
        this.titulo = "Agregar Tarjeta"
        this.id = undefined;
      }, error => { this.toastr.error("Error en la actualizacion", "Error")})
  }

}
