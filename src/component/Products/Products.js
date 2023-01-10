import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';

/* 
1. 70(count)  / 10(size)  = 7(pages)

3(page) * 10(size) = skip 
10 (size)  = limit
4 * 10 = 40 
5 * 10 = 50 */

const Products = () => {
  const [products, setProducts] = useState([]);

  const [count, setCount] = useState(0);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(5);

  const pages = Math.ceil(count / size);

  const ary = [...Array(pages).keys()];

  useEffect(() => {
    const url = `http://localhost:5000/product?page=${page}&size=${size}`
    fetch(url)
      .then(res => res.json())
      .then(data => {
        const { count, products } = data;
        setProducts(products)
        setCount(count);
      })
  }, [page, size])

  return (
    <div>
      <h2 className='font-semibold text-2xl text-center my-5'>Total Product Found {count}</h2>

      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10 w-3/4 mx-auto'>
        {
          products.map(p => <ProductCard key={p._id} data={p}></ProductCard>)
        }
      </div>

      <div className='mx-20 m-20'>
        <p>Currently selected page: {page + 1} and size : {size}</p>

        {
          ary.map(number => <button onClick={() => setPage(number)} key={number} className={page === number ? 'border px-2 rounded-md mx-1 bg-gray-300' : 'border px-2 rounded-md mx-1'}>{number + 1}</button>)
        }

        <select onChange={(e) => setSize(e.target.value)} className='border px-2 rounded-md '>
          <option value='5'>5</option>
          <option value='10'>10</option>
          <option value='15'>15</option>
          <option value='20'>20</option>
        </select>

      </div>
    </div>
  );
};

export default Products;