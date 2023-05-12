export default class Automovil {
    constructor(motor, placa, modelo, chasis, color, cilindrada, tipo) {
        this._motor = motor;
        this._placa = placa;
        this._modelo = modelo;
        this._chasis = chasis;
        this._color = color;
        this._cilindrada = cilindrada;
        this.velocidad = 0;
        this._tipo = tipo;
    }
    // Metodo estatico
    static descripcion() {
        return 'Esta es la clase Automovil. \nPresione "actualizar auto" para actualizar datos del automovil. \nPresione "Acelerar" o "Desacelerar" para manejar el vehiculo.\nLos botones de acelerar muestran la velocidad actual por consola.\nEl modelo del automovil es el año, si es modelo 2023 o 2022 es ultimo modelo';
    }

    // Metodos set

    set motor(motor) {
        this._motor = motor;
    }

    set placa(placa) {
        this._placa = placa;
    }

    set modelo(modelo) {
        this._modelo = modelo;
    }

    set chasis(chasis) {
        this._chasis = chasis;
    }

    set color(color) {
        this._color = color;
    }

    set cilindrada(cilindrada) {
        this._cilindrada = cilindrada;
    }

    set tipo(tipo) {
        this._tipo = tipo;
    }

    // Metodos Prototipo

    acelerar() {
        if (this.velocidad < 120) {
            this.velocidad += 20;
            console.log(`Velocidad actual: ${this.velocidad}`);
        } else {
            this.velocidad += 20;
            console.log(`Velocidad actual: ${this.velocidad}`);
            alert("¡Exceso de velocidad! Reduzca la velocidad inmediatamente.");
        }
    }

    desacelerar() {
        if (this.velocidad >= 20) {
            this.velocidad -= 20;
        } else {
            this.velocidad = 0;
        }
        console.log(`Velocidad actual: ${this.velocidad}`);
    }


    // Metodos get
    get mostrarPlaca() {
        return this._placa;
    }

    get mostrarTipo() {
        return this._tipo;
    }

    get validarModelo() {
        let ultimoModelo = '';
        if (this._modelo== '2022' || this._modelo == '2023') {
            ultimoModelo = 'Es último modelo';
        } else {
            ultimoModelo = 'No es último modelo';
        }
        return ultimoModelo;
    }
}



// Motor:  motor
// Placa:  placa
// Modelo:  modelo
// Chasis:  chasis
// Color:  color
// Cilindrada:  cilindrada