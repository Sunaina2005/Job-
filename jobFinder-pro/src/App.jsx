import { Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import './index.css';

function App(){

  return (
    <>
  <Navbar/>
  <Outlet />
     <footer>Footer</footer>
    </>
  )
}
export default App