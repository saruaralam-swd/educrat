import React from 'react';

const GrandChild = ({count}) => {
  return (
    <div>
      <div className='max-w-sm border-2 shadow-xl rounded-md mx-auto my-10 p-5 text-center'>
        <div>
          <p>Grand Child</p>
          <h2 className='mb-5'>{count}</h2>
        </div>
      </div>
    </div>
  );
};

export default GrandChild;