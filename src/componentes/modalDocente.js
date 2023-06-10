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
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import Docente from "../clases/docente";
import { startOfDay, format } from "date-fns";

const ModalDocente = ({ open, handleClose, addDocente }) => {
  const [codigoDocente, setCodigoDocente] = useState("");
  const [primerNombre, setPrimerNombre] = useState("");
  const [segundoNombre, setSegundoNombre] = useState("");
  const [primerApellido, setPrimerApellido] = useState("");
  const [segundoApellido, setSegundoApellido] = useState("");
  const [genero, setGenero] = useState("female");
  const [fechaNacimiento, setFechaNacimiento] = useState(null);
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

    const docente = new Docente(
      codigoDocente,
      primerNombre,
      segundoNombre,
      primerApellido,
      segundoApellido,
      genero,
      fechaNacimiento,
      profesion,
      tipoGrado
    );

    addDocente(docente);

    handleClose();
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <div className="modal-container">
        <h2>Registro de docente</h2>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
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
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                />
              </RadioGroup>
            </Grid>
            <Grid item xs={6}>
              <DatePicker
                label="Fecha de nacimiento"
                value={fechaNacimiento}
                onChange={handleFechaNacimientoChange}
                renderInput={(props) => (
                  <TextField
                    {...props}
                    variant="outlined"
                    value={
                      fechaNacimiento
                        ? fechaNacimiento.toLocaleDateString()
                        : ""
                    }
                  />
                )}
              />
            </Grid>
            <Grid item xs={6}>
              <label>Profesión</label>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={profesion}
                label="Profesión"
                onChange={handleProfesionChange}
              >
                <MenuItem value="Ingenieria">Ingeniería</MenuItem>
                <MenuItem value="Humanidades">Humanidades</MenuItem>
                <MenuItem value="Medicina">Medicina</MenuItem>
                <MenuItem value="Economia">Economía</MenuItem>
                <MenuItem value="Administracion">Administración</MenuItem>
              </Select>
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
              <Button variant="contained" onClick={handleClose}>
                Cancelar
              </Button>
            </Grid>
          </Grid>
        </LocalizationProvider>
      </div>
    </Modal>
  );
};

export default ModalDocente;
