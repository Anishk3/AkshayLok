import './navbar.css'

import { Link } from "react-router-dom"

function Navbar() {



  return (
    <>
    <h1>
      navbar
    </h1>
    <p><Link to='/'>Home</Link></p>
    <p><Link to='/signup'>SignUp</Link></p>
    <p><Link to='/login'>Login</Link></p>
    </>
    
  )
}

export default Navbar