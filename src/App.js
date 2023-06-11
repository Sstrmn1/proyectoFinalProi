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

        <Button variant="contained" onClick={handleOpenModalSemestre}>
          Mostrar Semestres
        </Button>

        <Button variant="contained" onClick={handleOpenModalMateria}>
          Mostrar Materias
        </Button>

        <Button variant="contained" onClick={handleOpenModalCarrera}>
          Mostrar Carreras
        </Button>

        <Button variant="contained" onClick={handleOpenModalDocente}>
          Mostrar Docentes
        </Button>

        <Dialog open={openModalSemestre} onClose={handleCloseModalSemestre}>
          <DialogContent>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Código Semestre</TableCell>
                    <TableCell>Número Semestre</TableCell>
                    <TableCell>Cantidad de Materias</TableCell>
                    <TableCell>Carrera</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {semestres.map((semestre) => (
                    <TableRow key={semestre._codigoSemestre}>
                      <TableCell>{semestre._codigoSemestre}</TableCell>
                      <TableCell>{semestre._numeroSemestre}</TableCell>
                      <TableCell>{semestre._cantidadMaterias}</TableCell>
                      <TableCell>{semestre._carrera}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </DialogContent>
        </Dialog>

        <Dialog open={openModalMateria} onClose={handleCloseModalMateria}>
          <DialogContent>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Código Materia</TableCell>
                    <TableCell>Nombre Materia</TableCell>
                    <TableCell>Semestre</TableCell>
                    <TableCell>Carrera</TableCell>
                    <TableCell>Docente</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {materias.map((materia) => (
                    <TableRow key={materia._codigoMateria}>
                      <TableCell>{materia._codigoMateria}</TableCell>
                      <TableCell>{materia._nombreMateria}</TableCell>
                      <TableCell>{materia._semestre}</TableCell>
                      <TableCell>{materia._carrera}</TableCell>
                      <TableCell>{materia._docente}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </DialogContent>
        </Dialog>

        <Dialog open={openModalCarrera} onClose={handleCloseModalCarrera}>
          <DialogContent>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Código Carrera</TableCell>
                    <TableCell>Nombre Carrera</TableCell>
                    <TableCell>Cantidad de Semestres</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {carreras.map((carrera) => (
                    <TableRow key={carrera._codigoCarrera}>
                      <TableCell>{carrera._codigoCarrera}</TableCell>
                      <TableCell>{carrera._nombreCarrera}</TableCell>
                      <TableCell>{carrera._cantidadSemestres}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </DialogContent>
        </Dialog>

        <Dialog open={openModalDocente} onClose={handleCloseModalDocente}>
          <DialogContent>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Código Docente</TableCell>
                    <TableCell>Primer Nombre</TableCell>
                    <TableCell>Segundo Nombre</TableCell>
                    <TableCell>Primer Apellido</TableCell>
                    <TableCell>Segundo Apellido</TableCell>
                    <TableCell>Género</TableCell>
                    <TableCell>Fecha de Nacimiento</TableCell>
                    <TableCell>Profesión</TableCell>
                    <TableCell>Tipo de Grado</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {docentes.map((docente) => (
                    <TableRow key={docente._codigoDocente}>
                      <TableCell>{docente._codigoDocente}</TableCell>
                      <TableCell>{docente._primerNombre}</TableCell>
                      <TableCell>{docente._segundoNombre}</TableCell>
                      <TableCell>{docente._primerApellido}</TableCell>
                      <TableCell>{docente._segundoApellido}</TableCell>
                      <TableCell>{docente._genero}</TableCell>
                      <TableCell>{docente._fechaNacimiento}</TableCell>
                      <TableCell>{docente._profesion}</TableCell>
                      <TableCell>{docente._tipoGrado.join(", ")}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </DialogContent>
        </Dialog>
      </header>
    </div>
  );
}

export default App;
