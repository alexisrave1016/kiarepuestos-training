import React, { Fragment, useState } from 'react'

export default function Formulario() {

    const [cotizacion, setCotizacion] = useState({
        Nombre:'',
        Telefono:'',
        Email:'',
        Consulta:'',
    })

    const handleInputChange= (e)=>{
        // console.log(e.target.value)
        setCotizacion({
            ...cotizacion,
            [e.target.name]:[e.target.value]
        })

    }

    const enviarDatos= (e)=>{
        e.preventDefault();
        console.log(cotizacion.Nombre + ''+ cotizacion.Telefono)
    }
    

  return (
    <div className='Cotizaciones-contenedor'>
        <h1>Cotizacion</h1>
        <form className="formulario" onSubmit={enviarDatos}>
        
            <input
            placeholder='Ingreso Nombre'
            className='caja-datos'
            type='text'
            name='Nombre'
            onChange={handleInputChange}
            />
            
            <input
            placeholder='Telefono'
            className='caja-datos'
            type='number'
            name='Telefono'
            onChange={handleInputChange}
            />
            
            <input
            placeholder='Email'
            className='caja-datos'
            type='email'
            name='Email'
            onChange={handleInputChange}
            />
            
            <input
            placeholder='Consulta'
            className='caja-datos'
            name='Consulta'
            onChange={handleInputChange}
            />
        
            <button type='submit' >Enviar</button>
            
        </form>

        <h2>{cotizacion.Nombre} y tu telefono es {cotizacion.Telefono}</h2>

    </div>
  )
}
