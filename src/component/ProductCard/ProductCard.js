import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ data }) => {
  const { _id, name, img } = data;


  const handleAddToCart = (id, name, img) => {
    fetch(`http://localhost:5000/product/${id}`, {
      method: 'post',
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify({
        name, 
        productId: id,
        img
      })
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if (data.success) {
        alert(data.message)
      }
    })
    .catch(err => {
      console.error(err)
    })

  }

  return (
    <div className='border rounded-t-md'>
      <img src={img} className="rounded-t-md" alt="" />
      <h1 className='font-semibold text-1xl'>{name}</h1>
      <button onClick={() => handleAddToCart(_id, name, img)} className='bg-gray-400 px-4 py-1 rounded-md mt-5 w-full'>Add to Cart</button>
    </div>
  );
};

export default ProductCard;