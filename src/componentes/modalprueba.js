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
    resetFields();
  };

  const handleCancel = () => {
    handleClose();
    resetFields();
  };

  const resetFields = () => {
    setCodigoCarrera("");
    setNombreCarrera("");
    setCantidadSemestre("");
  };

  return (
    <Modal open={open} onClose={handleClose} className="modal-form">
      <div className="modal-container">
        <div className="modal-content">
          <h2>Registro de carrera</h2>
          <Grid container spacing={2}>
            {/* Resto del código del modal */}
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
              <Button variant="contained" onClick={handleCancel}>
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