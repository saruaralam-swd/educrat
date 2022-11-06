import React from 'react';

const ProductCard = ({ data }) => {
  const { name, img } = data;

  return (
    <div className='border rounded-t-md'>
      <img src={img} className="rounded-t-md" alt="" />
      <h1 className='font-semibold text-1xl'>{name}</h1>
      <button className='bg-gray-400 px-4 py-1 rounded-md mt-5'>Add Now</button>
    </div>
  );
};

export default ProductCard;