import React, { useState } from 'react';

function Charla() {
    const images = ['./Chat-1.jpeg', './Chat-2.jpeg', './Chat-3.jpeg', './Chat-4.jpeg', './Chat-5.jpeg', './Chat-6.jpeg'];
    const [startIndex, setStartIndex] = useState(0);

    const handleClickPrev = () => {
        const newIndex = startIndex - 3 < 0 ? images.length - (images.length % 3) : startIndex - 3;
        setStartIndex(newIndex);
    };

    const handleClickNext = () => {
        const newIndex = startIndex + 3 >= images.length ? 0 : startIndex + 3;
        setStartIndex(newIndex);
    };

    return (
        <div className='bg-zinc-950 text-zinc-50 pb-40'>
            <h2 className='text-4xl text-center font-poetsen p-16'>COMIENZO DE TODO</h2>
            <div className='relative'>
                <div className='flex justify-around'>
                    <button className="mx-2 text-4xl" onClick={handleClickPrev}>←</button>
                    {images.slice(startIndex, startIndex + 3).map((image, index) => (
                        <img key={index} className='h-96' src={image} alt={`Chat ${index + 1}`} />
                    ))}
                    <button className="mx-2 text-4xl" onClick={handleClickNext}>→</button>
                </div>
                <div className='absolute -bottom-12 left-0 right-0 flex justify-center'>
                    {Array.from({ length: Math.ceil(images.length / 3) }).map((_, index) => (
                        <div key={index} className={`w-4 h-4 mx-1 rounded-full ${Math.floor(startIndex / 3) === index ? 'bg-white' : 'bg-gray-500'}`}></div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Charla;
