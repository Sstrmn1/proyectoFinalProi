import React from "react";
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

// import dayjs from "dayjs";

const ModalDocente = function ({ open, handleClose }) {
  return (
    // <div className="form-container">
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Modal open={open} onClose={handleClose}>
        <div className="modal-container">
          <Grid container spacing={2}>
            <h2>Registro de docente</h2>
            <Grid item xs={12}>
              <TextField
                label="Codigo de docente"
                variant="outlined"
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
                autoComplete="off"
                id="codigoDeDocente"
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
                id="primerNombre"
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
                name="segundoNombre"
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
                name="primerApellido"
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
                name="segundoApellido"
              />
            </Grid>
            <Grid item xs={6}>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
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
                InputLabelProps={{
                  shrink: true,
                }}
                label="Fechan Nacimiento"
              />
            </Grid>
            <Grid item xs={6}>
              <label>Profesion</label>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={1}
                label="Age"
                onChange={1}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={6}>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Licenciatura"
                />
                <FormControlLabel control={<Checkbox />} label="Diplomado" />
                <FormControlLabel control={<Checkbox />} label="Maestría" />
                <FormControlLabel control={<Checkbox />} label="PhD" />
              </FormGroup>
            </Grid>
            <Grid item xs={6}>
              <Button variant="contained" color="primary">
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
      </Modal>
    </LocalizationProvider>
    // </div>
  );
};

export default ModalDocente;
