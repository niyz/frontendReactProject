import './Navbar.css';
import React from 'react';


const Navbar = (props) => {

    return (
        <div class="container">
<nav class="navbar navbar-dark bg-dark">
  
  <form class="form-inline">
    <input class="form-control mr-sm-2" type="search" placeholder="Username" aria-label="Search"/>
    <input class="form-control mr-sm-2" type="password" placeholder="Password" aria-label="Search"/>
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Register</button>
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Login</button>
  </form>      
  
  <form class="form-inline">
    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>

  </form>
</nav> 
</div>
    )
}

export default Navbar;