import "./navbar.css";

import logo from "../../assets/img/logo.png"

import { Link } from "react-router-dom";

function Navbar({ login }) {
  console.log("hello",login)
  if (!login) {
    return (
      <>
        <div class="page-wrapper">
          <div class="grad-bar"></div>
          <div class="nav-wrapper">
            <nav class="navbar">
              <img
                src={logo}
                alt="Company Logo"
              />
              <div class="menu-toggle" id="mobile-menu">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
              </div>
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
                src={logo}
                alt="Company Logo"
              />
              <div class="menu-toggle" id="mobile-menu">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
              </div>
              <ul class="nav no-search">
                {/* <li class="nav-item">
                  <Link className="a" to="/home">Home</Link>
                </li> */}
                <li class="nav-item">
                  <Link className="a" to="/home">Stats</Link>
                </li>
                <li class="nav-item">
                  <Link className="a" to="/form">New Connection</Link>
                </li>
                <li class="nav-item">
                  <Link className="b" to="/faq">FAQ</Link>
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
