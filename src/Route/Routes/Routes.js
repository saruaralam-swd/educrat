import { createBrowserRouter } from "react-router-dom";
import Carts from "../../component/Carts/Carts";
import CheckOut from "../../component/CheckOut/CheckOut";
import ErrorPage from "../../component/ErrorPage/ErrorPage";
import Gallery from "../../component/Gallery/Gallery";
import Home from "../../component/Home/Home";
import Login from "../../component/Login/Login";
import Orders from "../../component/Orders/Orders";
import Products from "../../component/Products/Products";
import SignUp from "../../component/SignUp/SignUp";
import TimeTest from "../../component/TimeTest/TimeTest";
import Main from "../../Layout/Main";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
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
        element: <PrivateRoute><Orders></Orders></PrivateRoute>
      },
      {
        path: '/time',
        element: <TimeTest></TimeTest>
      },
      {
        path: '/gallery',
        element: <Gallery></Gallery>
      }
    ]
  },
  {
    path: '*',
    element: <ErrorPage></ErrorPage>
  }
]);