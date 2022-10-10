import React from 'react';
import { Link } from 'react-router-dom';
import './HeroSection.css'

const HeroSection = () => {
  return (
    <div className='hero-section-bg pt-[130px]'>
      <div className='pl-3 space-y-7'>
        <h1 className='text-5xl  font-semibold'>
          <span className='block mb-3'>Learn New Skills </span>
          <span className='block mb-3'>Online With Top</span>
          <span className='block mb-3 green underline'><Link>Educators</Link></span>
        </h1>

        <p>
          <span className='block mb-2'>Build Skills With Courses, Certificates, And Degrees Online From </span>
          <span className='block'>World-Class Universities And Companies</span>
        </p>

        <div className='space-x-5'>
          <Link className='btn free-btn duration-500' ><button>Join For Free</button></Link>
          <Link className='btn course-btn duration-500' ><button>Find Course</button></Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;