import React, { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import Order from './Order';

const Orders = () => {
  const {user} = useContext(AuthContext);

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/orders?email=${user?.email}`)
    .then(res => res.json())
    .then(data => {
      setOrders(data)
    })
  }, [user?.email])

  return (
    <div className='my-10'>
      <h2 className='text-semibold text-center text-2xl'> Total Orders : {orders?.length}</h2>
      <div className='w-3/4 mx-auto space-y-5'>
        {
          orders.map(order => <Order key={order._id} order={order}></Order>)
        }
      </div>
    </div>
  );
};

export default Orders;