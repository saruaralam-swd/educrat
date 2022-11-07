import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const CheckOut = () => {
  const { user } = useContext(AuthContext);
  const { img, name, _id } = useLoaderData();

  const handlePlaceOrder = (event) => {
    event.preventDefault();

    const form = event.target;
    const userName = `${form.firstName.value} ${form.lastName.value}`
    const phone = form.phone.value;
    const email = user?.email;
    const message = form.message.value;

    const order = {
      customerName: userName,
      phone,
      email,
      message,
      imgURL: img,
      productName: name,
      productId: _id,
    }

    fetch('http://localhost:5000/order', {
      method: 'post',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(order)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.success) {
          alert('your product successfully add')
          form.reset();
        }
      })
  };


  return (
    <div className='my-10 w-3/5 mx-auto'>
      <h2 className='text-2xl font-semibold mb-5'>Checkout : {name}</h2>
      <form onSubmit={handlePlaceOrder} className=' space-y-5'>
        <div className='grid md:grid-cols-2 gap-5'>
          <input type="text" name='firstName' placeholder="First Name" className="border-2 focus:outline-2 focus:outline-indigo-500  rounded-md px-4 py-1" />
          <input type="text" name='lastName' placeholder="Last Name" className="border-2 focus:outline-2 focus:outline-indigo-500  rounded-md px-4 py-1" />
          <input type="text" name='phone' placeholder="Your Phone" className="border-2 focus:outline-2 focus:outline-indigo-500  rounded-md px-4 py-1" required />
          <input type="email" name='email' placeholder="Your Email" className="border-2 focus:outline-2 focus:outline-indigo-500  rounded-md px-4 py-1" defaultValue={user?.email} readOnly />
        </div>

        <textarea name='message' className=" placeholder:italic border-2 focus:outline-2 focus:outline-indigo-500  rounded-md px-4 py-1 w-full" placeholder="Your Message" required />

        <button className='bg-indigo-600 px-4 py-1 font-semibold rounded-md hover:bg-indigo-700 text-white'>Send</button>
      </form>
    </div>
  );
};

export default CheckOut;