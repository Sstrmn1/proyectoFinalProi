import React from "react";
import { Button, TextField, Modal, MenuItem } from "@mui/material";

const Modal2 = ({ open, handleClose }) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <div className="modal-container">
        <h2>Modal 2 de ejemplo</h2>
        <div>
          <label htmlFor="codigoMateria">Código de la materia</label>
          <TextField id="codigoMateria" variant="outlined" />
        </div>
        <div>
          <label htmlFor="nombreMateria">Nombre de la materia</label>
          <TextField id="nombreMateria" variant="outlined" />
        </div>
        <div>
          <label htmlFor="semestre">Semestre</label>
          <TextField id="semestre" select variant="outlined">
            <MenuItem value="1">1</MenuItem>
            <MenuItem value="2">2</MenuItem>
            <MenuItem value="3">3</MenuItem>
          </TextField>
        </div>
        <div>
          <label htmlFor="carrera">Carrera</label>
          <TextField id="carrera" select variant="outlined">
            <MenuItem value="ingenieria">Ingeniería</MenuItem>
            <MenuItem value="ciencias">Ciencias</MenuItem>
            <MenuItem value="arte">Arte</MenuItem>
          </TextField>
        </div>
        <div>
          <label htmlFor="docente">Docente</label>
          <TextField id="docente" select variant="outlined">
            <MenuItem value="docente1">Docente 1</MenuItem>
            <MenuItem value="docente2">Docente 2</MenuItem>
            <MenuItem value="docente3">Docente 3</MenuItem>
          </TextField>
        </div>
        <div className="modal-buttons">
          <Button variant="contained" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="contained" color="primary">
            Aceptar
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default Modal2;
