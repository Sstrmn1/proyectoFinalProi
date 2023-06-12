import React, { useState } from "react";
import Semestre from "../clases/semestre";

import { Button, TextField, MenuItem, Modal, Grid } from "@mui/material";

const ModalSemestre = ({ open, handleClose, addSemestre }) => {
  const [codigoSemestre, setCodigoSemestre] = useState("");
  const [numeroSemestre, setNumeroSemestre] = useState("");
  const [cantidadMaterias, setCantidadMaterias] = useState("");
  const [carrera, setCarrera] = useState("");

  const handleCodigoSemestreChange = (event) => {
    setCodigoSemestre(event.target.value);
  };

  const handleNumeroSemestreChange = (event) => {
    setNumeroSemestre(event.target.value);
  };

  const handleCantidadMateriasChange = (event) => {
    setCantidadMaterias(event.target.value);
  };

  const handleCarreraChange = (event) => {
    setCarrera(event.target.value);
  };

  const handleAccept = () => {
    const semestre = new Semestre(
      codigoSemestre,
      numeroSemestre,
      cantidadMaterias,
      carrera
    );
    addSemestre(semestre);

    // Aquí puedes realizar cualquier acción adicional que necesites

    handleClose(); // Cerrar el modal después de aceptar
  };

  return (
    <Modal open={open} onClose={handleClose} className="modal-form">
      <div className="modal-container">
        <div className="modal-content">
          <h2>Registro de Semestre</h2>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                label="Codigo de Semestre"
                id="codigoSemestre"
                variant="outlined"
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
                autoComplete="off"
                value={codigoSemestre}
                onChange={handleCodigoSemestreChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Numero de semestre"
                id="numeroSemestre"
                variant="outlined"
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
                autoComplete="off"
                value={numeroSemestre}
                onChange={handleNumeroSemestreChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Cantidad de materias"
                id="cantidadMaterias"
                variant="outlined"
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
                autoComplete="off"
                value={cantidadMaterias}
                onChange={handleCantidadMateriasChange}
              />
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
                <MenuItem value="ingenieria">Ingeniería</MenuItem>
                <MenuItem value="ciencias">Ciencias</MenuItem>
                <MenuItem value="arte">Arte</MenuItem>
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
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div className="modal-buttons"></div>
        </div>
      </div>
    </Modal>
  );
};

export default ModalSemestre;
