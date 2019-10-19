import './Navbar.css';
import React from 'react';


const Navbar = (props) => {

    return (
        <div className="container">
<nav className="navbar navbar-dark bg-dark">
  
  <form className="form-inline">
    <input className="form-control mr-sm-2" type="search" placeholder="Username" aria-label="Search"/>
    <input className="form-control mr-sm-2" type="password" placeholder="Password" aria-label="Search"/>
    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Register</button>
    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Login</button>
  </form>      
  
  <form className="form-inline">
    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>


  </form>
</nav> 
</div>
    )
}

export default Navbar;