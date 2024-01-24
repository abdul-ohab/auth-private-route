import './App.css'
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/Route.jsx';

function App() {

  return (
    <div>
     <RouterProvider router={router}> </RouterProvider>
    </div>
  )
}

export default App;
