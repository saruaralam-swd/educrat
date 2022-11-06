import React from 'react';

const Cart = ({ cart }) => {

  return (
    <div className='flex items-center justify-between border rounded-md'>
      <img className='h-[100px] rounded-md' src={cart?.img} alt="" />
      <h2 className='font-semibold'>name: {cart?.name}</h2>
      <button className='bg-indigo-600 hover:bg-indigo-700 text-white rounded-md px-4 py-2 font-semibold'>order now</button>
    </div>
  );
};

export default Cart;