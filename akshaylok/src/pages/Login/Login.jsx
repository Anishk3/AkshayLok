import { handleSignout } from "../../firebase/signOut";
import { GoogleSignin } from "../../firebase/googleProvider";
import { Navbar } from "../../components";

import google from "../../assets/img/google.png";
import { Link } from "react-router-dom";

import { AuthContext } from "../../context/authContext";

import axios from "../../hooks/axios";

import { useState } from "react";

import "./login.css";
import { useContext } from "react";

function Login() {
  const { userLogin } = useContext(AuthContext);

  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");


  async function handleSignIn(e) {
    e.preventDefault();

    const data = {
      email,
      password,
    };
    const res = await axios.post("/login", data);
    console.log(res.data);
    userLogin(res.data);
  }

  return (
    <div className="login">
      <Navbar login={false} />
      <main class="main">
        <div class="container">
          <section class="wrapper">
            <div class="heading">
              <h1 class="text text-large">Sign In</h1>
              <p class="text text-normal">
                New user?{" "}
                <span>
                  <Link to="/signup" class="text text-links">
                    Create an account
                  </Link>
                </span>
              </p>
            </div>
            <form name="signin" class="form">
              <div class="input-control">
                <label for="email" class="input-label" hidden>
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  class="input-field"
                  placeholder="Email Address"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div class="input-control">
                <label for="password" class="input-label" hidden>
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  class="input-field"
                  placeholder="Password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
              <div class="input-control">
                <a href="#" class="text text-links">
                  Forgot Password
                </a>
                <input
                  type="submit"
                  name="submit"
                  class="input-submit"
                  value="Sign In"
                  onClick={(e) => {
                    handleSignIn(e);
                  }}
                  // disabled
                />
              </div>
            </form>
            <div class="striped">
              <span class="striped-line"></span>
              <span class="striped-text">Or</span>
              <span class="striped-line"></span>
            </div>

            <div className="button">
              <button onClick={()=>{
                GoogleSignin()
              }}>
                <img src={google} alt="" />
                <span>Google</span>
              </button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Login;
