import React, { useState } from "react";
import { Button } from "@mui/material";
import ModalSemestre from "./componentes/modalSemestre";
import ModalMateria from "./componentes/modalMateria";
import ModalCarrera from "./componentes/modalCarrera";
import ModalDocente from "./componentes/modalDocente";

import "./App.css";

let semestres = [
  {
    _codigoSemestre: "1-SIS",
    _numeroSemestre: "Primero",
    _cantidadMaterias: "6",
    _carrera: "ciencias",
  },
];
let carreras = [
  {
    _codigoCarrera: "C1",
    _nombreCarrera: "Ingeniería de Software",
    _cantidadSemestres: 10,
  },
  {
    _codigoCarrera: "C2",
    _nombreCarrera: "Arquitectura",
    _cantidadSemestres: 8,
  },
];

let materias = [
  {
    _codigoMateria: "M1",
    _nombreMateria: "Programación I",
    _semestre: "Primero",
    _carrera: "Ingeniería de Software",
    _docente: "Fabio Camacho",
  },
  {
    _codigoMateria: "M2",
    _nombreMateria: "Base de Datos",
    _semestre: "Segundo",
    _carrera: "Ingeniería de Software",
    _docente: "Pepe Fermin",
  },
];
let docentes = [
  {
    _codigoDocente: "1",
    _primerNombre: "Fabio",
    _segundoNombre: "",
    _primerApellido: "Camacho",
    _segundoApellido: "Encinas",
    _genero: "male",
    _fechaNacimiento: "2023-06-05T04:00:00.000Z",
    _profesion: "Ingenieria",
    _tipoGrado: ["Licenciatura", "Diplomado"],
  },
  {
    _codigoDocente: "2",
    _primerNombre: "Pepe",
    _segundoNombre: "",
    _primerApellido: "Fermin",
    _segundoApellido: "Gutierrez",
    _genero: "male",
    _fechaNacimiento: "2013-06-04T04:00:00.000Z",
    _profesion: "Ingenieria",
    _tipoGrado: ["Licenciatura", "Diplomado", "Maestría"],
  },
];

function App() {
  const [openModalSemestre, setOpenModalSemestre] = useState(false);
  const [openModalMateria, setOpenModalMateria] = useState(false);
  const [openModalCarrera, setOpenModalCarrera] = useState(false);
  const [openModalDocente, setOpenModalDocente] = useState(false);

  const handleOpenModalSemestre = () => {
    setOpenModalSemestre(true);
  };

  const handleCloseModalSemestre = () => {
    setOpenModalSemestre(false);
  };

  const handleOpenModalMateria = () => {
    setOpenModalMateria(true);
  };

  const handleCloseModalMateria = () => {
    setOpenModalMateria(false);
  };

  const handleOpenModalCarrera = () => {
    setOpenModalCarrera(true);
  };

  const handleCloseModalCarrera = () => {
    setOpenModalCarrera(false);
  };

  const handleOpenModalDocente = () => {
    setOpenModalDocente(true);
  };

  const handleCloseModalDocente = () => {
    setOpenModalDocente(false);
  };

  const addSemestre = (semestre) => {
    console.log(semestres);
    semestres.push(semestre);
  };

  const addMateria = function (materia) {
    console.log(materias);
    materias.push(materia);
  };

  const addCarrera = function (carrera) {
    carreras.push(carrera);
    console.log(carreras);
  };

  const addDocente = function (docente) {
    docentes.push(docente);
    console.log(docentes);
  };

  // const handleAcceptMateria = (materia) => {
  //   materias.push(materia);
  //   console.log(materias);
  //   handleCloseModalMateria();
  // };

  return (
    <div className="App">
      <header className="App-header">
        <Button variant="contained" onClick={handleOpenModalSemestre}>
          Registrar Semestre
        </Button>
        <ModalSemestre
          open={openModalSemestre}
          handleClose={handleCloseModalSemestre}
          addSemestre={addSemestre}
        />

        <Button variant="contained" onClick={handleOpenModalMateria}>
          Registrar Materia
        </Button>
        <ModalMateria
          open={openModalMateria}
          handleClose={handleCloseModalMateria}
          addMateria={addMateria}
          docentes={docentes} // Agrega esta línea
          semestres={semestres}
          carreras={carreras}
        />

        <Button variant="contained" onClick={handleOpenModalCarrera}>
          Registrar Carrera
        </Button>
        <ModalCarrera
          open={openModalCarrera}
          handleClose={handleCloseModalCarrera}
          addCarrera={addCarrera}
        />

        <Button variant="contained" onClick={handleOpenModalDocente}>
          Registrar Docente
        </Button>
        <ModalDocente
          open={openModalDocente}
          handleClose={handleCloseModalDocente}
          addDocente={addDocente}
        />

        {/* Resto del código... */}
      </header>
    </div>
  );
}

export default App;
