import React from 'react';
import PhotoCard from './PhotoCard';

const TopGeneration = async () => {
    const res = await fetch("https://pixen-website.vercel.app/data.json");
    const photos = await res.json();
  const topphotos = photos.slice(0, 8);
  console.log(topphotos);
    return (
        <div>

            <h1 className='text-2xl text-center'>Top Generation</h1>
            <div className='grid grid-cols-4 gap-4'>
                {topphotos.map((photo) => <PhotoCard key={photo.id} photo={photo}></PhotoCard>
                  )}          
            </div> 
            
            
        </div>
    );
};

export default TopGeneration;