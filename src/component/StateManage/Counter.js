import React, { useReducer } from 'react';

const Counter = () => {
  const initialState = 0;

  const reducer = (state, action) => {
    console.log(action);

    if (action.type === "INCREMENT") {
      return state + action.payload;
    } else if (action.type === "DECREMENT") {
      return state - action.payload;
    } else {
      return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <div className='max-w-sm border-2 shadow-xl rounded-md mx-auto my-10 p-5 text-center'>
        <div>
          <h2 className='mb-5'>{state}</h2>
          <button onClick={() => dispatch({ type: "DECREMENT", payload: 2 })} className='bg-red-500 text-white font-semibold px-2 py-1 rounded-md mr-2'>Decrease</button>
          <button onClick={() => dispatch({ type: "INCREMENT", payload: 5 })} className='bg-green-500 text-white font-semibold px-2 py-1 rounded-md'>Increase</button>
        </div>
      </div>
    </div>
  );
};

export default Counter;