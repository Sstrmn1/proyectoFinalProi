export default class EstudiosDocente {
  constructor(codEstDocente, universidad, tipo, especialidad) {
    this.codEstDocente = codEstDocente;
    this.universidad = universidad;
    this.tipo = tipo;
    this.especialidad = especialidad;
  }
  set codEstDocente(codEstDocente) {
    this.codEstDocente = codEstDocente;
  }
  set universidad(universidad) {
    this.universidad = universidad;
  }
  set tipo(tipo) {
    this.tipo = tipo;
  }
  set especialidad(especialidad) {
    this.especialidad = especialidad;
  }
}
