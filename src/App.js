import logo from './logo.svg';
import './App.css';
import { Link, Outlet } from 'react-router-dom';

function App() {
  

 
  return (
    <div className="App">
      <Link to={"/userlogin"}>userLogin</Link>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
