export default class Docente {
  constructor(
    codDocente,
    primerNombre,
    segundoNombre,
    primerApellido,
    segundoApellido,
    estudios
  ) {
    this._codDocente = codDocente;
    this._primerNombre = primerNombre;
    this._segundoNombre = segundoNombre;
    this._primerApellido = primerApellido;
    this._segundoApellido = segundoApellido;
    this._estudios = estudios;
  }

  set codDocente(codDocente) {
    this._codDocente = codDocente;
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
  set estudios(estudios) {
    this._estudios = estudios;
  }
}
