export default class Docente {
  constructor(
    codigoDocente,
    primerNombre,
    segundoNombre,
    primerApellido,
    segundoApellido,
    genero,
    fechaNacimiento,
    profesion,
    tipoGrado
  ) {
    this._codigoDocente = codigoDocente;
    this._primerNombre = primerNombre;
    this._segundoNombre = segundoNombre;
    this._primerApellido = primerApellido;
    this._segundoApellido = segundoApellido;
    this._genero = genero;
    this._fechaNacimiento = fechaNacimiento;
    this._profesion = profesion;
    this._tipoGrado = tipoGrado;
  }

  set codigoDocente(codigo) {
    this._codigoDocente = codigo;
  }

  set primerNombre(nombre) {
    this._primerNombre = nombre;
  }

  set segundoNombre(nombre) {
    this._segundoNombre = nombre;
  }

  set primerApellido(apellido) {
    this._primerApellido = apellido;
  }

  set segundoApellido(apellido) {
    this._segundoApellido = apellido;
  }

  set genero(genero) {
    this._genero = genero;
  }

  set fechaNacimiento(fecha) {
    this._fechaNacimiento = fecha;
  }

  set profesion(profesion) {
    this._profesion = profesion;
  }

  set tipoGrado(grado) {
    this._tipoGrado = grado;
  }
}
