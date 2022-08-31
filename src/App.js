// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {NavLink, Outlet}from 'react-router-dom'
function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark px-3">
        <NavLink className="navbar-brand" to="">CyberSoft</NavLink>
        <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav me-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <NavLink className={({isActive})=>isActive ? 'bg-dark text-white nav-link' :'nav-link'} to="/home" aria-current="page">Home <span className="visually-hidden">(current)</span></NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/datveghe">Đặt Vé Xem Phim</NavLink>
            </li>
            {/* <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
              <div className="dropdown-menu" aria-labelledby="dropdownId">
                <a className="dropdown-item" href="#">Action 1</a>
                <a className="dropdown-item" href="#">Action 2</a>
              </div>
            </li> */}
          </ul>
          <form className="d-flex my-2 my-lg-0 mt-1 mt-lg-0">
              <NavLink className="nav-link text-white my-2 me-sm-2" to="/login">Login</NavLink>
              <NavLink className="nav-link text-white my-2 me-sm-2" to="/register">Register</NavLink>
            {/* <input className="form-control me-sm-2" type="text" placeholder="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
          </form>
        </div>
      </nav>
      <Outlet/>
      <footer className='bg-dark text-white text-center p-4'><h2>CyberSoft</h2></footer>
    </div>
  );
}

export default App;
