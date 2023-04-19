import logo from './logo.svg';
import './App.css';
import { Button, TextField, Grid } from '@mui/material';
import './index.css';


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
                  shrink: true,
                }} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField label="Segundo Nombre" variant="outlined" fullWidth InputLabelProps={{
                  shrink: true,
                }} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField label="Primer Apellido" variant="outlined" fullWidth InputLabelProps={{
                  shrink: true,
                }} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField label="Segundo Apellido" variant="outlined" fullWidth InputLabelProps={{
                  shrink: true,
                }} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField label="Fecha de Nacimiento" type="date" variant="outlined" fullWidth InputLabelProps={{
                  shrink: true,
                }} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField label="Estado Civil" variant="outlined" fullWidth InputLabelProps={{
                  shrink: true,
                }} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField label="Padres" variant="outlined" fullWidth InputLabelProps={{
                  shrink: true,
                }} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField label="Hijos" variant="outlined" fullWidth InputLabelProps={{
                  shrink: true,
                }} />
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

