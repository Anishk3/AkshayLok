import "./navbar.css";

import { Link } from "react-router-dom";

function Navbar({ login }) {
  
  if (!login) {
    return (
      <>
        <div class="page-wrapper">
          <div class="grad-bar"></div>
          <div class="nav-wrapper">
            <nav class="navbar">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c8/Bluestar_%28bus_company%29_logo.svg/1280px-Bluestar_%28bus_company%29_logo.svg.png"
                alt="Company Logo"
              />
              <div class="menu-toggle" id="mobile-menu">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
              </div>
              <ul class="nav no-search">
                <li class="nav-item">
                  <Link to='/'>Home</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </>
    );
  }else{
    return (
      <>
        <div class="page-wrapper">
          <div class="grad-bar"></div>
          <div class="nav-wrapper">
            <nav class="navbar">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c8/Bluestar_%28bus_company%29_logo.svg/1280px-Bluestar_%28bus_company%29_logo.svg.png"
                alt="Company Logo"
              />
              <div class="menu-toggle" id="mobile-menu">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
              </div>
              <ul class="nav no-search">
                <li class="nav-item">
                  <Link className="a" to="/">Home</Link>
                </li>
                <li class="nav-item">
                  <Link className="a" to="/about">About</Link>
                </li>
                <li class="nav-item">
                  <Link className="a" to="/form">New Connection</Link>
                </li>
                <li class="nav-item">
                  <Link className="a" to="/faq">FAQ</Link>
                </li>
                <li class="nav-item">
                  <Link className="a" to="/trans">Transactions</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </>
    );
    
  }


}

export default Navbar;
