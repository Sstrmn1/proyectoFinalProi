import React, { useState } from "react";
import Materia from "../clases/materia";
import { Button, TextField, Modal, MenuItem } from "@mui/material";

const ModalMateria = ({ open, handleClose, addMateria }) => {
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
    <Modal open={open} onClose={handleClose}>
      <div className="modal-container">
        <h2>Registrar materia</h2>
        <div>
          <label htmlFor="codigoMateria">Código de la materia</label>
          <TextField
            id="codigoMateria"
            variant="outlined"
            value={codigoMateria}
            onChange={handleCodigoMateriaChange}
          />
        </div>
        <div>
          <label htmlFor="nombreMateria">Nombre de la materia</label>
          <TextField
            id="nombreMateria"
            variant="outlined"
            value={nombreMateria}
            onChange={handleNombreMateriaChange}
          />
        </div>
        <div>
          <label htmlFor="semestre">Semestre</label>
          <TextField
            id="semestre"
            select
            variant="outlined"
            value={semestre}
            onChange={handleSemestreChange}
          >
            <MenuItem value="1">1</MenuItem>
            <MenuItem value="2">2</MenuItem>
            <MenuItem value="3">3</MenuItem>
          </TextField>
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
        <div>
          <label htmlFor="docente">Docente</label>
          <TextField
            id="docente"
            select
            variant="outlined"
            value={docente}
            onChange={handleDocenteChange}
          >
            <MenuItem value="docente1">Docente 1</MenuItem>
            <MenuItem value="docente2">Docente 2</MenuItem>
            <MenuItem value="docente3">Docente 3</MenuItem>
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

export default ModalMateria;
