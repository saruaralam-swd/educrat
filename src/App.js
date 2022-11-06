import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './Layout/Main';
import Empty from './component/Empty/Empty'
import Home from './component/Home/Home';
import Products from './component/Products/Products';
import Login from './component/Login/Login';
import SignUp from './component/SignUp/SignUp';
import Cart from './component/Carts/Carts';
import Carts from './component/Carts/Carts';

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
          path: '/home',
          element: <Home></Home>
        },
        {
          path: '/products',
          element: <Products></Products>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signup',
          element: <SignUp></SignUp>
        },
        {
          path: '/cart',
          loader: () => fetch('http://localhost:5000/cart'),
          element: <Carts></Carts>
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
