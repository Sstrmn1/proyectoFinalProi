import React, { useState } from "react";
import {
  Button,
  Checkbox,
  RadioGroup,
  TextField,
  Table,
  Tooltip,
  Modal,
  Alert,
  DatePicker,
  TimePicker,
  Snackbar,
  MenuItem,
} from "@mui/material";
import ModalSemestre from "./componentes/modalSemestre";
import ModalMateria from "./componentes/modalMateria";
import ModalCarrera from "./componentes/modalCarrera";
import ModalDocente from "./componentes/modalDocente";
import Carrera from "./clases/carrera";
import Docente from "./clases/docente";
import Materia from "./clases/materia";
import Semestre from "./clases/semestre";

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
    console.log(semestres);
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

  const handleOpenModalCarrera = function () {
    setOpenModalCarrera(true);
  };

  const handleCloseModalCarrera = function () {
    setOpenModalCarrera(false);
  };

  const handleOpenModalDocente = function () {
    setOpenModalDocente(true);
  };

  const handleCloseModalDocente = function () {
    setOpenModalDocente(false);
  };

  const addSemestre = (semestre) => {
    semestres.push(semestre);
  };

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
        <ModalMateria open={openModalMateria} handleClose={handleCloseModalMateria} />

        <Button variant="contained" onClick={handleOpenModalCarrera}>
          Registrar Carrera
        </Button>
        <ModalCarrera open={openModalCarrera} handleClose={handleCloseModalCarrera} />

        <Button variant="contained" onClick={handleOpenModalDocente}>
          Registrar Docente
        </Button>
        <ModalDocente open={openModalDocente} handleClose={handleCloseModalDocente} />

        {/* Resto del código... */}
      </header>
    </div>
  );
}

export default App;
