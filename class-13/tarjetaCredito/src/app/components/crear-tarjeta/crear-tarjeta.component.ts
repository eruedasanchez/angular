import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TarjetaCredito } from 'src/app/models/tarjeta';

@Component({
  selector: 'app-crear-tarjeta',
  templateUrl: './crear-tarjeta.component.html',
  styleUrls: ['./crear-tarjeta.component.css']
})
export class CrearTarjetaComponent implements OnInit {

  forms:FormGroup; // importada de la clase ReactiveFormsModule en app.module.ts

  constructor(private fb:FormBuilder){
    this.forms = this.fb.group({
      // elegimos .group porque el componente tiene un grupo de datos que queremos agrupar
      titular:['', Validators.required],
      nroTarjeta:['', [Validators.required, Validators.minLength(16), Validators.maxLength(16)]],
      fechaExpiracion:['', [Validators.required, Validators.minLength(5), Validators.maxLength(5)]],
      cvv:['', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]]
    })
  }

  ngOnInit(): void {
    
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
    console.log(TARJETA);
  }

}
