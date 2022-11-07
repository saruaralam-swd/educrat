import React from 'react';
import { Link } from 'react-router-dom';

const Order = ({ order }) => {
  const { imgURL,  _id, customerName, email, phone } = order;
  console.log(order);

  return (
    <div>
      <div className='flex items-center justify-between border rounded-md'>
        <img className='h-[100px] rounded-md' src={imgURL} alt="" />

        <div>
          <h2 className='font-semibold'>Customer Name: {customerName ? customerName : 'you name'}</h2>
          <h2 className='font-semibold'>Email: {email}</h2>
          <h2 className='font-semibold'>{phone}</h2>
        </div>

        <Link to={`/cart/${_id}`}>
          <button className='bg-indigo-600 hover:bg-indigo-700 text-white rounded-md px-4 py-2 font-semibold'>Update</button>
        </Link>
      </div>
    </div>
  );
};

export default Order;