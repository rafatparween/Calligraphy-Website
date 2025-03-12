import React from 'react';
import './Navbar.css'; // Add the CSS file for Navbar styles
import './fonts.css'; // Add the CSS file for fonts
import Link from 'next/link';
import Image from 'next/image';
function NavBar() {
  return (
    <div className="navbar">
      <div className="navbar-links">
        <Link href="/">
          {/* <Image 
            src="/logo.png" // Update with your actual logo path (place logo inside 'public' folder)
            alt="Company Logo"
            width={150} // Adjust width as needed
            height={50} // Adjust height as needed
            className="logo"
          /> */}
          <h1 className="navbar-links">Print Assist</h1>  
        </Link>
      </div>
      <div className="navbar-links">
        <Link href="/">Home</Link>
        <Link href="/">About</Link>
        <Link href="/">Contact</Link>
        {/* <Link to="/Cart"><ShoppingBag className="cart-icon" /></Link> */}
      </div>
    </div>
  );
}

export default NavBar;

