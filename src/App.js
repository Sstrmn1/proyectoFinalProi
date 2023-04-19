import logo from './logo.svg';
import './App.css';
import { Button, TextField, Grid } from '@mui/material';
import './index.css';
import Persona from "./clases/persona";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <form className="form">
          <div className="form-container">
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField label="Primer Nombre" variant="outlined" fullWidth InputLabelProps={{
                  shrink: true
                }} autoComplete ="off"/>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField label="Segundo Nombre" variant="outlined" fullWidth InputLabelProps={{
                  shrink: true
                }} autoComplete ="off"/>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField label="Primer Apellido" variant="outlined" fullWidth InputLabelProps={{
                  shrink: true
                }} autoComplete ="off"/>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField label="Segundo Apellido" variant="outlined" fullWidth InputLabelProps={{
                  shrink: true
                }} autoComplete ="off"/>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField label="Fecha de Nacimiento" type="date" variant="outlined" fullWidth InputLabelProps={{
                  shrink: true
                }} autoComplete ="off"/>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField label="Estado Civil" variant="outlined" fullWidth InputLabelProps={{
                  shrink: true
                }} autoComplete ="off"/>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField label="Padres" variant="outlined" fullWidth InputLabelProps={{
                  shrink: true
                }} autoComplete ="off"/>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField label="Hijos" variant="outlined" fullWidth InputLabelProps={{
                  shrink: true
                }} autoComplete ="off"/>
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
                autoComplete ="off"/>
              </Grid>
            </Grid>
            <Button variant="contained" type="submit">
              Submit
            </Button>
          </div>
        </form>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

