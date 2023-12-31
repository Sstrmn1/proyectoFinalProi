import React, { useState } from "react";
import { Button, Dialog, DialogContent, Grid } from "@mui/material";
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
    _carrera: "Ing Sistemas",
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
    _genero: "masculino",
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
    _genero: "masculino",
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
  const [openTablaSemestre, setOpenTablaSemestre] = useState(false);
  const [openTablaMateria, setOpenTablaMateria] = useState(false);
  const [openTablaCarrera, setOpenTablaCarrera] = useState(false);
  const [openTablaDocente, setOpenTablaDocente] = useState(false);

  const handleOpenTablaSemestre = () => {
    setOpenTablaSemestre(true);
  };

  const handleCloseTablaSemestre = () => {
    setOpenTablaSemestre(false);
  };

  const handleOpenTablaMateria = () => {
    setOpenTablaMateria(true);
  };

  const handleCloseTablaMateria = () => {
    setOpenTablaMateria(false);
  };

  const handleOpenTablaCarrera = () => {
    setOpenTablaCarrera(true);
  };

  const handleCloseTablaCarrera = () => {
    setOpenTablaCarrera(false);
  };

  const handleOpenTablaDocente = () => {
    setOpenTablaDocente(true);
  };

  const handleCloseTablaDocente = () => {
    setOpenTablaDocente(false);
  };

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

  return (
    <div className="App">
      <header className="App-header">
        <ModalSemestre
          open={openModalSemestre}
          handleClose={handleCloseModalSemestre}
          addSemestre={addSemestre}
          carreras={carreras}
        />

        <ModalMateria
          open={openModalMateria}
          handleClose={handleCloseModalMateria}
          addMateria={addMateria}
          docentes={docentes}
          semestres={semestres}
          carreras={carreras}
        />

        <ModalCarrera
          open={openModalCarrera}
          handleClose={handleCloseModalCarrera}
          addCarrera={addCarrera}
        />

        <ModalDocente
          open={openModalDocente}
          handleClose={handleCloseModalDocente}
          addDocente={addDocente}
        />
        <Dialog open={openTablaSemestre} onClose={handleCloseTablaSemestre}>
          <DialogContent>
            <TablaSemestre semestres={semestres} />
          </DialogContent>
        </Dialog>

        <Dialog open={openTablaMateria} onClose={handleCloseTablaMateria}>
          <DialogContent>
            <TablaMateria materias={materias} />
          </DialogContent>
        </Dialog>

        <Dialog open={openTablaCarrera} onClose={handleCloseTablaCarrera}>
          <DialogContent>
            <TablaCarrera carreras={carreras} />
          </DialogContent>
        </Dialog>

        <Dialog open={openTablaDocente} onClose={handleCloseTablaDocente}>
          <DialogContent>
            <TablaDocente docentes={docentes} />
          </DialogContent>
        </Dialog>

        <Grid container spacing={2}  className="grid-container">
          <Grid item xs={12}>
            <h2>Formulario de registro academico</h2>
          </Grid>
          <Grid item xs={6}>
            <Button variant="contained" onClick={handleOpenModalMateria} className="boton-form">
              Registrar Materia
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button variant="contained" onClick={handleOpenTablaMateria} className="boton-form">
              Mostrar Materias
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button variant="contained" onClick={handleOpenModalSemestre} className="boton-form">
              Registrar Semestre
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button variant="contained" onClick={handleOpenTablaSemestre} className="boton-form">
              Mostrar Semestres
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button variant="contained" onClick={handleOpenModalDocente} className="boton-form">
              Registrar Docente
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button variant="contained" onClick={handleOpenTablaDocente} className="boton-form">
              Mostrar Docentes
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button variant="contained" onClick={handleOpenModalCarrera} className="boton-form">
              Registrar Carrera
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button variant="contained" onClick={handleOpenTablaCarrera} className="boton-form">
              Mostrar Carreras
            </Button>
          </Grid>
        </Grid>
      </header>
    </div>
  );
}

export default App;
