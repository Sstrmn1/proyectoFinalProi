import React, { useState } from "react";
import { Button } from "@mui/material";
import ModalSemestre from "./componentes/modalSemestre";
import ModalMateria from "./componentes/modalMateria";
import ModalCarrera from "./componentes/modalCarrera";
import ModalDocente from "./componentes/modalDocente";

import "./App.css";

let semestres = [];
let carreras = [];
let materias = [];
let docentes = [];

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
