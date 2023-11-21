import React from "react";
import './styles.css'
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <nav>
        <ul style={{fontSize:'2rem', width: '200px', margin:'auto'}}>
          <li style={{margin: '1rem'}}><Link to="/browse">Browse</Link></li>
          <li style={{margin: '1rem'}}><Link to="/contact">Contact</Link></li>
          <li style={{margin: '1rem'}}><Link to="/about-us">About Us</Link></li>
          <li style={{margin: '1rem'}}><Link to="/order-food">Order Food</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Login;
