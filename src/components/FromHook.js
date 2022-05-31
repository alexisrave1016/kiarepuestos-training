import React from 'react'
import { useForm } from 'react-hook-form'

export default function FromHook() {
//muy importante siempre se debe poner asi el error, para que nso funcione
const {register, formState:{errors}, handleSubmit}= useForm();

const onSubmit=(data,e)=>{
    console.log(data)
    e.target.reset()//esto borra el dato que estamos enviando en el html
    
}
   
  return (
    <div>
        <h1>Formulario con FormHook</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input
                name='titulo'
                className='titulo-formHook'
                //esta es la forma actualizada de poner los required
                {...register("titulo", {
                    required: {value: true, message: 'esto es obligatorio'}
                  })}
            />
            {/* esto es una forma de hacer el error */}
            <span>{errors.titulo && errors?.titulo.message}</span>
            {/* esto es otra forma de hacer el error
            <span>{errors?.titulo?.message}</span> */}
                
            
            <button className='button-formHook' type='submit'>Enviar</button>
             
        </form>
    </div>
  )
}
