import React, { useState } from "react";
import Carrera from "../clases/carrera";
import { Button, TextField, Modal, Grid } from "@mui/material";

const ModalCarrera = ({ open, handleClose, addCarrera }) => {
  const [codigoCarrera, setCodigoCarrera] = useState("");
  const [nombreCarrera, setNombreCarrera] = useState("");
  const [cantidadSemestre, setCantidadSemestre] = useState("");

  const handleCodigoCarreraChange = (event) => {
    setCodigoCarrera(event.target.value);
  };

  const handleNombreCarreraChange = (event) => {
    setNombreCarrera(event.target.value);
  };

  const handleCantidadSemestreChange = (event) => {
    setCantidadSemestre(event.target.value);
  };

  const handleAccept = () => {
    const carrera = new Carrera(codigoCarrera, nombreCarrera, cantidadSemestre);

    addCarrera(carrera);

    handleClose();
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <div className="modal-container">
        <div className="modal-content">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <h2>Registro de carrera</h2>
            </Grid>
            <Grid item xs={12}>
              <div>
                <label htmlFor="codigoCarrera">Código de carrera</label>
                <TextField
                  id="codigoCarrera"
                  variant="outlined"
                  value={codigoCarrera}
                  onChange={handleCodigoCarreraChange}
                />
              </div>
            </Grid>
            <Grid item xs={6}>
              <div>
                <label htmlFor="nombreCarrera">Nombre de carrera</label>
                <TextField
                  id="nombreCarrera"
                  variant="outlined"
                  value={nombreCarrera}
                  onChange={handleNombreCarreraChange}
                />
              </div>
            </Grid>
            <Grid item xs={6}>
              <div>
                <label htmlFor="cantidadSemestre">Cantidad de semestres</label>
                <TextField
                  id="cantidadSemestre"
                  variant="outlined"
                  value={cantidadSemestre}
                  onChange={handleCantidadSemestreChange}
                />
              </div>
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

export default ModalCarrera;
