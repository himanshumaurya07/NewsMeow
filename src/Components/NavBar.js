import React from 'react'
import {
    Link
  } from "react-router-dom";

 const NavBar=()=> {
  
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/general">NewzMeow</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/general">Home</Link>
        </li>
       
          <li className="nav-item"><Link className="nav-link" to="/about">About US</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/business">Business</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/general">General</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/health">Health</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/science">Science</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/sports">Sports</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/technology">Technology</Link></li>
          

        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Others
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/">Education</Link></li>
            <li><Link className="dropdown-item" to="/">Colleges</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" to="/">states</Link></li>
          </ul>
        </li>
        
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div> 
  </div>
</nav>
      </div>
    )
  }


export default NavBar