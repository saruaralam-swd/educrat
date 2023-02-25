import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import Cart from './Cart';

const Carts = () => {
  const {user} = useContext(AuthContext);
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/cart?email=${user?.email}`)
      .then(res => res.json())
      .then(data => {
        setCarts(data)
      })
  }, [user?.email]);

  const handleDeleteCartProduct = (_id, name) => {
    const permission = window.confirm(`your want to delete ${name} product`);
    
    if (permission) {
      fetch(`http://localhost:5000/cart/${_id}`, {
        method: 'delete',
      })
        .then(res => res.json())
        .then(data => {
          if (data.deletedCount > 0) {
            const remaining = carts.filter(p => p._id !== _id);
            setCarts(remaining);
          }
        })
    }
  };

  return (
    <div className='my-10'>
      <h2 className='text-semibold text-center text-2xl'>Added Total Product : {carts.length}</h2>
      <div className='w-3/4 mx-auto space-y-5'>
        {
          carts.map(cart => <Cart handleDeleteCartProduct={handleDeleteCartProduct} key={cart._id} cart={cart}></Cart>)
        }
      </div>
    </div>
  );
};

export default Carts;