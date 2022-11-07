import React from 'react';
import { Link } from 'react-router-dom';
import { TrashIcon } from '@heroicons/react/24/solid';

const Cart = ({ cart, handleDeleteCartProduct }) => {
  const { _id, img, name } = cart;

  return (
    <div className='flex items-center justify-between border rounded-md'>
      <img className='h-[100px] rounded-md' src={img} alt="" />
      <h2 className='font-semibold'>name: {name}</h2>
      <div className='flex items-center gap-5'>
        <Link to={`/cart/${_id}`}>
          <button className='bg-indigo-600 hover:bg-indigo-700 text-white rounded-md px-4 py-2 font-semibold'>order now</button>
        </Link>

        <button onClick={() => handleDeleteCartProduct(_id, name)}>
          <TrashIcon className='w-6 h-6' />
        </button>
      </div>
    </div>
  );
};

export default Cart;