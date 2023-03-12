import React, { useState } from 'react';
import Child from './Child';

const Parent = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className='max-w-sm border-2 shadow-xl rounded-md mx-auto my-10 p-5 text-center'>
        <div>
          <p>Parent</p>
          <h2 className='mb-5'>{count}</h2>
        </div>
      </div>
      <Child count={count} setCount={setCount} />
    </>
  );
};

export default Parent;