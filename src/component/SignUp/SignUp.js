import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const SignUp = () => {
  const { createUser, profileUpdate, logOut } = useContext(AuthContext);

  const navigate= useNavigate();

  const handleCreateUser = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then(result => {
        const user = result.user;
        logOut();
        console.log(user);
        handleUpdateProfile(name)
        alert('account create success. please login ')
        navigate('/login')
        form.reset();
      })
      .catch(error => console.log(error.message))
  };

  const handleUpdateProfile = (name) => {
    const profile = {
      displayName: name,
    };

    profileUpdate(profile)
      .then(() => { })
      .catch(error => console.log(error.name, error.message))
  };

  return (
    <div className=' flex justify-center mt-10'>
      <div className='space-y-3'>
        <h2 className='text-3xl font-semibold'>Sign Up</h2>
        <form onSubmit={handleCreateUser} className='space-y-3'>
          <input className='border-2 border-indigo-600 rounded-md px-4 py-1' type="text" name="name" placeholder='Your Name' required /> <br />
          <input className='border-2 border-indigo-600 rounded-md px-4 py-1' type="email" name="email" placeholder='example@gmail.com' required /> <br />
          <input className='border-2 border-indigo-600 rounded-md px-4 py-1' type="password" name="password" placeholder='password' required />  <br />
          <button className='bg-indigo-600 px-4 py-1 font-semibold rounded-md hover:bg-indigo-700 text-white'>Sign Up</button>
        </form>
        <p> Already have account? <Link to='/login' className='text-blue-700 font-semibold'>Log in</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;