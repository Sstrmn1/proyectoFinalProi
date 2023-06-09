import React, { useState } from "react";
import Semestre from "../clases/semestre";

import { Button, TextField, MenuItem, Modal } from "@mui/material";

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
    <Modal open={open} onClose={handleClose}>
      <div className="modal-container">
        <h2>Registro de Semestre</h2>
        <div>
          <label htmlFor="codigoSemestre">Código semestre</label>
          <TextField
            id="codigoSemestre"
            variant="outlined"
            value={codigoSemestre}
            onChange={handleCodigoSemestreChange}
          />
        </div>
        <div>
          <label htmlFor="numeroSemestre">Número de semestre</label>
          <TextField
            id="numeroSemestre"
            variant="outlined"
            value={numeroSemestre}
            onChange={handleNumeroSemestreChange}
          />
        </div>
        <div>
          <label htmlFor="cantidadMaterias">Cantidad de materias</label>
          <TextField
            id="cantidadMaterias"
            variant="outlined"
            value={cantidadMaterias}
            onChange={handleCantidadMateriasChange}
          />
        </div>
        <div>
          <label htmlFor="carrera">Carrera</label>
          <TextField
            id="carrera"
            select
            variant="outlined"
            value={carrera}
            onChange={handleCarreraChange}
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
          <Button variant="contained" color="primary" onClick={handleAccept}>
            Aceptar
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default ModalSemestre;
