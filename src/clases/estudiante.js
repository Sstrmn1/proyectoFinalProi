export default class Estudiante {
  constructor(
    codEstudiante,
    primerNombre,
    segundoNombre,
    primerApellido,
    segundoApellido,
    fecNacimiento,
    genero
  ) {
    this._codEstudiante = codEstudiante;
    this._primerNombre = primerNombre;
    this._segundoNombre = segundoNombre;
    this._primerApellido = primerApellido;
    this._segundoApellido = segundoApellido;

    this.fecNacimiento = fecNacimiento;
    this.genero = genero;
  }

  set codEstudiante(codEstudiante) {
    this._codEstudiante = codEstudiante;
  }

  set primerNombre(primerNombre) {
    this._primerNombre = primerNombre;
  }
  set segundoNombre(segundoNombre) {
    this._segundoNombre = segundoNombre;
  }
  set primerApellido(primerApellido) {
    this._primerApellido = primerApellido;
  }
  set segundoApellido(segundoApellido) {
    this._segundoApellido = segundoApellido;
  }
  set fecNacimiento(fecNacimiento) {
    this.fecNacimiento = fecNacimiento;
  }

  set genero(genero) {
    this.genero = genero;
  }
}
