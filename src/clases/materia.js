export default class Materia {
    constructor(codigoMateria, nombreMateria, semestre, carrera, docente) {
      this._codigoMateria = codigoMateria;
      this._nombreMateria = nombreMateria;
      this._semestre = semestre;
      this._carrera = carrera;
      this._docente = docente;
    }
  
    set codigoMateria(codigo) {
      this._codigoMateria = codigo;
    }
  
    set nombreMateria(nombre) {
      this._nombreMateria = nombre;
    }
  
    set semestre(semestre) {
      this._semestre = semestre;
    }
  
    set carrera(carrera) {
      this._carrera = carrera;
    }
  
    set docente(docente) {
      this._docente = docente;
    }
  }
  