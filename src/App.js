import logo from './logo.svg';
import './App.css';
import { Link, useNavigate } from 'react-router-dom';

function App() {
  return (
    <>
      <nav className="topnavbar">
        <div className="nav-cont">
          <div>
            <img src={require("./kennytechLogo.jpeg")} className="logo" />
          </div>
          <div>
           <button className='btn btn-danger'><a href="https://www.kenytechworld.com">Official Website</a></button>
          <button></button>

          </div>


        </div>
      </nav>
    </>
  );
}

export default App;
