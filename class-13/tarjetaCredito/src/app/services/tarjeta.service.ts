import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { TarjetaCredito } from '../models/tarjeta';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TarjetaService {

  constructor(private firebase: AngularFirestore) { }

  guardarTarjeta(tarjeta: TarjetaCredito): Promise<any> {
    return this.firebase.collection('tarjetas').add(tarjeta); // se crea la coleccion tarjetas y si ya existe, se agrega el dato tarjeta pero si no existe la crea
  }

  listarTarjetas(): Observable<any>{
    return this.firebase.collection("tarjetas").snapshotChanges();
  }
}

// El metodo add() retorna una promise, por eso debemos retornar un dato de tipo Promise<any>
