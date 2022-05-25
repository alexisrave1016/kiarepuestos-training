import React, { useState } from 'react'
import Ejercicios from '../components/Ejercicios'
import Formulario from '../components/Formulario';

export const App = () => {
  const temperatura= 2;
  
  const [numero, setnumero] = useState(0);
  const aumentar=()=>{
    console.log('me diste un click')
    setnumero(numero +1)
  };
  const disminuir=()=>{
    console.log('me quitaste un link')
    setnumero(numero -1)
  };
  return (
    <div>
      <Ejercicios/>
      <button onClick={aumentar} >Agregar</button>
      <button onClick={disminuir} >Disminuir</button>
      <span>{numero}</span>
      <h1>
        {temperatura > 20 ? 'mucho calor' : 'esta haciendo un poco de frio'}
      </h1>
      <Formulario/>
    </div>
  )
}

