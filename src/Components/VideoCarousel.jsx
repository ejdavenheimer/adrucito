import React from 'react';

const VideoCarousel = () => {
    const videos = [
        './video-1.mp4',
        './video-2.mp4',
        './video-4.mp4', 
    ];

    return (
        <div className='bg-zinc-950 text-zinc-50 py-8'>
            <h2 className='text-4xl text-center font-poetsen py-20'>VIDEITOS</h2>
            <div className="relative px-6 gap-1 w-full flex overflow-hidden">
            {videos.map((video, index) => (
                <div key={index} className="w-1/3 h-screen flex-shrink-0">
                    <video className="w-full h-full object-cover" controls>
                        <source src={video} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            ))}
        </div>
        </div>
    );
};

export default VideoCarousel;
