export default class Documentos {
  constructor(codDocumento, estado, codEstudiante, fecEntrega) {
    this.codDocumento = codDocumento;
    this.estado = estado;
    this.codEstudiante = codEstudiante;
    this.fecEntrega = fecEntrega;
  }

  set codDocumento(codDocumento) {
    this.codDocumento = codDocumento;
  }
  set estado(estado) {
    this.estado = estado;
  }
  set codEstudiante(codEstudiante) {
    this.codEstudiante = codEstudiante;
  }
  set fecEntrega(fecEntrega) {
    this.fecEntrega = fecEntrega;
  }
}
