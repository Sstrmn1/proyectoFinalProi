import React, { useState } from "react";
import {
  Modal,
  TextField,
  RadioGroup,
  Checkbox,
  Select,
  Button,
  Grid,
  FormGroup,
  FormControlLabel,
  Radio,
  MenuItem,
} from "@mui/material";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from 'dayjs';


import Docente from "../clases/docente";

const ModalDocente = ({ open, handleClose, addDocente }) => {
  const [codigoDocente, setCodigoDocente] = useState("");
  const [primerNombre, setPrimerNombre] = useState("");
  const [segundoNombre, setSegundoNombre] = useState("");
  const [primerApellido, setPrimerApellido] = useState("");
  const [segundoApellido, setSegundoApellido] = useState("");
  const [genero, setGenero] = useState("femenino");
  const [fechaNacimiento, setFechaNacimiento] = useState("");
  const [profesion, setProfesion] = useState("");
  const [licenciatura, setLicenciatura] = useState(false);
  const [diplomado, setDiplomado] = useState(false);
  const [maestria, setMaestria] = useState(false);
  const [phd, setPhd] = useState(false);

  const handleCodigoDocenteChange = (event) => {
    setCodigoDocente(event.target.value);
  };

  const handlePrimerNombreChange = (event) => {
    setPrimerNombre(event.target.value);
  };

  const handleSegundoNombreChange = (event) => {
    setSegundoNombre(event.target.value);
  };

  const handlePrimerApellidoChange = (event) => {
    setPrimerApellido(event.target.value);
  };

  const handleSegundoApellidoChange = (event) => {
    setSegundoApellido(event.target.value);
  };

  const handleGeneroChange = (event) => {
    setGenero(event.target.value);
  };

  const handleFechaNacimientoChange = (date) => {
    setFechaNacimiento(date);
  };

  const handleProfesionChange = (event) => {
    setProfesion(event.target.value);
  };

  const handleLicenciaturaChange = (event) => {
    setLicenciatura(event.target.checked);
  };

  const handleDiplomadoChange = (event) => {
    setDiplomado(event.target.checked);
  };

  const handleMaestriaChange = (event) => {
    setMaestria(event.target.checked);
  };

  const handlePhdChange = (event) => {
    setPhd(event.target.checked);
  };

  const handleAccept = () => {
    const tipoGrado = [];

    if (licenciatura) {
      tipoGrado.push("Licenciatura");
    }
    if (diplomado) {
      tipoGrado.push("Diplomado");
    }
    if (maestria) {
      tipoGrado.push("Maestría");
    }
    if (phd) {
      tipoGrado.push("PhD");
    }

    const fechaNacimientoString = dayjs(fechaNacimiento.$d).format('YYYY-MM-DD');
    const docente = new Docente(
      codigoDocente,
      primerNombre,
      segundoNombre,
      primerApellido,
      segundoApellido,
      genero,
      fechaNacimientoString,
      profesion,
      tipoGrado
    );

    addDocente(docente);

    handleClose();
    resetFields();
  };

  const handleCancel = () => {
    handleClose();
    resetFields();
  };

  const resetFields = () => {
    setCodigoDocente("");
    setPrimerNombre("");
    setSegundoNombre("");
    setPrimerApellido("");
    setSegundoApellido("");
    setGenero("femenino");
    setFechaNacimiento("");
    setProfesion("");
    setLicenciatura(false);
    setDiplomado(false);
    setMaestria(false);
    setPhd(false);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Modal open={open} onClose={handleClose} className="modal-form">
        <div className="modal-container">
          <div className="modal-content">
            <h2>Registro de docente</h2>

            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="Código de docente"
                  variant="outlined"
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                  autoComplete="off"
                  value={codigoDocente}
                  onChange={handleCodigoDocenteChange}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Primer Nombre"
                  variant="outlined"
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                  autoComplete="off"
                  value={primerNombre}
                  onChange={handlePrimerNombreChange}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Segundo Nombre"
                  variant="outlined"
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                  autoComplete="off"
                  value={segundoNombre}
                  onChange={handleSegundoNombreChange}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Primer Apellido"
                  variant="outlined"
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                  autoComplete="off"
                  value={primerApellido}
                  onChange={handlePrimerApellidoChange}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Segundo Apellido"
                  variant="outlined"
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                  autoComplete="off"
                  value={segundoApellido}
                  onChange={handleSegundoApellidoChange}
                />
              </Grid>
              <Grid item xs={6}>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  value={genero}
                  onChange={handleGeneroChange}
                >
                  <FormControlLabel
                    value="femenino"
                    control={<Radio />}
                    label="Femenino"
                  />
                  <FormControlLabel
                    value="masculino"
                    control={<Radio />}
                    label="Masculino"
                  />
                  <FormControlLabel
                    value="otro"
                    control={<Radio />}
                    label="Otro"
                  />
                </RadioGroup>
              </Grid>
              <Grid item xs={6}>
                <DatePicker label="Fecha de nacimiento"
                  variant="outlined"
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                  autoComplete="off"
                  value={fechaNacimiento}
                  onChange={handleFechaNacimientoChange} />

              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Profesion"
                  id="profesion"
                  select
                  variant="outlined"
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={profesion}
                  onChange={handleProfesionChange}
                >
                  <MenuItem value="Ingenieria">Ingeniería</MenuItem>
                  <MenuItem value="Humanidades">Humanidades</MenuItem>
                  <MenuItem value="Medicina">Medicina</MenuItem>
                  <MenuItem value="Economia">Economía</MenuItem>
                  <MenuItem value="Administracion">Administración</MenuItem>
                </TextField>
              </Grid>

              <Grid item xs={6}>
                <FormGroup>
                  <label>Tipo de grado</label>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={licenciatura}
                        onChange={handleLicenciaturaChange}
                      />
                    }
                    label="Licenciatura"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={diplomado}
                        onChange={handleDiplomadoChange}
                      />
                    }
                    label="Diplomado"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={maestria}
                        onChange={handleMaestriaChange}
                      />
                    }
                    label="Maestría"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox checked={phd} onChange={handlePhdChange} />
                    }
                    label="PhD"
                  />
                </FormGroup>
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
                <Button variant="contained" onClick={handleCancel}>
                  Cancelar
                </Button>
              </Grid>
            </Grid>
          </div>
        </div>
      </Modal>



    </LocalizationProvider>

  );
};

export default ModalDocente;
