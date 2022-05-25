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
        console.log('estoy enviando')
    }
    

  return (
    <Fragment className='Cotizaciones-contenedor'>
        <h1>Cotizacion</h1>
        <from className="formulario" >
            <label>
            <input
            placeholder='Ingreso Nombre'
            className='caja-datos'
            type='text'
            name='Nombre'
            onChange={handleInputChange}
            />
            </label>

            <label>
            <input
            placeholder='Telefono'
            className='caja-datos'
            type='number'
            name='Telefono'
            onChange={handleInputChange}
            />
            </label>
            
            <label>
            <input
            placeholder='Email'
            className='caja-datos'
            type='email'
            name='Email'
            onChange={handleInputChange}
            />
            </label>
            
            <label>
            <input
            placeholder='Consulta'
            className='caja-datos'
            name='Consulta'
            onChange={handleInputChange}
            />
            </label>

            <button type='submit' onClick={enviarDatos}>Enviar</button>
            
        </from>

        <h2>{cotizacion.Nombre} y tu telefono es {cotizacion.Telefono}</h2>

    </Fragment>
  )
}
