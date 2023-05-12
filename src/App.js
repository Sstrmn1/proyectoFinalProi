import logo from './logo.svg';
import './App.css';
import Automovil from './clases/automovil';
import { Button } from '@mui/material';



// Instanciacion del objeto
let nuevoAuto = new Automovil('V-12', 'XYZ-123', '2022', 'ABC123456DEF', 'Rojo', 2500, 'Sedán');

// Funciones con metodos de la clase
const handleClick = () => {
  alert(Automovil.descripcion());
};

const actualizarAuto = () => {
  nuevoAuto.motor = prompt("Ingrese el nuevo motor");
  nuevoAuto.placa = prompt("Ingrese nueva placa ");
  nuevoAuto.modelo = prompt("Ingrese el nuevo modelo ");
  nuevoAuto.chasis = prompt("Ingrese el nuevo chasis");
  nuevoAuto.color = prompt("Ingrese el nuevo color");
  nuevoAuto.cilindrada = prompt("Ingrese la nueva cilindrada");
  nuevoAuto.tipo = prompt("Ingrese nuevo tipo del auto");

  mostrarDatos()

}

const mostrarPlaca = () => {
  const placa = nuevoAuto.mostrarPlaca;
  alert(`La placa del auto es: ${placa}`);
}

const mostrarTipo = () => {
  const tipo = nuevoAuto.mostrarTipo;
  alert(`El tipo de auto es: ${tipo}`);
}

const validarModelo = () => {
  alert(nuevoAuto.validarModelo)
}




function mostrarDatos() {
  const autoStr = Object.keys(nuevoAuto).map(function (key) {
    return key + ': ' + nuevoAuto[key];
  }).join('\n');

  alert(autoStr);
}

function acelerarAuto() {
  if (nuevoAuto.acelerar) {
    nuevoAuto.acelerar();
  }

}

function desacelerarAuto() {
  if (nuevoAuto.desacelerar) {
    nuevoAuto.desacelerar();
  }

}


// App react

function App() {


  return (
    <div className="App">
      <header className="App-header">

        <p>
          Examen 2do Parcial: Fabio Camacho Encinas
        </p>
        <p>
          Objeto y clase automovil 🚗 🏁
        </p>

        <Button style={{ margin: "10px" }} variant="contained" onClick={handleClick}>
          Descripción
        </Button>

        <Button style={{ margin: "10px" }} variant="contained" onClick={mostrarDatos}>
          Mostrar datos del auto
        </Button>


        <Button style={{ margin: "10px" }} variant="contained" onClick={actualizarAuto}>
          Actualizar auto
        </Button>

        <Button style={{ margin: "10px" }} variant="contained" onClick={acelerarAuto}>
          Acelerar
        </Button>

        <Button style={{ margin: "10px" }} variant="contained" onClick={desacelerarAuto}>
          Desacelerar
        </Button>

        <Button style={{ margin: "10px" }} variant="contained" color="primary" onClick={mostrarPlaca}>Mostrar Placa</Button>
        <Button style={{ margin: "10px" }} variant="contained" color="primary" onClick={mostrarTipo}>Mostrar Tipo</Button>
        <Button style={{ margin: "10px" }} variant="contained" color="primary" onClick={validarModelo}>Validar Modelo</Button>


      </header>
    </div>
  );
}

export default App;
