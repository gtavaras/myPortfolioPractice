import React from 'react';
import { Link } from 'react-router-dom';
export default function Layout() {
 return (
 <>
 <h1>My Portfolio</h1>
 <nav>
 <Link to="/">Home</Link> | <Link to="/about">About me</Link> | <Link to="/project">Projects</Link>| <Link to="/services">Services</Link>| <Link to="/contact">Contact me</Link>
 </nav>
<br/>
 <hr />
 
 </>
 
 );
}
