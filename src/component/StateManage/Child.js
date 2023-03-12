import React from 'react';
import { useState } from 'react';
import GrandChild from './GrandChild';

const Child = ({count, setCount}) => {

  return (
    <>
      <div className='max-w-sm border-2 shadow-xl rounded-md mx-auto my-10 p-5 text-center'>
        <div>
          <p>Child</p>
          <h2 className='mb-5'>{count}</h2>
          <button onClick={() => setCount(count - 1)} className='bg-red-500 text-white font-semibold px-2 py-1 rounded-md mr-2'>Decrease</button>
          <button onClick={() => setCount(count + 1)} className='bg-green-500 text-white font-semibold px-2 py-1 rounded-md'>Increase</button>
        </div>
      </div>
      <GrandChild count={count} />
    </>
  );
};

export default Child;