import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { BiHide, BiShow } from "react-icons/bi";

const Login = () => {
  const { login } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(true);
  // <input type={showPassword ? 'password' : 'text'} placeholder='Password123' className='w-56 border px-4 py-2 mt-10' />
  // <p onClick={() => setShowPassword(!showPassword)} className='cursor-pointer'>{showPassword ? 'Show' : 'Hide'}</p>


  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogIn = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    login(email, password)
      .then(result => {
        const user = result.user;
        form.reset();
        navigate(from, { replace: true });

        const currentUser = {
          email: user?.email
        };
      })
      .catch(error => {
        alert(error.message)
      })
  };

  return (
    <div className=' flex justify-center mt-10'>
      <div className='space-y-3'>
        <h2 className='text-3xl font-semibold'>Login In</h2>
        <form onSubmit={handleLogIn} className='space-y-3'>
          <input className='border-2 border-indigo-500 focus:outline-2 focus:outline-indigo-700  rounded-md px-4 py-1' type="email" name="email" placeholder='example@gmail.com' required /> <br />

          <input className='border-2 border-indigo-500 focus:outline-2 focus:outline-indigo-700  rounded-md px-4 py-1' type={showPassword ? "password" : "text"} name="password" placeholder='password' required /> <br />
          <span onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <BiShow className='w-5 h-5 cursor-pointer' /> : <BiHide className='w-5 h-5 cursor-pointer' />}
          </span>

          <button className='bg-indigo-600 px-4 py-1 font-semibold rounded-md duration-500 hover:bg-indigo-700 text-white'>Login</button>
        </form>
        <p> haven't any account? <Link to='/signup' className='text-blue-700 font-semibold'>Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;