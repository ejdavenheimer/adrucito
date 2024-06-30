import React from 'react'
import Navbar from './Navbar'

function Portada() {
    return (
        <div className='relative'>
            <img className=' blur-sm h-screen w-screen object-cover object-top' src='./portada.jpeg' alt='Foto de Mino' />
            <div className='absolute right-24 top-36 w-1/3 p-2 rounded text-center bg-negro-transparente shadow-zinc-900/70 shadow-xl '>
                <h2 className='font-poetsen text-xl my-2'>Adrián Romero</h2>
                <p className='italic '>"Bomboncito, sos un hombre hermoso, inteligente, educado, buena gente, simpático, divertido,
                    reciliente, sensible, amoroso, tierno, infantil, maduro, quejoso (jajaja), dramático
                    y muchísimas cualidades más que te hacen una persona invaluable. En definitiva, un ser
                    que todos merecen tener en sus vidas y que deberían cuidar y dar mucho amor."
                </p>
            </div>
        </div>
    )
}

export default Portada
