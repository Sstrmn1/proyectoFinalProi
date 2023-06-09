import React from "react";
import {
  Button,
  TextField,
  MenuItem,
  Modal,
} from "@mui/material";

const ModalSemestre = ({ open, handleClose }) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <div className="modal-container">
        <h2>Registro de Semestre</h2>
        <div>
          <label htmlFor="codigoSemestre">Código semestre</label>
          <TextField id="codigoSemestre" variant="outlined" />
        </div>
        <div>
          <label htmlFor="numeroSemestre">Número de semestre</label>
          <TextField id="numeroSemestre" variant="outlined" />
        </div>
        <div>
          <label htmlFor="cantidadMaterias">Cantidad de materias</label>
          <TextField id="cantidadMaterias" variant="outlined" />
        </div>
        <div>
          <label htmlFor="carrera">Carrera</label>
          <TextField
            id="carrera"
            select
            variant="outlined"
          >
            <MenuItem value="ingenieria">Ingeniería</MenuItem>
            <MenuItem value="ciencias">Ciencias</MenuItem>
            <MenuItem value="arte">Arte</MenuItem>
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

export default ModalSemestre;
