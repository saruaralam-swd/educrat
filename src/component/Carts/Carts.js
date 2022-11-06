import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from './Cart';

const Carts = () => {
  const carts = useLoaderData();

  return (
    <div className='my-10'>
      <h2 className='text-semibold text-center text-2xl'>Added Total Product : {carts.length}</h2>
      <div className='w-3/4 mx-auto space-y-5'>
        {
          carts.map(cart => <Cart key={cart._id} cart={cart}></Cart>) 
        }
      </div>
    </div>
  );
};

export default Carts;