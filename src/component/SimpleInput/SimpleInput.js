import React, { useState } from 'react';

const SimpleInput = () => {
  const [enterName, setEnterName] = useState('');

  const nameInputChangeHandler = (event) => {
    setEnterName(event.target.value)
  };

  const fromSubmissionHandler = (event) => {
    event.preventDefault();

    console.log(enterName);
  };

  return (
    <div className=' bg-gray-800 p-5 border-2 border-red-200 my-32 rounded-md'>
      <from>
        <div className=''>
          <label className='text-white text-3xl font-semibold block' htmlFor="name">Your Name</label>
          <input onChange={nameInputChangeHandler} className='border border-black rounded-md px-4 py-1 focus:ring-2 ring-indigo-600' type="text" id="name" />
        </div>

        <div>
          <button onClick={fromSubmissionHandler} className='bg-blue-500 hover:bg-blue-600 text-white rounded-md px-4 py-1 '>Submit</button>
        </div>
      </from>
    </div>
  );
};

export default SimpleInput;