import React from "react";
import { Button, TextField, Modal } from "@mui/material";

const ModalCarrera = function ({ open, handleClose }) {
  return (
    <Modal open={open} onClose={handleClose}>
      <div className="modal-container">
        <h2>Registro de carrera</h2>
        <div>
          <label htmlFor="codigoCarrera">Codigo de carrera</label>
          <TextField id="codigoCarrera" variant="outlined" />
        </div>
        <div>
          <label htmlFor="nombreCarrera">Nombre de carrera</label>
          <TextField id="nombreMateria" variant="outlined" />
        </div>
        <div>
          <label htmlFor="cantidadSemestre">Cantidad de semestres</label>
          <TextField id="cantidadSemestre" variant="outlined" />
        </div>
        <Button variant="contained" color="primary">
          Aceptar
        </Button>
        <Button variant="contained" onClick={handleClose}>
          Cancelar
        </Button>
      </div>
    </Modal>
  );
};

export default ModalCarrera;
