import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { TarjetaCredito } from '../models/tarjeta';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TarjetaService {

  private tarjeta$ = new Subject<any>();

  constructor(private firebase: AngularFirestore) { }

  guardarTarjeta(tarjeta: TarjetaCredito): Promise<any> {
    return this.firebase.collection('tarjetas').add(tarjeta); // se crea la coleccion tarjetas y si ya existe, se agrega el dato tarjeta pero si no existe la crea
  }

  listarTarjetas(): Observable<any>{
    return this.firebase.collection("tarjetas").snapshotChanges();
  }

  eliminarTarjeta(id:string): Promise<any>{
    return this.firebase.collection("tarjetas", ref => ref.orderBy("fechaCreacion", "asc")).doc(id).delete();
    // ref => ref.orderBy("fechaCreacion", "asc") me permite ordenar ascendentemente por fecha de creacion a los datos
  }

  addTarjetaEdit(tarjeta:TarjetaCredito){
    this.tarjeta$.next(tarjeta); // capturamos toda la info de la tarjeta que queremos mostrar en el component crear_tarjeta
  }

  // retorno de la info de la tarjeta
  getTarjeta():Observable<TarjetaCredito>{
    return this.tarjeta$.asObservable(); // con asObservable() se accede al data
  }

  editarTarjeta(id:string, tarjeta:TarjetaCredito): Promise<any>{
    return this.firebase.collection("tarjetas").doc(id).update(tarjeta);
  }
}

// El metodo add() retorna una promise, por eso debemos retornar un dato de tipo Promise<any>
