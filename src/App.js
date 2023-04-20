import logo from './logo.svg';
import React from 'react';
import './App.css';
import { Button, TextField, Grid } from '@mui/material';
import './index.css';
import Persona from "./clases/persona";


function App() {


  let nuevaPersona;

  const handleSubmit = (event) => {
    event.preventDefault();
    const primerNombre = event.target.elements.primerNombre.value;
    const segundoNombre = event.target.elements.segundoNombre.value;
    const primerApellido = event.target.elements.primerApellido.value;
    const segundoApellido = event.target.elements.segundoApellido.value;
    const fechaNacimiento = event.target.elements.fechaNacimiento.value;
    const estadoCivil = event.target.elements.estadoCivil.value;
    const padresFamilia = event.target.elements.padresFamilia.value;
    const hijos = event.target.elements.hijos.value;
    const identidad = event.target.elements.identidad.value;

    nuevaPersona = new Persona(primerNombre, segundoNombre, primerApellido, segundoApellido, fechaNacimiento, estadoCivil, padresFamilia, hijos, identidad);

    console.log("Persona Registrada");

  };

  function mostrarNombreCompleto() {
    if (nuevaPersona) {
      console.log(nuevaPersona.nombreCompleto);
    }
  }

  function mostrarApellidos() {
    if (nuevaPersona) {
      console.log(nuevaPersona.llamarApellidos);
    }
  }

  function mostrarEdad() {
    if (nuevaPersona) {
      console.log(nuevaPersona.edadPersona);
    }
  }




  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Formulario
        </p>
        <form className="form" onSubmit={handleSubmit} >
          <div className="form-container" >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField label="Primer Nombre" variant="outlined" fullWidth InputLabelProps={{
                  shrink: true
                }} autoComplete="off" name="primerNombre" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField label="Segundo Nombre" variant="outlined" fullWidth InputLabelProps={{
                  shrink: true
                }} autoComplete="off" name="segundoNombre" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField label="Primer Apellido" variant="outlined" fullWidth InputLabelProps={{
                  shrink: true
                }} autoComplete="off" name="primerApellido" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField label="Segundo Apellido" variant="outlined" fullWidth InputLabelProps={{
                  shrink: true
                }} autoComplete="off" name="segundoApellido" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField label="Fecha de Nacimiento" type="date" variant="outlined" fullWidth InputLabelProps={{
                  shrink: true
                }} autoComplete="off" name="fechaNacimiento" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField label="Estado Civil" variant="outlined" fullWidth InputLabelProps={{
                  shrink: true
                }} autoComplete="off" name="estadoCivil" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField label="Padres" variant="outlined" fullWidth InputLabelProps={{
                  shrink: true
                }} autoComplete="off" name="padresFamilia" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField label="Hijos" variant="outlined" fullWidth InputLabelProps={{
                  shrink: true
                }} autoComplete="off" name="hijos" />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  label="ID"
                  variant="outlined"
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                  inputProps={{
                    pattern: "[0-9]*",
                    onKeyPress: (event) => {
                      if (!/[0-9]/.test(event.key)) {
                        event.preventDefault();
                      }
                    },
                  }}
                  autoComplete="off" name="identidad" />
              </Grid>
            </Grid>

            <Button className="form-button" variant="contained" type="submit">
              Enviar
            </Button>

            <Button className="form-button" variant="contained" onClick={mostrarNombreCompleto} >
              Nombre Completo
            </Button>

            <Button className="form-button" variant="contained" onClick={mostrarApellidos}>
              Apellidos
            </Button>

            <Button className="form-button" variant="contained" onClick={mostrarEdad}>
              Edad
            </Button>


          </div>
        </form>

      </header>
    </div>
  );
}

export default App;

