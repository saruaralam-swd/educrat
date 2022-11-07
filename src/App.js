import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './Layout/Main';
import Empty from './component/Empty/Empty'
import Home from './component/Home/Home';
import Products from './component/Products/Products';
import Login from './component/Login/Login';
import SignUp from './component/SignUp/SignUp';
import Carts from './component/Carts/Carts';
import CheckOut from './component/CheckOut/CheckOut';
import PrivateRoute from './Route/PrivateRoute/PrivateRoute';
import Orders from './component/Orders/Orders';

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
          element: <PrivateRoute><Carts></Carts></PrivateRoute>
        },
        {
          path: '/cart/:id',
          loader: ({params}) => fetch(`http://localhost:5000/cart/${params.id}`),
          element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>
        },
        {
          path: '/orders',
          loader: () => fetch('http://localhost:5000/orders'),
          element: <Orders></Orders>
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
