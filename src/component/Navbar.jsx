import React from "react";
import './login.css';
import {Link } from 'react-router-dom'
function Navbar (){
return <nav className="navbar">

<h3><Link to="/login">Login</Link></h3>

<h3><Link to="/VehicleList">VehicleList</Link></h3>

<h3><Link to="/Sort">Sort</Link></h3>

</nav>
}

export default Navbar;