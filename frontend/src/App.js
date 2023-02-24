
import './App.css';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Register from './pages/Register';
function App() {
  const router=createBrowserRouter(
    [
      {
        path:"/",
        element : <div><a href="/register">register</a> hello</div>
      },
      {
        path:"/register",
        element : <Register />
      }
    ]
  )
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
