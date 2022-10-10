import React from 'react';

const Category = ({ category }) => {
  console.log(category);

  const {picture, title, course} = category;

  return (
    <div className=' border text-center rounded-md p-5 bg-[#EEF2F6]'>
      <img className='mx-auto' src={picture} alt="" />
      <h4 className='text-lg font-semibold'>{title}</h4>
     <p>course {course}</p>
    </div>
  );
};

export default Category;