import React, { useEffect, useState } from 'react';

const Trust = () => {
  const [imgs, setImgs] = useState([]);

  useEffect(() => {
    fetch('images.json')
      .then(res => res.json())
      .then(data => setImgs(data))
  }, []);

  return (
    <div className='mt-12 px-5 md:px-10'>
      <h2 className='text-center text-lg'>Trusted by the world’s best</h2>
      <div className='flex justify-between mt-5 gap-5'>
        {
          imgs.map(img => <div key={img.id}><img src={img.picture} alt="" /></div>)
        }
      </div>
    </div>
  );
};

export default Trust;