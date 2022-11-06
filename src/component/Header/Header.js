import React from 'react';
import Logo from '../../assets/img/logo-white.svg'
import { Bars3CenterLeftIcon, MagnifyingGlassIcon, ShoppingCartIcon, } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';
import './Header.css'
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Header = () => {
  const { user, logOut } = useContext(AuthContext);


  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch(error => console.log(error.message));
  };


  return (
    <header className='header md:flex md:justify-between items-center bg-[#140342] text-white px-[3%] space-y-5 md:space-y-0 p-3'>
      <div className='flex justify-between items-center space-x-10 '>
        <Link to='/'><img src={Logo} alt="" /></Link>
        <Link className='flex space-x-2 font-semibold'>
          <span><Bars3CenterLeftIcon className='h-7 w-7 green'></Bars3CenterLeftIcon></span>
          <span className='green'>Explore</span>
        </Link>
      </div>

      <nav className='space-x-10'>
        <Link to='/home'>Home</Link>
        <Link to='/courses'>Courses</Link>
        {/* <Link to='/blog'>Blog</Link> */}
        {/* <Link to='/shop'>Shop</Link> */}
        {/* <Link to='/pages'>Pages</Link> */}
        {/* <Link to='/contact'>Contact</Link> */}
        <Link to='/products'>Products</Link>
      </nav>

      <div className='flex items-center space-x-5'>
        <MagnifyingGlassIcon className='h-6 w-6' />
        <Link to='/cart'> <ShoppingCartIcon className='h-6 w-6' /></Link>

        {
          user?.uid ?
            <>
              <h1>{user?.displayName}</h1>
              <Link onClick={handleLogOut}>
                <button className='bg-white text-[#140342] hover:bg-blue-600 hover:text-white font-semibold duration-500 border-transparent py-2 px-8 rounded-md'>Log Out</button>
              </Link>
            </>
            :
            <Link to='/login'>
              <button className='bg-white text-[#140342] hover:bg-blue-600 hover:text-white font-semibold duration-500 border-transparent py-2 px-8 rounded-md'>Log in</button>
            </Link>
        }
      </div>
    </header>
  );
};

export default Header;