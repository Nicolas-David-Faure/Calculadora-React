import './App.css';
import LogoFreeCodeCamp from './componentes/LogoFreeCodeCamp';
import Boton from './componentes/Boton.js'
import Pantalla from './componentes/Pantalla';
import BotonClear from './componentes/Boton-clear';

import { useState } from 'react';
import { evaluate } from 'mathjs';
 


function App() {
  const [input, setIput] = useState('');
  
  const agregarInput = val =>{
    setIput(input + val);
  };

  const calcularResultado = () =>{
    if(input){
      setIput(evaluate(input));
    }else{
      alert('Por favor ingrese valores para realizar los cálculos.')
    }
    
  };

  return (
    <div className='App'>
     <LogoFreeCodeCamp />
      <div className='contenedor-calculadora'>
        <Pantalla input={ input } />
          <div className='fila'>
            <Boton manejarClic={agregarInput}>1</Boton>
            <Boton manejarClic={agregarInput}>2</Boton>
            <Boton manejarClic={agregarInput}>3</Boton>
            <Boton manejarClic={agregarInput}>+</Boton>
          </div>
          <div className='fila'>
            <Boton manejarClic={agregarInput}>4</Boton>
            <Boton manejarClic={agregarInput}>5</Boton>
            <Boton manejarClic={agregarInput}>6</Boton>
            <Boton manejarClic={agregarInput}>-</Boton>
          </div>
          <div className='fila'>
            <Boton manejarClic={agregarInput}>7</Boton>
            <Boton manejarClic={agregarInput}>8</Boton>
            <Boton manejarClic={agregarInput}>9</Boton>
            <Boton manejarClic={agregarInput}>*</Boton>
          </div>
          <div className='fila'>
            <Boton manejarClic={calcularResultado}>=</Boton>
            <Boton manejarClic={agregarInput}>0</Boton>
            <Boton manejarClic={agregarInput}>.</Boton>
            <Boton manejarClic={agregarInput}>/</Boton>
          </div>
          <div className='fila'>
            <BotonClear manejarClear ={ ()=> setIput('')}>Clear</BotonClear>
          </div>
      </div>
    </div>
  );
}

export default App;
