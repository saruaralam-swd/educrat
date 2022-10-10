import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './Layout/Main';
import Empty from './component/Empty/Empty'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
    },
    {
      path:'*',
      element: <Empty></Empty>
    }
  ]);

  return (
    <div className='App'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App;
