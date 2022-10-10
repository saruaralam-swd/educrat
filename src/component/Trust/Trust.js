import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleTrust from '../SingleTruset/SingleTrust';

const Trust = () => {
  const [imgs, setImgs]  = useState([]);

  useEffect(() => {
    fetch('images.json')
    .then (res => res.json())
    .then (data => setImgs(data))
  }, []);

  return (
    <div className='mt-12'>
      <h2 className='mb-5 text-center'>Trusted by the world’s best</h2>
      <div className='flex justify-between'>
      {
        imgs.map(img => <SingleTrust key={img.id} img={img}></SingleTrust>)
      }
    </div>
    </div>
  );
};

export default Trust;