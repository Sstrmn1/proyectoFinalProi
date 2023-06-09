export default class Carrera {
    constructor(codigoCarrera, nombreCarrera, cantidadSemestres) {
      this._codigoCarrera = codigoCarrera;
      this._nombreCarrera = nombreCarrera;
      this._cantidadSemestres = cantidadSemestres;
    }
  
    set codigoCarrera(codigo) {
      this._codigoCarrera = codigo;
    }
  
    set nombreCarrera(nombre) {
      this._nombreCarrera = nombre;
    }
  
    set cantidadSemestres(cantidad) {
      this._cantidadSemestres = cantidad;
    }
  }