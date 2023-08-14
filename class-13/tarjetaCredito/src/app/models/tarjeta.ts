export class TarjetaCredito{
    id?: string;
    titular: string;
    numeroDeTarjeta: string;
    fechaExpiracion: Date;
    cvv: number;
    fechaCreacion: Date;
    fechaActualizacion: Date;

    constructor(titular: string, numeroDeTarjeta: string, cvv: number){
        this.titular = titular;
        this.numeroDeTarjeta = numeroDeTarjeta;
        this.fechaExpiracion = new Date();
        this.cvv = cvv;
        this.fechaCreacion = new Date();
        this.fechaActualizacion = new Date();

    }
}


