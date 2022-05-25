import React, { useEffect } from 'react'
import { useState } from 'react'

export default function Ejercicios() {
    const [cambiaTitulo, setCambiaTitulo] = useState(0)
    useEffect(() => {
        document.title=`prueba ${cambiaTitulo}`;
        
    });
  return (
    <div>
        <h2>Ejercicios useEffect</h2>
        <button onClick={()=>setCambiaTitulo(cambiaTitulo + 1)}>Cambiar</button>
        
    </div>
  )
}
