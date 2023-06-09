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
import Modal2 from "./componentes/modal2";
import Modal3 from "./componentes/modal3";
import Modal4 from "./componentes/modal4";
import Carrera from "./clases/carrera";
import Docente from "./clases/docente";
import Materia from "./clases/materia";
import Semestre from "./clases/semestre";

import "./App.css";

let semestres = [];

function App() {
  const [openModalSemestre, setOpenModalSemestre] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  const [openModal3, setOpenModal3] = useState(false);
  const [openModal4, setOpenModal4] = useState(false);

  let carreras = [];
  let materias = [];
  let docentes = [];

  const handleOpenModalSemestre = () => {
    console.log(semestres);
    setOpenModalSemestre(true);
  };

  const handleCloseModalSemestre = () => {
    setOpenModalSemestre(false);
  };

  const handleOpenModal2 = () => {
    setOpenModal2(true);
  };

  const handleCloseModal2 = () => {
    setOpenModal2(false);
  };

  const handleOpenModal3 = function () {
    setOpenModal3(true);
  };

  const handleCloseModal3 = function () {
    setOpenModal3(false);
  };

  const handleOpenModal4 = function () {
    setOpenModal4(true);
  };

  const handleCloseModal4 = function () {
    setOpenModal4(false);
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

        <Button variant="contained" onClick={handleOpenModal2}>
          Registrar Materia
        </Button>
        <Modal2 open={openModal2} handleClose={handleCloseModal2} />

        <Button variant="contained" onClick={handleOpenModal3}>
          Registrar Carrera
        </Button>
        <Modal3 open={openModal3} handleClose={handleCloseModal3} />

        <Button variant="contained" onClick={handleOpenModal4}>
          Registrar Docente
        </Button>
        <Modal4 open={openModal4} handleClose={handleCloseModal4} />

        {/* Resto del código... */}
      </header>
    </div>
  );
}

export default App;
