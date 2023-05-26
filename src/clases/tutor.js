export default class Tutor {
  constructor(
    codTutor,
    primerNombre,
    segundoNombre,
    primerApellido,
    segundoApellido,
    codEstudiante,
    relacion
  ) {
    this._codTutor = codTutor;
    this._primerNombre = primerNombre;
    this._segundoNombre = segundoNombre;
    this._primerApellido = primerApellido;
    this._segundoApellido = segundoApellido;
    this.codEstudiante = codEstudiante;
    this.relacion = relacion;
  }

  set codTutor(codTutor) {
    this._codTutor = codTutor;
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
  set codEstudiante(codEstudiante) {
    this.codEstudiante = codEstudiante;
  }
  set relacion(relacion) {
    this.relacion = relacion;
  }
}
