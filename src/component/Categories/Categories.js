import React, { useEffect, useState } from 'react';
import Category from '../Category/Category';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('categories.json')
      .then(res => res.json())
      .then(data => setCategories(data))
  }, []);

  return (
    <div className='mt-28'>
      <div className='text-center mb-10'>
        <h2 className='mb-2 text-3xl font-bold'>Top Categories</h2>
        <p className='text-gray-500'>Lorem ipsum dolor sit amet, consectetur.</p>
      </div>
      <div className='grid grid-cols-6 gap-4'>
        {
          categories.map(category => <Category key={category.id} category={category}>categories</Category>)
        }
      </div>
    </div>
  );
};

export default Categories;