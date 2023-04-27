export default class Cuenta {
    constructor(titular, saldo) {
        this.titular = titular;
        this.saldo = saldo;
    }

    get saldoActual() {
        return this.saldo;
    }

    retirar(cantidad) {
        let mensaje = ""
        if (cantidad > this.saldo) {
            mensaje = "no tiene fondos";
            return mensaje
        } else {
            this.saldo -= cantidad;
            mensaje = "Retiro exitoso: Saldo es " + this.saldo
            return mensaje
        }
    }

    depositar(cantidad) {
        this.saldo += cantidad;
    }


}