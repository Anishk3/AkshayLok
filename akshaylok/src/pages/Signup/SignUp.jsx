import { GoogleSignin } from "../../firebase/googleProvider";
import google from "../../assets/img/google.png";
import { Link } from "react-router-dom";
import akshayLok from "../../assets/img/AkshayLok.png";

import { useState, useContext } from "react";
import axios from "../../hooks/axios";
import { AuthContext } from "../../context/authContext";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
    const [selectedOption, setSelectedOption] = useState('Corporate');
  
    function handleSelectChange(event) {
      setSelectedOption(event.target.value);
      setSelectedOption(event.target.value);
      // console.log("meow",event.target.value)
    }
  const { userLogin } = useContext(AuthContext);

  async function handleSubmit(e) {
    e.preventDefault();

    console.log("diptanshu mkc",name, email, password,selectedOption);

    const response = await axios.post("/register", {
      email,
      password,
      userName: name,
      google: null,
      role:selectedOption
    });
    console.log("mera response",response.data)
    userLogin(response.data);
  }
  return (
    <div>
      <div className="login">
        <div className="img">
          <img src={akshayLok} alt="logo" />
          <h3>
            <span className="h3Span">Distributing Energy</span>
            <span>Empowering People</span>
          </h3>
        </div>
        <main class="main">
          <div class="container">
            <section class="wrapper">
              <div class="heading">
                <h1 class="text text-large">Sign Up</h1>
                <p class="text text-normal">
                  Existing User?
                  <span>
                    <Link to="/login" class="text text-links">
                      Login Here!
                    </Link>
                  </span>
                </p>
              </div>
              <form name="signin" class="form">
                <div class="input-control">
                  <label for="email" class="input-label" hidden>
                    Name
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    class="input-field"
                    placeholder="Name"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </div>

                <div class="input-control">
                  <label for="tel" class="input-label" hidden>
                    Contact
                  </label>
                  <input
                    type="tel"
                    name="tel"
                    id="tel"
                    class="input-field"
                    placeholder="Contact Number"
                  />
                </div>

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
                  <select name="role" id="role" class="input-field" value={selectedOption} onChange={handleSelectChange}>
                    <option value="Corporate">Corporate</option>
                    <option value="User">User</option>
                  </select>
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
                      handleSubmit(e);
                    }}
                  />
                </div>
              </form>
              <div class="striped">
                <span class="striped-line"></span>
                <span class="striped-text">Or</span>
                <span class="striped-line"></span>
              </div>

              <div className="button">
                <button onClick={GoogleSignin}>
                  <img src={google} alt="" />
                  <span>Google</span>
                </button>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}

export default SignUp;
