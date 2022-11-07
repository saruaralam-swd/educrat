import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Order from './Order';

const Orders = () => {
  const orders = useLoaderData();
  console.log(orders);

  return (
    <div className='my-10'>
      <h2 className='text-semibold text-center text-2xl'> Total Orders : {orders.length}</h2>
      <div className='w-3/4 mx-auto space-y-5'>
        {
          orders.map(order => <Order key={order._id} order={order}></Order>)
        }
      </div>
    </div>
  );
};

export default Orders;