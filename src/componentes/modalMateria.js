import React, { useState } from "react";
import Materia from "../clases/materia";
import { Button, TextField, Modal, MenuItem, Grid } from "@mui/material";
// import { docentes, semestres, carreras } from "../App";

const ModalMateria = ({
  open,
  handleClose,
  addMateria,
  docentes,
  semestres,
  carreras,
}) => {
  const [codigoMateria, setCodigoMateria] = useState("");
  const [nombreMateria, setNombreMateria] = useState("");
  const [semestre, setSemestre] = useState("");
  const [carrera, setCarrera] = useState("");
  const [docente, setDocente] = useState("");

  const handleCodigoMateriaChange = (event) => {
    setCodigoMateria(event.target.value);
  };

  const handleNombreMateriaChange = (event) => {
    setNombreMateria(event.target.value);
  };

  const handleSemestreChange = (event) => {
    setSemestre(event.target.value);
  };

  const handleCarreraChange = (event) => {
    setCarrera(event.target.value);
  };

  const handleDocenteChange = (event) => {
    setDocente(event.target.value);
  };

  const handleAccept = function () {
    const materia = new Materia(
      codigoMateria,
      nombreMateria,
      semestre,
      carrera,
      docente
    );
    addMateria(materia);

    handleClose();
  };

  return (
    <Modal open={open} onClose={handleClose} className="modal-form">
      <div className="modal-container">
        <div className="modal-content">
          <h2>Registrar materia</h2>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Codigo de materia"
                id="codigoMateria"
                variant="outlined"
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
                autoComplete="off"
                value={codigoMateria}
                onChange={handleCodigoMateriaChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Nombre de materia"
                id="nombreMateria"
                variant="outlined"
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
                autoComplete="off"
                value={nombreMateria}
                onChange={handleNombreMateriaChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Semestre"
                id="semestre"
                select
                variant="outlined"
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
                value={semestre}
                onChange={handleSemestreChange}
              >
                {semestres.map((semestre) => (
                  <MenuItem
                    key={semestre._codigoSemestre}
                    value={semestre._numeroSemestre}
                  >
                    {semestre._numeroSemestre}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Carrera"
                id="carrera"
                select
                variant="outlined"
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
                value={carrera}
                onChange={handleCarreraChange}
              >
                {carreras.map((carrera) => (
                  <MenuItem
                    key={carrera._codigoCarrera}
                    value={carrera._nombreCarrera}
                  >
                    {carrera._nombreCarrera}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Docente"
                id="docente"
                select
                variant="outlined"
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
                value={docente}
                onChange={handleDocenteChange}
              >
                {docentes.map((docente) => (
                  <MenuItem
                    key={docente._codigoDocente}
                    value={docente._codigoDocente}
                  >
                    {docente._primerNombre} {docente._primerApellido}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={6}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleAccept}
              >
                Aceptar
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button variant="contained" onClick={handleClose}>
                Cancelar
              </Button>
            </Grid>
          </Grid>
        </div>
      </div>
    </Modal>
  );
};

export default ModalMateria;
