import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './Layout/Main';
import Empty from './component/Empty/Empty'
import Home from './component/Home/Home';
import Products from './component/Products/Products';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/products',
          element: <Products></Products>
        }
      ]
    },
    {
      path: '*',
      element: <Empty></Empty>
    }
  ]);

  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App;
