import React, { useState } from 'react';
import './NavBar.css';
import { Link } from 'react-scroll';

const NavBar = () => {
  //const [isMenuOpen, setMenuOpen] = useState(false);

  //const toggleMenu = () => {
    //setMenuOpen(!isMenuOpen);
  //};
  //console.log(isMenuOpen);
  return (
    <nav className="navbar">
      <div className="navbar-header">
        <div className="logo">Mamuni</div>
      </div>
      <ul className="navbar-menu">
        <li className="navbar-item"><Link to="home" smooth={true} duration ={500}>Home</Link></li>
        <li className="navbar-item"><Link to="hiw" smooth={true} duration ={500}>About</Link></li>
        <li className="navbar-item">Listen</li>
        <li className="navbar-item">Talk</li>
        <li className="navbar-item"><Link to="FAQ's" smooth={true} duration ={500}>FAQ's</Link></li>
        <li className="navbar-item signup">Sign Up</li>
      </ul>
    </nav>
  );
};

export default NavBar;



// import React from 'react';
// import './NavBar.css';

// const NavBar = () => {
//   return (
//     <nav className="navbar">
//       <div className="logo">Mamuni</div>
//       <ul className="navbar-menu">
//         <li className="navbar-item"><a href = "#home">Home</a></li>
//         <li className="navbar-item"><a href = "#hiw">About</a></li>
//         <li className="navbar-item">Listen</li>
//         <li className="navbar-item">Talk</li>
//         <li className="navbar-item"><a href="#FAQ's">FAQ's</a></li>
//         <li className="navbar-item signup">Sign Up</li>
//       </ul>
//     </nav>
//   );
// };

// export default NavBar;