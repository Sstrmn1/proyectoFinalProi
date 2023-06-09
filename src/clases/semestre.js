export default class Semestre {
  constructor(codigoSemestre, numeroSemestre, cantidadMaterias, carrera) {
    this._codigoSemestre = codigoSemestre;
    this._numeroSemestre = numeroSemestre;
    this._cantidadMaterias = cantidadMaterias;
    this._carrera = carrera;
  }

  set codigoSemestre(codigo) {
    this._codigoSemestre = codigo;
  }

  set numeroSemestre(numero) {
    this._numeroSemestre = numero;
  }

  set cantidadMaterias(cantidad) {
    this._cantidadMaterias = cantidad;
  }

  set carrera(carrera) {
    this._carrera = carrera;
  }
}
