import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import 'react-photo-view/dist/react-photo-view.css';
import { router } from './Route/Routes/Routes';

function App() {


  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App;
