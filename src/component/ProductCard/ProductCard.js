import React from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const ProductCard = ({ data }) => {
  const { user } = useContext(AuthContext);
  const { _id, name, img } = data;

  const navigate = useNavigate();

  const handleAddToCart = (id, name, img) => {

    if (!user) {
      alert('please login')
      navigate('/login');
      return;
    }

    fetch(`http://localhost:5000/product/${id}`, {
      method: 'post',
      headers: {
        'content-type': 'application/json'
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