import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import ModalSemestre from "./componentes/modalSemestre";
import ModalMateria from "./componentes/modalMateria";
import ModalCarrera from "./componentes/modalCarrera";
import ModalDocente from "./componentes/modalDocente";
import TablaCarrera from "./componentes/tablaCarrera";
import TablaMateria from "./componentes/tablaMateria";
import TablaDocente from "./componentes/tablaDocente";
import TablaSemestre from "./componentes/tablaSemestre";
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

  const handleMostrarSemestres = () => {
    handleOpenModalSemestre();
  };

  const handleMostrarMaterias = () => {
    handleOpenModalMateria();
  };

  const handleMostrarCarreras = () => {
    handleOpenModalCarrera();
  };

  const handleMostrarDocentes = () => {
    handleOpenModalDocente();
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
        <ModalMateria
          open={openModalMateria}
          handleClose={handleCloseModalMateria}
          addMateria={addMateria}
          docentes={docentes}
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

        <Button variant="contained" onClick={handleMostrarSemestres}>
          Mostrar Semestres
        </Button>

        <Button variant="contained" onClick={handleMostrarMaterias}>
          Mostrar Materias
        </Button>

        <Button variant="contained" onClick={handleMostrarCarreras}>
          Mostrar Carreras
        </Button>

        <Button variant="contained" onClick={handleMostrarDocentes}>
          Mostrar Docentes
        </Button>

        <Dialog open={openModalSemestre} onClose={handleCloseModalSemestre}>
          <DialogContent>
            <TablaSemestre semestres={semestres} />
          </DialogContent>
        </Dialog>

        <Dialog open={openModalMateria} onClose={handleCloseModalMateria}>
          <DialogContent>
            <TablaMateria materias={materias} />
          </DialogContent>
        </Dialog>

        <Dialog open={openModalCarrera} onClose={handleCloseModalCarrera}>
          <DialogContent>
            <TablaCarrera carreras={carreras} />
          </DialogContent>
        </Dialog>

        <Dialog open={openModalDocente} onClose={handleCloseModalDocente}>
          <DialogContent>
            <TablaDocente docentes={docentes} />
          </DialogContent>
        </Dialog>
      </header>
    </div>
  );
}

export default App;
