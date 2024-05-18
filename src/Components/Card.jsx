import React from 'react'
import Navbar from './Navbar'

function Card() {
    return (
        <>
            <h2 className='font-poetsen text-3xl text-center p-16'>MOMENTOS</h2>
            <div className='flex justify-center items-center mb-20'>
                <p className='w-1/3 text-xl italic text-center'>"5/1"</p>

                <div className='flex  gap-2 items-center shadow-xl shadow-emerald-200/50'>
                    <div className='flex flex-col gap-1'>
                        <img className='w-full rounded h-32 object-contain' src='./Cine-2.jpeg' alt='photo' />
                        <img className='w-full rounded h-32 object-contain' src='./Cine-3.jpeg' alt='photo' />
                    </div>
                    <div className=''>
                        <img className='h-64 w-full  rounded object-contain ' src='./Cine-1.jpeg' alt='photo' />
                    </div>
                </div>
            </div>

            <div className='flex justify-center items-center mb-20'>
                <div className='flex gap-1 items-center shadow-xl shadow-emerald-200/50'>
                    <div className='flex flex-col  gap-1'>
                        <img className='w-48 rounded h-40 object-cover object-center' src='./noqui-3.jpeg' alt='photo' />
                        <img className='w-48 rounded h-40 object-cover' src='./noqui-1.jpeg' alt='photo' />
                    </div>
                    <div className=''>
                        <img className='h-80 w-full rounded object-contain ' src='./noqui-2.jpeg' alt='photo' />
                    </div>
                </div>
                <p className='w-1/3 text-xl italic text-center'>"13/1"</p>

            </div>

            <div className='flex justify-center items-center mb-20'>
                <p className='w-1/3 text-xl italic text-center'>"27/1"</p>

                <div className='flex w-1/3 gap-2 items-center'>
                    <div className='flex flex-col  gap-1'>
                        <img className='w-48 rounded h-54 object-cover' src='./beso-3.jpeg' alt='photo' />
                        <img className='w-48 rounded h-54 object-cover' src='./beso-1.jpeg' alt='photo' />
                    </div>
                    <div className='flex flex-col  gap-1'>
                        <img className='w-48 rounded h-54 object-cover' src='./beso-2.jpeg' alt='photo' />
                        <img className='w-48 rounded h-54 object-cover' src='./beso-4.jpeg' alt='photo' />
                    </div>
                </div>
            </div>


            <div className='flex justify-center items-center mb-20'>
                <div className='flex w-1/3 gap-2 items-center'>
                    <div className='flex gap-1'>
                        <img className='w-48 rounded h-54 object-cover' src='./random-2.jpeg' alt='photo' />
                        <img className='w-48 rounded h-54 object-cover' src='./random-1.jpeg' alt='photo' />
                    </div>
                </div>
                <p className='w-1/3 text-xl italic text-center'>"Random"</p>
            </div>

            <div className='flex justify-center items-center mb-20'>
            <p className='w-1/3 text-xl italic text-center'>"2/2"</p>
                <div className='flex w-1/3 gap-0 items-center'>
                    <div className='flex flex-col  gap-1'>
                        <img className='w-56 rounded h-48 object-cover object-top' src='./bar-3.jpeg' alt='photo' />
                        <img className='w-56 rounded h-48 object-cover' src='./bar-1.jpeg' alt='photo' />
                    </div>
                    <div className=''>
                        <img className='h-96 w-full m-2 object-contain ' src='./bar-2.jpeg' alt='photo' />
                    </div>
                </div>
                

            </div>

            <div className='flex justify-center items-center mb-20'>
                <div className='flex w-1/3 gap-0 items-center'>
                    <div className='flex flex-col  gap-1'>
                        <img className='w-48 rounded h-48 object-cover' src='./casa-3.jpeg' alt='photo' />
                        <img className='w-48 rounded h-48 object-cover' src='./casa-1.jpeg' alt='photo' />
                    </div>
                    <div className=''>
                        <img className='h-96 w-full m-1 rounded object-contain ' src='./casa-2.jpeg' alt='photo' />
                    </div>
                </div>
                <p className='w-1/3 text-xl italic text-center'>"7/3"</p>

            </div>

            <div className='flex justify-center items-center mb-20'>
            <p className='w-1/3 text-xl italic text-center'>"9/3"</p>
                <div className='flex w-1/3 gap-0 items-center'>
                    <div className='flex flex-col w-full gap-1'>
                        <img className='w-full rounded h-48 object-cover object-top' src='./junte-1.jpeg' alt='photo' />
                        <img className='w-full rounded h-48 object-cover' src='./junte-2.jpeg' alt='photo' />
                    </div>
                </div>
            </div>

            <div className='flex justify-center items-center mb-20'>
                <div className='flex w-1/3 items-center'>
                <div className='mr-2'>
                        <img className='h-96 w-full rounded object-contain ' src='./burgue-3.jpeg' alt='photo' />
                    </div>
                    <div className='flex flex-col  gap-1'>
                        <img className='w-48 rounded h-48 object-cover' src='./burgue-2.jpeg' alt='photo' />
                        <img className='w-48 rounded h-48 object-cover' src='./burgue-1.jpeg' alt='photo' />
                    </div>
                    
                </div>
                <p className='w-1/3 text-xl italic text-center'>"10/3"</p>

            </div>

            <div className='flex justify-center items-center mb-20'>
            <p className='w-1/3 text-xl italic text-center'>"22/3"</p>
                <div className='flex w-1/3 gap-0 items-center'>
                    <div className='flex flex-col w-full gap-1'>
                        <img className='w-full rounded h-48 object-cover object-top' src='./taco-1.jpeg' alt='photo' />
                        <img className='w-full rounded h-48 object-cover' src='./taco-2.jpeg' alt='photo' />
                    </div>
                </div>
            </div>

            <div className='flex justify-center items-center mb-20'>
                <div className='flex w-1/3 gap-2 items-center'>
                    <div className='flex gap-1'>
                        <img className='w-48 rounded h-54 object-cover' src='./standup-2.jpeg' alt='photo' />
                        <img className='w-48 rounded h-54 object-cover' src='./standup-1.jpeg' alt='photo' />
                    </div>
                </div>
                <p className='w-1/3 text-xl italic text-center'>"30/3"</p>
            </div>

            <div className='flex justify-center items-center mb-20'>
            <p className='w-1/3 text-xl italic text-center'>"Encuentros"</p>
                <div className='flex w-1/3 gap-0 items-center'>
                    <div className='flex flex-col w-full gap-1'>
                        <img className='w-full rounded h-48 object-cover object-top' src='./junta-1.jpeg' alt='photo' />
                        <img className='w-full rounded h-48 object-cover' src='./junta-2.jpeg' alt='photo' />
                    </div>
                </div>
            </div>

            <div className='flex justify-center items-center mb-20'>
                <div className='flex w-1/3 gap-2 items-center'>
                    <div className='flex flex-col  gap-1'>
                        <img className='w-48 rounded h-48 object-cover' src='./europa-3.jpeg' alt='photo' />
                        <img className='w-48 rounded h-48 object-cover' src='./europa-1.jpeg' alt='photo' />
                    </div>
                    <div className='flex flex-col  gap-1'>
                        <img className='w-48 rounded h-48 object-cover' src='./europa-2.jpeg' alt='photo' />
                        <img className='w-48 rounded h-48 object-cover' src='./europa-4.jpeg' alt='photo' />
                    </div>
                </div>
                <p className='w-1/3 text-xl italic text-center'>"Europa"</p>
            </div>
        </>
    )
}

export default Card
